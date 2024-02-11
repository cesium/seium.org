import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import API from "@lib/api";
import * as api from "@lib/api";
import * as USER from "@lib/user";

interface ILoginDTO {
  email: string;
  password: string;
}

export interface IBadge {
  avatar: string | null;
  begin: string;
  description: string;
  end: string;
  id: number;
  name: string;
  tokens: number;
  type: number;
}

export interface IPrize {
  avatar: string;
  id: number;
  is_redeemable: boolean;
  name: string;
  not_redeemed: number;
}

export interface IAbstractUser {
  email: string;
  type: string;
}

export interface IAttendee extends IAbstractUser {
  avatar: string | null;
  badge_count: number;
  badges: IBadge[];
  course: number;
  cv: string | null;
  entries: number;
  id: string;
  name: string;
  nickname: string;
  prizes: IPrize[];
  redeemables: IPrize[];
  token_balance: number;
}

export interface IStaff extends IAbstractUser {
  id: number;
  is_admin: boolean;
}

export interface ISponsor extends IAbstractUser {
  badge_id: number;
  /** The id of the company */
  id: number;
  name: string;
  sponsorship: string;
  /** The id of the user */
  user_id: number;
}

export type IUser = IAttendee | ISponsor | IStaff;

interface IAuthContext {
  user: IUser | null;
  errors?: string;

  // Booleans
  isAuthenticated: boolean;
  isLoading: boolean;

  // Updates user in state
  updateUser: (user: IUser | null) => void;
  refetchUser: () => void;

  // Api calls
  login: (params: ILoginDTO) => void;
  logout: () => void;
  editUser: (username: FormData) => void;
  sign_up: (fields: any) => void;
}

export const AuthContext = createContext({} as IAuthContext);

const TOKEN_KEY_NAME = "safira_token";

// Function that consumes the context
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [errors, setErrors] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isFirstLoading, setFirstLoading] = useState(true);
  const [needsRefetch, setRefetch] = useState(true);

  useEffect(() => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }

    setLoading(false);
  }, [user]);

  useEffect(() => {
    const jwt = localStorage.getItem(TOKEN_KEY_NAME);

    if (!jwt) {
      // No jwt means it's user's first time
      setFirstLoading(false);
      return;
    }

    API.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
    api
      .getCurrentUser()
      .then((response) => {
        setUser(response);
      })
      .catch((_errors) => {
        // It means the jwt is expired
        localStorage.removeItem(TOKEN_KEY_NAME);
        delete API.defaults.headers.common["Authorization"];
      })
      .finally(() => setFirstLoading(false));
  }, [needsRefetch]);

  function sign_up(fields) {
    setLoading(true);

    api
      .sign_up(fields)
      .then(({ jwt }) => {
        localStorage.setItem(TOKEN_KEY_NAME, jwt);
        API.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
        api.getCurrentUser().then((response) => {
          setUser(response);
          switch (response.type) {
            case USER.ROLES.ATTENDEE:
              router.push("/attendee/profile");
              break;
            case USER.ROLES.SPONSOR:
              router.push("/sponsor/scanner");
              break;
            case USER.ROLES.STAFF:
              router.push("/staff/badges");
              break;
            default:
              throw new Error(`Unknown USER TYPE: ${response.type}`);
          }
        });
      })
      .catch((e) => {
        setErrors("Something went wrong. Check your input and try again"); //e.message
        setUser(null);
        setLoading(false);
      });
  }

  function login({ email, password }) {
    setLoading(true);

    api
      .sign_in({ email, password })
      .then(({ jwt }) => {
        localStorage.setItem(TOKEN_KEY_NAME, jwt);
        API.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
        api.getCurrentUser().then(async (response) => {
          if (router.query.from == undefined) {
            switch (response.type) {
              case USER.ROLES.ATTENDEE:
                await router.push({ query: { from: "/attendee/profile" } });
                break;
              case USER.ROLES.SPONSOR:
                await router.push({ query: { from: "/sponsor/scanner" } });
                break;
              case USER.ROLES.STAFF:
                await router.push({ query: { from: "/staff/badges" } });
                break;
            }
          }
          setUser(response);
        });
      })
      .catch((errors) => {
        if (errors.response?.data?.error) {
          setErrors(errors.response.data.error);
        } else if (errors.response) {
          setErrors("Request denied by the server");
        } else if (errors.request) {
          setErrors(
            "No connection to the server. Please check your internet connection and try again later"
          );
        } else {
          setErrors(
            "Something went wrong :/ Please check your internet connection and try again later"
          );
        }
        setUser(null);
        setLoading(false);
      });
  }

  function logout() {
    setLoading(true);
    localStorage.removeItem(TOKEN_KEY_NAME);
    delete API.defaults.headers.common["Authorization"];
    router.push("/").finally(() => setUser(null));
  }

  function editUser(nickname) {
    setLoading(true);

    api
      .editUser(user.id, nickname)
      .then((at) => {
        setUser((oldUser) => ({ ...oldUser, ...at }));
      })
      .catch((errors) => {
        setUser(null);
        setErrors(
          "Something went wrong :/ Please check your internet connection and try again later"
        );
      });
  }

  function refetchUser() {
    setRefetch((needsRefetch) => !needsRefetch);
  }

  function updateUser(updatedUser: IUser | null) {
    setUser(updatedUser);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        updateUser: updateUser,
        errors,
        login,
        logout,
        editUser,
        refetchUser,
        sign_up,
      }}
    >
      {!isFirstLoading && children}
    </AuthContext.Provider>
  );
}

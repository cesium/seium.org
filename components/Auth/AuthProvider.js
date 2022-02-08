import { createContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import API from "/lib/api";
import * as api from "/lib/api";
import * as USER from "/lib/user";

export const AuthContext = createContext();

const TOKEN_KEY_NAME = "safira_token";

export function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isFirstLoading, setFirstLoading] = useState(true);

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
        setAuthenticated(true);
        setToken(jwt);
      })
      .catch((_errors) => {
        // It means the jwt is expired
        localStorage.clear();
        delete API.defaults.headers.common["Authorization"];
      })
      .finally(() => setFirstLoading(false));
  }, [token]);

  function login({ email, password }) {
    setLoading(true);

    api
      .sign_in({ email, password })
      .then(({ jwt }) => {
        localStorage.setItem(TOKEN_KEY_NAME, jwt);
        setToken(jwt);
        API.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
        api.getCurrentUser().then((response) => {
          setUser(response);
          setAuthenticated(true);
          setToken(jwt);
          switch (response.type) {
            case USER.ROLES.ATTENDEE:
              router.push("/attendee/profile");
              break;
            case USER.ROLES.COMPANY:
              router.push("/sponsor/offline/profile");
              break;
            default:
              throw new Error(`Unknown USER TYPE: ${response.type}`);
          }
        });
      })
      .catch((error) => {
        setErrors(error);
        setUser(undefined);
      })
      .finally(() => setLoading(false));
  }

  function logout() {
    setLoading(true);
    localStorage.clear();
    delete API.defaults.headers.common["Authorization"];
    setUser(undefined);
    setAuthenticated(false);
    router.push("/");
    setLoading(false);
  }

  function editUser(values) {
    setLoading(true);

    api
      .editUser(values)
      .then((user) => {
        setUser((oldUser) => ({ ...oldUser, ...user }));
      })
      .catch((error) => setErrors(error?.data?.errors))
      .finally(() => setLoading(false));
  }

  // Make the provider update only when it should
  const values = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      errors,
      login,
      logout,
      editUser,
    }),
    // eslint-disable-next-line
    [user, isAuthenticated, isLoading, errors]
  );

  return (
    <AuthContext.Provider value={values}>
      {!isFirstLoading && children}
    </AuthContext.Provider>
  );
}

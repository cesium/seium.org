import { createContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import * as api from "/lib/api.js";
import { data } from "autoprefixer";
import API from "../../lib/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isFirstLoading, setFirstLoading] = useState(true);

  function setToken(token) {
    localStorage.clear();
    localStorage.setItem("token", token);
    api.API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api.getCurrentUser().then((u) => {
      setUser(u);
    }).catch(_ => localStorage.clear());
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
    setFirstLoading(false);
  }, []);

  function login({ email, password }) {
    setLoading(true);
    api
      .login({ email, password })
      .then((data) => {
        setToken(data.jwt);
        router.push("/attendee/profile");
      })
      .catch((error) => setErrors(error?.data?.errors))
      .finally(() => setLoading(false));
  }

  function sign_up({ email, password, role }) {
    setLoading(true);

    api
      .sign_up({ email, password, role })
      .then((auth) => {
        setAuthenticated(auth);
        router.push("");
      })
      .catch((error) => setErrors(error?.data?.errors))
      .finally(() => setLoading(false));
  }

  function logout() {
    setLoading(true);

    api
      .logout()
      .then(() => {
        setUser(undefined);
        router.push("/");
      })
      .catch((error) => setErrors(error?.data?.errors))
      .finally(() => setLoading(false));
  }

  function edit_user(values) {
    setLoading(true);

    api
      .editUser(values)
      .catch((error) => setErrors(error?.data?.errors))
      .finally(() => setLoading(false));
  }

  // Make the provider update only when it should
  const values = useMemo(
    () => ({
      user,
      isLoading,
      errors,
      login,
      sign_up,
      logout,
      edit_user,
    }),
    // eslint-disable-next-line
    [user, isLoading, errors]
  );

  return (
    <AuthContext.Provider value={values}>
      {!isFirstLoading && children}
    </AuthContext.Provider>
  );
}

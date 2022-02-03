import { createContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import * as api from "/lib/api.js";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [errors, setErrors] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isFirstLoading, setFirstLoading] = useState(true);

  useEffect(() => {
    setFirstLoading(false);
    /*api
      .getCurrentUser()
      .catch(() => {})
      .finally(() => setFirstLoading(false));*/
  }, []);

  function login({ email, password }) {
    setLoading(true);
    api
      .login({ email, password })
      .then((success) => {
        setAuthenticated(success); 
        if(success)
          router.push("/attendee/profile")
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
      .then((auth) => setAuthenticated(auth))
      .catch((error) => setErrors(error?.data?.errors))
      .finally(() => setLoading(false));
  }

  // Make the provider update only when it should
  const values = useMemo(
    () => ({
      authenticated,
      isLoading,
      errors,
      login,
      sign_up,
      logout,
      edit_user,
    }),
    // eslint-disable-next-line
    [authenticated, isLoading, errors]
  );

  return (
    <AuthContext.Provider value={values}>
      {!isFirstLoading && children}
    </AuthContext.Provider>
  );
}

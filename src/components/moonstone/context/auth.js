import React, { createContext, useContext, useReducer } from "react";

import API from "../../../utils/api";

export const AuthContext = createContext();

const reducerAuth = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.clear();
      localStorage.setItem("token", action.payload.jwt);
      API.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload.jwt}`;
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.jwt,
      };
    case "LOGOUT":
      localStorage.clear();
      delete API.defaults.headers.common["Authorization"];
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const AuthContextProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(reducerAuth, {
    isAuthenticated: false,
    token: null,
  });

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

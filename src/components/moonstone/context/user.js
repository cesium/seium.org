import React, { createContext, useContext, useReducer } from "react";

export const UserContext = createContext();

const reducerUser = (user, action) => {
  switch (action.type) {
    case "INIT":
      return action.user;
    case "UPDATE":
      return { ...user, ...action.user };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const UserContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducerUser, {});

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

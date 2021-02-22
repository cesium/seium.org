import React, { createContext, useContext, useReducer } from "react";

export const UserContext = createContext();

const reducerUser = (user, action) => {
  switch (action.type) {
    case "INIT_ATTENDEE":
      return { ...action.user, type: "attendee" };
    case "INIT_COMPANY":
      return { ...action.user, type: "company" };
    case "INIT_MANAGER":
      return { ...action.user, type: "manager" };
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

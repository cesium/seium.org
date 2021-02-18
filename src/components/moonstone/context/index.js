import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const AdminContextProvider = ({ children, initialState }) => {
  const [links, dispatch] = useAsyncReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ links, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useLinks = () => useContext(LinksContext);

export const MoonstoneContextProvider = ({ children, initialState }) => {
  const [links, dispatch] = useAsyncReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ links, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

import React from "react";
import { AuthContextProvider } from "./auth";
import { UserContextProvider } from "./user";

export const MoonstoneContextProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </AuthContextProvider>
  );
};

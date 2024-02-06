import { NotificationData, fetchers } from "./fetchers";
import { useContext, createContext, useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";

const NotifyContext = createContext({} as NotificationData);

export const useNotify = () => useContext<NotificationData>(NotifyContext);

export function NotifyProvider({ children }) {
  const initialValue = Object.fromEntries(
    Object.entries(fetchers).map(([k, v]) => [k, v.initialValue])
  );

  const [socket, setSocket] = useState<Socket>(null);
  const [value, setValue] = useState(initialValue as NotificationData);

  useEffect(() => {
    fetch("/api/notifications").finally(() => {
      const s = io("/");

      Object.keys(fetchers).forEach((key) => {
        s.on(key, (data) => {
          setValue({ ...value, [key]: data });
        });
      });

      setSocket(s);
    });

    return () => {
      socket?.disconnect();
      setSocket(null);
    };
  }, []);

  return (
    <NotifyContext.Provider value={value}>{children}</NotifyContext.Provider>
  );
}

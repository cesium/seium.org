import { useContext, createContext, useState, useEffect } from "react";
import { Socket } from "phoenix";

export interface ISpotlight {
  id: number;
  name: string;
  badge_id: number;
  end: string;
}

type NotificationData = {
  spotlight: ISpotlight;
};

const NotifyContext = createContext({} as NotificationData);

export const useNotify = () => useContext<NotificationData>(NotifyContext);

const getPushUrl = () => {
  return process.env.NEXT_PUBLIC_WS_URL;
};

export function NotifyProvider({ children }) {
  const [value, setValue] = useState({ spotlight: null } as NotificationData);

  useEffect(() => {
    const socket = new Socket(getPushUrl(), {
      reconnectAfterMs: () => 10000,
      rejoinAfterMs: () => 10000,
      heartbeatIntervalMs: 30000,
    });

    socket.connect();
    const channel = socket.channel("spotlight");

    channel.join();

    channel.on("spotlight", (data: ISpotlight) => {
      setValue({ ...value, spotlight: data });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <NotifyContext.Provider value={value}>{children}</NotifyContext.Provider>
  );
}

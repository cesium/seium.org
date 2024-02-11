import { useState, useEffect } from "react";
import { Socket } from "phoenix";

const getPushUrl = () => {
  return `ws://${process.env.NEXT_PUBLIC_API_URL}/socket`;
};

function useWebSocket({ room, onNewMessage }) {
  const [channel, setChannel] = useState();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (room) {
      const socket = new Socket(getPushUrl(), {
        reconnectAfterMs: () => 10000,
        rejoinAfterMs: () => 10000,
        heartbeatIntervalMs: 30000,
      });

      socket.connect();
      const channel = socket.channel(room);

      setChannel(channel);
      channel
        .join()
        .receive("ok", () => {
          setConnected(true);
        })
        .receive("error", () => {
          setConnected(false);
        });

      if (onNewMessage) {
        channel.on("spotlight", onNewMessage);
      }

      return () => {
        setConnected(false);
        socket.disconnect();
      };
    }

    return () => {};
  }, []);

  useEffect(() => {
    channel?.off("spotlight");
    channel?.on("spotlight", onNewMessage);
  }, [onNewMessage]);

  return { connected, channel };
}

export default useWebSocket;

import { NotificationData, fetchers } from "@context/Notification/fetchers";
import { Server } from "socket.io";

const serverData = {} as NotificationData;

const ioHandler = async (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      Object.keys(fetchers).forEach((key) => {
        if (serverData[key] !== undefined) socket.emit(key, serverData[key]);
      });
    });

    for (const [key, fetcher] of Object.entries(fetchers)) {
      console.log("Initial fetch for", key);
      fetcher.fetch().then((value) => {
        serverData[key] = value;
        io.sockets.emit(key, value);
      });

      setInterval(async () => {
        console.log("Fetching", key);
        const newValue = await fetcher.fetch();

        if (JSON.stringify(serverData[key]) !== JSON.stringify(newValue)) {
          serverData[key] = newValue;
          io.sockets.emit(key, newValue);
        }
      }, fetcher.interval);
    }

    res.socket.server.io = io;
  }
  res.end();
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default ioHandler;

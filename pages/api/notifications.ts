import { NotificationData, fetchers } from "@context/Notification/fetchers";
import { AxiosError } from "axios";
import { Server } from "socket.io";

const serverData = {} as NotificationData;

function handleError(e: any) {
  var err: string;
  if (e.response?.data?.error) {
    err = "status code " + e.response.status + " - " + e.response.data.error;
  } else if (e.response) {
    err = "status code " + e.response.status;
  } else if (e.request) {
    err = "no connection";
  } else {
    err = "unknown error";
  }
  console.log("Error fetching notification data: " + err);
}

const ioHandler = async (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      cors: {
        origin: "*",
      },
      addTrailingSlash: false 
    });

    io.on("connection", (socket) => {
      Object.keys(fetchers).forEach((key) => {
        if (serverData[key] !== undefined) socket.emit(key, serverData[key]);
      });
    });

    for (const [key, fetcher] of Object.entries(fetchers)) {
      fetcher
        .fetch()
        .then((value) => {
          serverData[key] = value;
          io.sockets.emit(key, value);
        })
        .catch((e) => handleError(e));

      setInterval(() => {
        fetcher
          .fetch()
          .then((newValue) => {
            if (JSON.stringify(serverData[key]) !== JSON.stringify(newValue)) {
              serverData[key] = newValue;
              io.sockets.emit(key, newValue);
            }
          })
          .catch((e) => handleError(e));
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

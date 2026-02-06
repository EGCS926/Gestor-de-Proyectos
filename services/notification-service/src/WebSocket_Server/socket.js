import { Server } from "socket.io";

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    console.log("Cliente conectado:", socket.id);

    socket.on("join", (userId) => {
      socket.join(userId);
    });
  });
};

export const emitNotification = (userId, payload) => {
  if (io) {
    io.to(userId).emit("notification", payload);
  }
};
import { Server } from "socket.io";

const io = new Server(5000, {
  cors: { origin: "*" }
});

io.on("connection", socket => {
  console.log("Cliente conectado");

  socket.on("event", data => {
    io.emit("notification", {
      message: data.message
    });
  });
});

console.log("Notification Service running on port 5000");
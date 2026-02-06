import Redis from "ioredis";
import { emitNotification } from "../websocket/socket.js";

const subscriber = new Redis({ host: "redis" });

subscriber.subscribe("notifications");

subscriber.on("message", (channel, message) => {
  const data = JSON.parse(message);
  emitNotification(data.userId, data);
});
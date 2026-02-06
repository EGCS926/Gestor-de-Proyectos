import express from "express";
import proxy from "express-http-proxy";

const app = express();
app.use(express.json());

app.use("/auth", proxy("http://auth:4000"));
app.use("/projects", proxy("http://projects:4001"));
app.use("/tasks", proxy("http://tasks:4002"));

app.listen(3000, () =>
  console.log("Gateway API running on port 3000")
);
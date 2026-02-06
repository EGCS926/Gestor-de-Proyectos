// backend/server.js
import express from "express";
import { connectDB } from "./src/config/db.js";
import taskRoutes from "./src/routes/task.routes.js";
import projectRoutes from "./src/routes/project.routes.js";
import authRoutes from "./src/routes/auth.routes.js";
import cors from "cors";
import app from "./app.js";

app.use(cors());
connectDB();


app.use("/api/tasks", taskRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => console.log("Servidor activo en puerto 3000"));

export default app;
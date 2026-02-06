import express from "express";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

// 🔥 MIDDLEWARES GLOBALES
const app = express();
app.use(compression()); // ✅ AQUÍ
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String
});
const Project = mongoose.model("Project", ProjectSchema);

// CRUD
app.get("/projects", async (_, res) =>
  res.json(await Project.find())
);

app.post("/projects", async (req, res) =>
  res.status(201).json(await Project.create(req.body))
);

app.put("/projects/:id", async (req, res) =>
  res.json(await Project.findByIdAndUpdate(req.params.id, req.body, { new: true }))
);

app.delete("/projects/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

app.listen(4001, () =>
  console.log("Project Service running on port 4001")
);

// Rutas
import projectRoutes from "./routes/project.routes.js";
app.use("/projects", projectRoutes);

// Conexión DB y server
mongoose.connect(process.env.MONGO_URI);

app.listen(3002, () => {
  console.log("Project Service running on port 3002");
});
import express from "express";
import mongoose from "mongoose";

const app = express();
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
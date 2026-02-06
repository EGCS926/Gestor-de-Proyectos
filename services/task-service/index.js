import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const TaskSchema = new mongoose.Schema({
  projectId: String,
  title: String,
  completed: Boolean
});
const Task = mongoose.model("Task", TaskSchema);

app.get("/tasks/:projectId", async (req, res) =>
  res.json(await Task.find({ projectId: req.params.projectId }))
);

app.post("/tasks", async (req, res) =>
  res.status(201).json(await Task.create(req.body))
);

app.put("/tasks/:id", async (req, res) =>
  res.json(await Task.findByIdAndUpdate(req.params.id, req.body, { new: true }))
);

app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

app.listen(4002, () =>
  console.log("Task Service running on port 4002")
);
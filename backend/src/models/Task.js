// backend/src/models/Task.js
import mongoose from "mongoose";


const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ["pendiente", "en_progreso", "completada"], default: "pendiente" },
  projectId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId
});

export default mongoose.model("Task", TaskSchema);
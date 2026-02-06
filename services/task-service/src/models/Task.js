import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true
    },
    completed: { type: Boolean, default: false }
  },
  { timestamps: true }
);

// 🔥 ÍNDICE PARA CONSULTAS POR PROYECTO
TaskSchema.index({ projectId: 1 });

export default mongoose.model("Task", TaskSchema);
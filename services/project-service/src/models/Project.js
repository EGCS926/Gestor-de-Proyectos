import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
    description: String,
  },
  { timestamps: true }
);

// 🔥 ÍNDICE PARA CONSULTAS RÁPIDAS
ProjectSchema.index({ owner: 1 });

export default mongoose.model("Project", ProjectSchema);

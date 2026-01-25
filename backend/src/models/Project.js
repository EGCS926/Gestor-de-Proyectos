import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  userId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Project", ProjectSchema);
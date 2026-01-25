// backend/src/config/db.js
import mongoose from "mongoose";


export const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/gestor_tareas");
  console.log("DB conectada");
};
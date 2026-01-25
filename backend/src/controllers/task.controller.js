// backend/src/controllers/task.controller.js
import Task from "../models/Task.js";


export const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
};


export const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};
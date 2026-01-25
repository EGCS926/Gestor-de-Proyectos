import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

export const createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
};
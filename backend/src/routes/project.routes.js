import { Router } from "express";
import { getProjects } from "../controllers/project.controller.js";

const router = Router();

router.get("/", getProjects);
router.post("/", createProject);

export default router;

export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};
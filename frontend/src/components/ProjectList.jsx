import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function ProjectList({ refresh }) {
  const [projects, setProjects] = useState([]);
  

  useEffect(() => {
    api.get("/projects").then(res => setProjects(res.data));
  }, [refresh]);

  return (
    <div>
      <h3>Proyectos registrados</h3>

      {projects.map(project => (
        <div key={project._id}>
          <strong>{project.name}</strong>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
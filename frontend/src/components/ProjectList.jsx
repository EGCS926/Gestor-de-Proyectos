import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function ProjectList({ refreshFlag, onSelect }) {
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    const res = await api.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    loadProjects();
  }, [refreshFlag]); // 👈 se recarga cuando cambia

  return (
    <div>
      <h2>Proyectos</h2>

      {projects.length === 0 ? (
        <p>No hay proyectos</p>
      ) : (
        <ul>
          {projects.map((p) => (
            <li key={p._id} onClick={() => onSelect && onSelect(p)}>
              <strong>{p.name}</strong>
              <br />
              <small>{p.description}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
import { useState } from "react";
import { api } from "../services/api";

export default function ProjectItem({ project, onChange }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);

  const updateProject = async () => {
    await api.put(`/projects/${project._id}`, {
      name,
      description,
    });

    setEditing(false);
    onChange();
  };

  return (
    <div>
      {editing ? (
        <>
          <input value={name} onChange={e => setName(e.target.value)} />
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
          <button onClick={updateProject}>Guardar</button>
        </>
      ) : (
        <>
          <strong>{project.name}</strong>
          <p>{project.description}</p>
          <button onClick={() => setEditing(true)}>Editar</button>
        </>
      )}
    </div>
  );
}
import { useState } from "react";
import { api } from "../services/api";

export default function ProjectForm({ onCreated }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("El nombre es obligatorio");
      return;
    }

    const res = await api.post("/projects", {
      name,
      description
    });

    setName("");
    setDescription("");

    // 🔁 avisa al padre que hay un nuevo proyecto
    onCreated && onCreated(res.data);
  };

  return (
    <form onSubmit={submit}>
      <h3>Nuevo Proyecto</h3>

      <input
        placeholder="Nombre del proyecto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Crear Proyecto</button>
    </form>
  );
}
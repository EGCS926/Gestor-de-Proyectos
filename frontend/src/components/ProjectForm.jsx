import { useState } from "react";
import { api } from "../services/api";

export default function ProjectForm({ onProjectCreated }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) return alert("El nombre es obligatorio");

    await api.post("/projects", {
      name,
      description,
    });

    setName("");
    setDescription("");
    onProjectCreated(); // refresca la lista
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Registrar proyecto</h3>

      <input
        type="text"
        placeholder="Nombre del proyecto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Guardar</button>
    </form>
  );
}
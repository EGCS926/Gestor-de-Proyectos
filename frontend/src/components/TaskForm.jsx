// frontend/src/components/TaskForm.jsx
import { useState } from "react";
import { api } from "../services/api";


export default function TaskForm() {
  const [title, setTitle] = useState("");

  const submit = async e => {
    e.preventDefault();
    if (!title) return alert("Título requerido");
    await api.post("/tasks", { title });
    setTitle("");
  };

  return (
    <form onSubmit={submit}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button>Agregar</button>
    </form>
  );
}
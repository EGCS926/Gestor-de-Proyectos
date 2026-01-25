// frontend/src/components/TaskList.jsx
import { useEffect, useState } from "react";
import { api } from "../services/api";


export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/tasks").then(res => setTasks(res.data));
  }, []);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>{task.title} - {task.status}</li>
      ))}
    </ul>
  );
}
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ProjectList from "./components/ProjectList";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Gestor de Tareas</h1>
      <ProjectList />
      <TaskForm />
      <TaskList />
    </div>
  );
}
import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

export default function App() {
  const [refresh, setRefresh] = useState(0);

  const reloadProjects = () => setRefresh(prev => prev + 1);

  return (
    <div>
      <h1>Gestor de Proyectos</h1>
      <ProjectForm onProjectCreated={reloadProjects} />
      <ProjectList refresh={refresh} />
    </div>
  );
}
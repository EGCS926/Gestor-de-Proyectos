import { useState } from "react";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

export default function Dashboard() {
  const [refreshProjects, setRefreshProjects] = useState(0);

  return (
    <>
      <ProjectForm
        onCreated={() => setRefreshProjects((v) => v + 1)}
      />

      <ProjectList refreshFlag={refreshProjects} />
    </>
  );
}
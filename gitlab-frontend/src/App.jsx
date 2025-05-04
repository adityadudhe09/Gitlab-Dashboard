import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectTable from "./components/ProjectTable";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Failed to fetch projects", err));
  }, []);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">GitLab Project Dashboard</h1>
      <ProjectTable projects={projects} />
    </div>
  );
};

export default App;

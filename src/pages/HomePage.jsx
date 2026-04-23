
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [projects, setProjects] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/projects`).then((response) => {console.log(response); setProjects(response.data.data);});}, []);

  return (
    <main className="homepage-main">
      <div className="container">
        <div className="row py-5">
{projects.map((project) => (
    <div key={project.id} className="col-md-4 mb-4"><ProjectCard project={project} /></div>  
))}

        </div>
      </div>
    </main>
  );
}
import { Link } from "react-router-dom"

export default function ProjectCard({ project }) {


  return (
    <div className="project-card h-100">
      <div className="mb-3">
        <span className="project-type-badge">  {project.type?.name || 'Nessun tipo'}</span>
      </div>
      <h3 className="project-card-title">{project.name}</h3>
      <span className="project-card-customer mb-2">per {project.customer}</span>
      <p className="project-card-description">{project.description}</p>

      <div className="mt-auto">
        <Link to={`/projects/${project.id}`} className="custom-btn">
          Vedi il progetto completo
        </Link>
      </div>
    </div>
  )
}
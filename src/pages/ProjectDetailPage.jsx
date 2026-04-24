import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

export default function ProjectDetailPage() {
  const [project, setProject] = useState(null)
  const apiUrl = import.meta.env.VITE_API_URL
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/projects/${id}`)
      .then((resp) => setProject(resp.data.data))
  }, [id])

  return (
      <main className="detail-main py-5 homepage-main">
        <h1 className="detail-title text-center pb-4">Il progetto nel dettaglio</h1>
      <div className="container">
        <div className="detail-card">
          <div className="mb-3 d-flex justify-content-between align-items-center flex-wrap gap-3">
  <span className="project-type-badge">
    {project?.type?.name}
  </span>

  <p className="project-date mb-0">
    <strong>Data:</strong> {project?.time}
  </p>
</div>


          <h2 className="project-card-title">
            {project?.name}
          </h2>
            <small>{project?.customer}</small>

          <div className="detail-info pt-4">

            <p>
              <strong>Descrizione completa:</strong> {project?.description}
            </p>
          </div>

          <div className="detail-technologies mt-4">
            <h3 className="detail-subtitle">Tecnologie</h3>

            <div className="d-flex flex-wrap gap-2">
              {project?.technologies?.map((tech) => (
                <span key={tech.id} className="tech-badge" style={{ backgroundColor: tech.color }}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
      <Link className="btn-projects" to="/">
        Torna ai progetti
      </Link>
      </div>
    </main>
  )
}
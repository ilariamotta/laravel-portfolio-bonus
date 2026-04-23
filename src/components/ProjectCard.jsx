import { useState, useEffect } from "react"
import axios from "axios"

export default function ProjectCard({ project }) {


  return (
    <div className="project-card h-100">
      <div className="mb-3">
        <span className="project-type-badge">{project.type.name}</span>
      </div>
<p>Nome progetto:</p>
      <h3 className="project-card-title">{project.name}</h3>
<p>Nome cliente:</p>
      <p className="project-card-customer mb-2">{project.customer}</p>
<p>Descrizione progetto:</p>
      <p className="project-card-description">{project.description}</p>

      <div className="mt-auto">
      </div>
    </div>
  )
}
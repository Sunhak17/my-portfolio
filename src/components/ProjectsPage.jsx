import React from 'react'
import '../styles/Projects.css'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Vocabulite",
      problem: "Built a full-stack mobile shopping application with real-time inventory management and secure payment integration.",
      tech: ["Flutter", "Dart"],
      github: "https://github.com/Sunhak17/vocabulite.git",
      live: null,
      image: null
    },
    {
      id: 2,
      title: "Restaurant Order System",
      problem: "Created a productivity app for managing tasks with drag-and-drop functionality, deadlines, and team collaboration features.",
      tech: ["React", "JavaScript"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://restaurantordersystem.netlify.app/",
      image: null
    },
    {
      id: 3,
      title: "Play2Day",
      problem: "Built a tool that automatically generates portfolio websites from user data with customizable themes and templates.",
      tech: ["C#", "Unity", "Game Engine"],
      github: "https://github.com/Sunhak17/play2day.git",
      live: null,
      image: null
    },
  ]

  return (
    <div className="projects-page">
      <h1 className="section-title">My Projects</h1>
      <p style={{color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '20px'}}>
        Here are some of the projects I've worked on. Each project demonstrates different skills and technologies.
      </p>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-image-placeholder">📱</div>
              )}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-problem">{project.problem}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                  GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

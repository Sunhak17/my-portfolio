import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Projects.css';
import frontend from '../assets/project/frontend.png';
import vocabulite from '../assets/project/Vocabulite.png';
import watch2day from '../assets/project/movie.png';
import play2day from '../assets/project/play2day.png';

export default function ProjectsPage() {
  const { ref, isVisible } = useScrollAnimation()
  const projects = [
    {
      id: 1,
      title: "Vocabulite",
      problem: "Built a mobile application using flutter to help users learn new vocabulary words through interactive flashcards, quizzes, and spaced repetition techniques.",
      tech: ["Flutter", "Dart"],
      github: "https://github.com/Sunhak17/vocabulite.git",
      live: null,
      image: vocabulite
    },
    {
      id: 2,
      title: "Restaurant Order System",
      problem: "Create a frontend application for a restaurant order system that allows customers to browse the menu, add to carts and place orders.",
      tech: ["React", "JavaScript"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://restaurantordersystem.netlify.app/",
      image: frontend
    },
    {
      id: 3,
      title: "Play2Day",
      problem: "Developed 2D Game using Unity, where user can explore Cambodia Premier League football teams, players, and match highlights in an interactive and engaging way.",
      tech: ["C#", "Unity", "Game Engine"],
      github: "https://github.com/Sunhak17/play2day.git",
      live: null,
      image: play2day
    },
    {
      id: 4,
      title: "Watch2Day",
      problem: "Built a movie streaming platform with a modern UI and seamless user experience.",
      tech: ["React", "Vite","Node.js", "MySQL WorkBench", "Cloudinary"],
      github: "https://github.com/leangchheng27/Watch2Day---Movie-Streaming-Platform.git",
      live: null,
      image: watch2day
    },
  ]

  return (
    <div className={`projects-page scroll-animate ${isVisible ? 'visible' : ''}`} ref={ref}>
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

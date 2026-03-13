import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../assets/profile2.jpg'
import '../styles/Home.css'

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-left">
          <div className="hero-greeting">Hello! I'm</div>
          <h1 className="hero-name">Oeng Sunhak</h1>
          <p className="hero-title">Undergraduate Software Engineering Student</p>
          <p className="hero-description">
           I'm a third-year Creative Software Engineering student who enjoys building simple, clean interfaces and fast mobile and web apps.
          </p>
        </div>
        
        <div className="hero-right">
          <div className="profile-card">
            <img src={Profile} alt="Oeng Sunhak" />
          </div>
        </div>

        <div className="hero-cta">
          <Link to="/projects">
            <button className="btn-primary">View Projects</button>
          </Link>
          <Link to="/resume">
            <button className="btn-secondary">View Resume</button>
          </Link>
        </div>

        <div className="tech-stack">
          <h3>Main Tech Stack:</h3>
          <div className="tech-list">
            <span className="tech-item">React</span>
            <span className="tech-item">Flutter</span>
            <span className="tech-item">JavaScript</span>
            <span className="tech-item">Dart</span>
            <span className="tech-item">Java</span>
          </div>
        </div>
      </section>
    </div>
  )
}

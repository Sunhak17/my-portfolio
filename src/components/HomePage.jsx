import React from 'react'
import Profile from '../assets/pf.jpg'
import { useTypeAnimation } from '../hooks/useTypeAnimation'
import { FiArrowRight, FiDownload, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { SiTelegram } from 'react-icons/si'
import '../styles/Home.css'

export default function HomePage() {
  const { displayedText, isComplete } = useTypeAnimation('Software Engineering Student', 80, 300)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownload = () => {
    window.location.href = 'https://drive.google.com/uc?export=download&id=1PCsExBfaJrNEXQq5IBJSctpxIdrxRdcN'
  }

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-left">
          <div className="hero-greeting">Hello! I'm</div>
          <h1 className="hero-name">Oeng Sunhak</h1>
          <p className="hero-title">
            {displayedText}
            <span className={`typing-cursor ${isComplete ? 'complete' : ''}`}></span>
          </p>
          <p className="hero-description">
           I'm a third-year Creative Software Engineering student who enjoys building simple, clean interfaces and fast mobile and web apps.
          </p>
          
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
        </div>
        
        <div className="hero-right">
          <div className="profile-card">
            <img src={Profile} alt="Oeng Sunhak" />
          </div>
        </div>

        <div className="hero-cta">
          <button className="btn-primary" onClick={() => scrollToSection('projects')}>
            View Projects
          </button>
          <button className="btn-secondary" onClick={handleDownload}>
            Download CV
          </button>
        </div>

        <div className="hero-contact">
          <a href="https://www.linkedin.com/in/oeng-sunhak-3ab8b63a2/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FiLinkedin size={20} />
          </a>
          <a href="https://t.me/sunhak17" target="_blank" rel="noopener noreferrer" className="social-link">
            <SiTelegram size={20} />
          </a>
          <a href="mailto:sunhak963@gmail.com" className="social-link">
            <FiMail size={20} />
          </a>
          <a href="https://github.com/Sunhak17" target="_blank" rel="noopener noreferrer" className="social-link">
            <FiGithub size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}

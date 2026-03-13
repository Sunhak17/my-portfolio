import React from 'react'
import '../styles/Resume.css'
import CV from '../assets/CV.png'

export default function ResumePage() {
  return (
    <div className="resume-page">
      <h1 className="section-title">Resume</h1>
      
      <div className="resume-container">
        <div className="resume-intro">
          <h2>My Resume</h2>
          <p>Get a comprehensive overview of my education, skills, and experience</p>
        </div>

        <div className="resume-viewer">
          <div className="pdf-container">
            <img src={CV} alt="Resume" style={{width: '70%', height: 'auto', objectFit: 'contain'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import '../styles/Resume.css'

export default function ResumePage() {
  const handleDownload = () => {
    window.location.href = 'https://drive.google.com/uc?export=download&id=1PCsExBfaJrNEXQq5IBJSctpxIdrxRdcN'
  }

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
            <button onClick={handleDownload} className="download-btn">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

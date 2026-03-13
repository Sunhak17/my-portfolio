import React from 'react'
import '../styles/About.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="section-title">About Me</h1>
      
      <div className="about-content">
        <div className="about-intro">
          <h2>Who I Am</h2>
          <p>
            I'm a passionate Software Engineering student with a strong interest in creating 
            innovative solutions through code. My journey in software development has led me 
            to explore various technologies and frameworks, with a particular focus on mobile 
            and web development.
          </p>
          <p>
            I believe in writing clean, maintainable code and constantly learning new technologies 
            to stay at the forefront of the ever-evolving tech landscape.
          </p>
        </div>

        <div className="education-info">
          <h3>Education</h3>
          <p><strong>Bachelor of Software Engineering</strong></p>
          <p>Cambodia Academy of Digital Technology</p>
          <p>Year: 3rd Year (Expected Graduation: 2027)</p>
        </div>

        <div className="interests">
          <h3>Areas of Interest</h3>
          <div className="interest-list">
            <span className="interest-item">Mobile Development</span>
            <span className="interest-item">Web Development</span>
            <span className="interest-item">Game Development</span>
            <span className="interest-item">UI/UX Design</span>
            <span className="interest-item">Database Administration</span>
          </div>
        </div>

        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>Problem Solving</h4>
              <p>Analytical thinking and creative solutions to complex challenges</p>
            </div>
            <div className="skill-card">
              <h4>Team Collaboration</h4>
              <p>Effective communication and teamwork in agile environments</p>
            </div>
            <div className="skill-card">
              <h4>Fast Learner</h4>
              <p>Quick adaptation to new technologies and frameworks</p>
            </div>
            <div className="skill-card">
              <h4>Time Management</h4>
              <p>Efficient prioritization and meeting project deadlines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

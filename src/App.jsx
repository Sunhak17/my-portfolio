import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import SkillsPage from './components/SkillsPage'
import ResumePage from './components/ResumePage'
import ContactPage from './components/ContactPage'
import { useMouseBubbles } from './hooks/useMouseBubbles'

export default function App() {
  const bubblesRef = useMouseBubbles()

  return (
    <div className="app">
      <div className="mouse-bubbles-container" ref={bubblesRef}></div>
      <Navbar />
      <main className="main-content">
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="skills">
          <SkillsPage />
        </section>
        <section id="resume">
          <ResumePage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
      <Footer />
    </div>
  )
}

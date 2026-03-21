import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { BsSun, BsMoon } from 'react-icons/bs'
import { FiHome, FiUser, FiCode, FiFolder, FiFileText, FiMail } from 'react-icons/fi'
import '../styles/Navbar.css'


export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { id: 'home', icon: FiHome, label: 'Home' },
    { id: 'about', icon: FiUser, label: 'About' },
    { id: 'projects', icon: FiFolder, label: 'Projects' },
    { id: 'skills', icon: FiCode, label: 'Skills' },
    { id: 'resume', icon: FiFileText, label: 'Resume' },
    { id: 'contact', icon: FiMail, label: 'Contact' }
  ]

  return (
    <nav>
      <div className="nav-brand">
        <span>Oeng</span> Sunhak
      </div>
      <div className="nav-links">
        {navItems.map(item => {
          const IconComponent = item.icon
          return (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className="nav-icon-link"
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
              title={item.label}
            >
              <IconComponent size={20} />
            </a>
          )
        })}
      </div>
      <button className="theme-toggle" onClick={toggleTheme} title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
        {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
      </button>
    </nav>
  )
}

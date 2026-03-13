import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedIn.jpg'
import email from '../assets/gmail.png'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            <span>Oeng</span> Sunhak
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      
        
        <div className="footer-social">
          <a href="https://github.com/Sunhak17" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/oeng-sunhak-3ab8b63a2/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="sunhak963@gmail.com">
            <img src={email} alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  )
}

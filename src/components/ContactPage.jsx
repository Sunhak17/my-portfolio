import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Contact.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedIn.jpg'
import email from '../assets/gmail.png'
import telegram from '../assets/telegram.png'

export default function ContactPage() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className={`contact-page scroll-animate ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="contact-container">
        <div className="contact-intro">
          <h1 className="section-title">Get In Touch</h1>
        </div>

        <div className="contact-cta">
          <h3>Let's Build Something Amazing Together</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="contact-methods">
          <div className="contact-card">
            <div className="contact-icon">
              <img src={email} alt="Email" />
            </div>
            <h3>Email</h3>
            <p>
              <a href="mailto:sunhak963@gmail.com">
                sunhak963@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-card" onClick={() => window.open('https://t.me/sunhak17', '_blank')}>
            <div className="contact-icon">
              <img src={telegram} alt="Telegram" />
            </div>
            <h3>Telegram</h3>
            <p>
              <a href="https://t.me/sunhak17" target="_blank" rel="noopener noreferrer">
                @sunhak17
              </a>
            </p>
        </div>

          <div className="contact-card" onClick={() => window.open('https://github.com/Sunhak17', '_blank')}>
            <div className="contact-icon">
              <img src={github} alt="GitHub" />
            </div>
            <h3>GitHub</h3>
            <p>
              <a href="https://github.com/Sunhak17" target="_blank" rel="noopener noreferrer">
                github.com/Sunhak17
              </a>
            </p>
          </div>

          <div className="contact-card" onClick={() => window.open('https://www.linkedin.com/in/oeng-sunhak-3ab8b63a2/', '_blank')}>
            <div className="contact-icon">
              <img src={linkedin} alt="LinkedIn" />
            </div>
            <h3>LinkedIn</h3>
            <p>
              <a href="https://www.linkedin.com/in/oeng-sunhak-3ab8b63a2/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/oeng-sunhak
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

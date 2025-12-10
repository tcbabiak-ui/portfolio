import './Hero.css'
import { useState } from 'react'

// Your headshot image is in the public folder
const profileImagePath = '/Todd Headshot.png'

const Hero = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Technical Account Manager</span>
          </div>
          <h1 className="hero-title">
            Todd Babiak
          </h1>
          <p className="hero-subtitle">
            Technical Account Manager with 10+ years of experience guiding enterprise and mid-market customers 
            through cloud, security, and AI-driven technology adoption. Known for translating business requirements 
            into scalable technical solutions and driving measurable outcomes.
          </p>
          <div className="hero-buttons">
            <a href="mailto:tcbabiak@gmail.com" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#experience" className="btn btn-secondary">
              View Experience
            </a>
          </div>
          <div className="hero-contact">
            <a href="mailto:tcbabiak@gmail.com" className="contact-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              tcbabiak@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/todd-babiak-15b88b43/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-visual">
          {!imageError ? (
            <div className="profile-image-container">
              <img 
                src={profileImagePath} 
                alt="Professional Headshot" 
                className="profile-image"
                onError={() => setImageError(true)}
              />
              <div className="profile-image-border"></div>
            </div>
          ) : (
            <div className="profile-image-placeholder">
              <p>📷 Add your headshot image<br />to: <code>public/profile.jpg</code></p>
            </div>
          )}
          <div className="floating-card card-1">
            <div className="card-icon">☁️</div>
            <div className="card-text">Cloud Solutions</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🤖</div>
            <div className="card-text">AI-Driven Tech</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">📊</div>
            <div className="card-text">QBR Excellence</div>
          </div>
          <div className="hero-gradient"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Hero


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
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#experience" className="btn btn-secondary">
              View Experience
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


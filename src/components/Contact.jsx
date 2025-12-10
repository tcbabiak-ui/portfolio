import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss how I can help drive your technology initiatives forward</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>tcbabiak@gmail.com</p>
            <a href="mailto:tcbabiak@gmail.com">Send Email</a>
          </div>
          <div className="info-card">
            <div className="info-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>
          <div className="info-card">
            <div className="info-icon">🌐</div>
            <h3>Availability</h3>
            <p>Open to opportunities</p>
            <span style={{color: 'var(--text-secondary)'}}>Remote work available</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project or opportunity..."
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            {submitted ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact


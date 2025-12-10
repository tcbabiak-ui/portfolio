import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Driving technology solutions that deliver measurable business value</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="about-paragraph">
            Technical Account Manager with 10+ years of experience guiding enterprise and mid-market customers through 
            cloud, security, and AI-driven technology adoption. Known for translating business requirements into scalable 
            technical solutions, driving successful implementations, and strengthening long-term customer relationships.
          </p>
          <p className="about-paragraph">
            Adept at leading architecture discussions, delivering strategic recommendations, and aligning cross-functional 
            engineering resources to ensure measurable outcomes. I excel at conducting comprehensive Quarterly Business 
            Reviews (QBRs), scoping cloud transformation projects, and identifying expansion opportunities that drive both 
            customer success and business growth.
          </p>
          <div className="education-note">
            <strong>Education:</strong> Recording Arts Associate Degree, Full Sail University (Class of 2010)
          </div>
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🎯</div>
              <div className="highlight-content">
                <h3>Strategic Alignment</h3>
                <p>Aligning AI-driven and cloud solutions with core business needs</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📈</div>
              <div className="highlight-content">
                <h3>Proven Results</h3>
                <p>10+ years of delivering measurable business outcomes</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🤝</div>
              <div className="highlight-content">
                <h3>Customer Success</h3>
                <p>Regular QBRs and continuous relationship management</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🚀</div>
              <div className="highlight-content">
                <h3>Innovation</h3>
                <p>Positioning new technology to drive competitive advantage</p>
              </div>
            </div>
          </div>
        </div>
          <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">$800K+</div>
            <div className="stat-label">Project Revenue</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">70+</div>
            <div className="stat-label">Accounts Managed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8</div>
            <div className="stat-label">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Building technology solutions that work</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="about-paragraph">
            I've been a Technical Account Manager for over 10 years, working with enterprise and mid-market customers 
            on cloud, security, and AI projects. I help translate what businesses need into technical solutions that actually work.
          </p>
          <p className="about-paragraph">
            I run architecture discussions, make strategic recommendations, and coordinate with engineering teams to get 
            things done. Most of my time is spent on QBRs, scoping cloud projects, and finding opportunities to expand 
            accounts while keeping customers happy.
          </p>
          <div className="education-note">
            <strong>Education:</strong> Recording Arts Associate Degree, Full Sail University (Class of 2010)
          </div>
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div className="highlight-content">
                <h3>Strategic Alignment</h3>
                <p>Aligning AI-driven and cloud solutions with core business needs</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 6 13.5 14.5 8.5 9.5 2 16"></polyline>
                  <polyline points="16 6 22 6 22 12"></polyline>
                </svg>
              </div>
              <div className="highlight-content">
                <h3>Proven Results</h3>
                <p>10+ years of delivering measurable business outcomes</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="highlight-content">
                <h3>Customer Success</h3>
                <p>Regular QBRs and continuous relationship management</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
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


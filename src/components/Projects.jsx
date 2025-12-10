import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Has My Password Been Hacked",
      description: "A security-focused web application that allows users to check if their passwords have been compromised in known data breaches. Built using AI-assisted development with Cursor, this tool helps users identify vulnerable credentials and take proactive security measures.",
      features: [
        "Real-time password breach checking",
        "Secure password validation",
        "User-friendly interface for security awareness",
        "Built with modern web technologies"
      ],
      tech: "AI-Assisted Development (Cursor), Web Security, API Integration",
      image: "/Has My Password Been Hacked.png",
      category: "Security Tool"
    },
    {
      title: "How Long Until I Get Hacked",
      description: "An innovative security assessment tool that analyzes your public IP address to detect VPN status and calculates the estimated time until a potential security compromise. This application demonstrates practical cybersecurity awareness and helps users understand their online vulnerability exposure.",
      features: [
        "Public IP address analysis",
        "VPN detection and status reporting",
        "Vulnerability timeline estimation",
        "Security risk assessment"
      ],
      tech: "AI-Assisted Development (Cursor), IP Analysis, Security Metrics",
      image: "/How Long Until I Get Hacked.png",
      category: "Security Assessment"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">AI-Built Web Applications</h2>
        <p className="section-subtitle">
          Demonstrating technical innovation through AI-assisted development. These security-focused web applications 
          were built using Cursor, showcasing my ability to leverage cutting-edge AI tools to create practical, 
          user-focused solutions.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
              <div className="project-category">{project.category}</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="project-tech">
                <strong>Technologies:</strong> {project.tech}
              </div>
              <div className="project-ai-badge">
                <span className="ai-icon">🤖</span>
                <span>Built with AI-Assisted Development (Cursor)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-footer">
        <p>
          These projects demonstrate my ability to rapidly prototype and deploy functional web applications 
          using AI-assisted development tools, combining technical expertise with modern development practices 
          to create solutions that address real-world security concerns.
        </p>
      </div>
    </section>
  )
}

export default Projects


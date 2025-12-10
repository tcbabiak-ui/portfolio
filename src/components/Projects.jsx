import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Has My Password Been Hacked",
      description: "A web app that checks if passwords have been exposed in data breaches. Built with Cursor to help users identify compromised credentials.",
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
      description: "Analyzes your public IP to check VPN status and estimates how long until a potential security issue. Built to help people understand their online exposure.",
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
          Security tools built with Cursor. These projects show how I use modern development tools to solve real problems.
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
                <span>Built with Cursor</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-footer">
        <p>
          Built these to learn Cursor and solve security problems I was curious about. They're functional apps that 
          address real concerns people have about their online security.
        </p>
      </div>
    </section>
  )
}

export default Projects


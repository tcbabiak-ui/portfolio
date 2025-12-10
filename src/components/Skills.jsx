import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "Microsoft Azure", level: 95 },
        { name: "Microsoft 365", level: 95 },
        { name: "Entra ID / Azure AD", level: 92 },
        { name: "Windows Server", level: 90 },
        { name: "Intune / MDM", level: 88 }
      ]
    },
    {
      category: "Account Management",
      skills: [
        { name: "QBR Execution", level: 98 },
        { name: "Customer Lifecycle Management", level: 96 },
        { name: "Executive Engagement", level: 95 },
        { name: "Solution Architecture", level: 94 },
        { name: "Strategic Roadmapping", level: 93 }
      ]
    },
    {
      category: "Security & Operations",
      skills: [
        { name: "Endpoint Security & Compliance", level: 92 },
        { name: "SIEM (Azure Sentinel)", level: 90 },
        { name: "Access Management", level: 92 },
        { name: "ITSM & Incident Management", level: 90 },
        { name: "Runbook Development", level: 88 }
      ]
    },
    {
      category: "Technical Skills",
      skills: [
        { name: "Cloud Migration Planning", level: 94 },
        { name: "Technical Workshops", level: 92 },
        { name: "Cross-Functional Collaboration", level: 95 },
        { name: "Service Delivery Optimization", level: 90 }
      ]
    }
  ]

  const certifications = [
    "Microsoft Azure Administrator Associate (AZ-104)",
    "Microsoft Azure Network Engineer Associate (AZ-700)",
    "Microsoft 365 Fundamentals (MS-900)",
    "CompTIA Security+",
    "(ISC)² Certified in Cybersecurity (CC)",
    "Cisco CCNA",
    "CompTIA A+"
  ]

  const technologies = [
    "Azure Portal", "Microsoft Admin Center", "Microsoft Defender", 
    "Azure Sentinel", "Conditional Access", "TCP/IP", "DNS", "DHCP",
    "Switching/Routing", "Modern Workplace Stack", "ITSM Tools"
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technical proficiency and business acumen for driving customer success</p>
      </div>
      <div className="skills-content">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="certifications-section">
        <h3 className="technologies-title">Certifications</h3>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-badge">
              <span className="cert-icon">✓</span>
              {cert}
            </div>
          ))}
        </div>
      </div>
      <div className="technologies-section">
        <h3 className="technologies-title">Technologies & Platforms</h3>
        <div className="technologies-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-badge">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


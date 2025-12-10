import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      period: "January 2024 – Present",
      title: "Technical Account Manager",
      company: "Endsight – Napa, CA",
      description: "Manage a large, diverse customer portfolio while serving as the primary technical advisor across cloud, security, and modern workplace initiatives. Partner with executives and technical teams to drive roadmap alignment, service adoption, and business value.",
      achievements: [
        "Own a 50-account portfolio (average 30 users each), guiding clients through cloud transformation, modernization, and security posture improvement",
        "Support accounts with high-end MRR up to $10K, ensuring retention, satisfaction, and alignment to strategic outcomes",
        "Influenced $800K+ in project revenue through accurate discovery, solution architecture, and proactive identification of expansion opportunities",
        "Lead technical discovery sessions, architecture reviews, and roadmap planning to align Microsoft Azure, M365, Security, and AI solutions with customer needs",
        "Develop detailed SOWs, BOMs, and ROI analyses supporting technical recommendations and long-term account growth"
      ]
    },
    {
      period: "July 2022 – January 2024",
      title: "Technical Account Manager",
      company: "Managed Solution – San Diego, CA",
      description: "Served as the primary technical advocate for mid-market and enterprise customers, facilitating cloud adoption, product enablement, and expansion opportunities.",
      achievements: [
        "Managed a 20-account enterprise portfolio, averaging 100 users per customer, owning the full customer lifecycle from onboarding through renewal",
        "Delivered technical workshops, demos, and proof-of-concepts that accelerated solution adoption across Azure, M365, and modern workplace technologies",
        "Collaborated closely with sales and solutions engineering teams to support pre-sales strategy, identify upsell opportunities, and ensure technical feasibility of proposals",
        "Guided customers through SaaS migrations and professional services engagements, ensuring successful integration into complex environments"
      ]
    },
    {
      period: "June 2019 – July 2022",
      title: "Service Transition Project Manager",
      company: "Netrix LLC – Los Angeles, CA",
      description: "Led security onboarding and transition programs for new enterprise clients entering managed service operations.",
      achievements: [
        "Directed deployment and customer onboarding for security solutions such as Azure Sentinel, including runbook development and operational readiness planning",
        "Designed and optimized onboarding workflows and approval processes, increasing service transition efficiency and reducing time-to-value",
        "Managed cross-functional technical teams to execute migrations and infrastructure projects supporting enterprise modernization strategies"
      ]
    },
    {
      period: "July 2015 – June 2019",
      title: "Junior Network Administrator",
      company: "Sugar Shot – Los Angeles, CA",
      description: "Advanced through multiple roles (L1 → Senior Engineer → Jr. Network Administrator) while serving as an escalation point for Microsoft cloud and infrastructure environments.",
      achievements: [
        "Delivered L1/L2 technical troubleshooting across the Microsoft Cloud Stack, consistently meeting SLAs and improving customer satisfaction",
        "Conducted detailed root cause analysis (RCA) to drive long-term corrective actions and ITSM process improvements",
        "Supported remote and hybrid workforce environments with best practices for security, compliance, and endpoint management"
      ]
    },
    {
      period: "January 2013 – July 2015",
      title: "NOC Operator",
      company: "iHeart Media – Sherman Oaks, CA",
      description: "Managed real-time incident resolution within a 24/7 network operations center, maintaining broadcast uptime across critical infrastructure.",
      achievements: [
        "Performed system diagnostics, monitored network health, and executed escalation protocols to reduce service interruptions"
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">A decade of driving technology adoption and customer success</p>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="experience-period">{exp.period}</div>
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-company">{exp.company}</div>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience


import React, { useState } from 'react';

// Inline simple SVG icons
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const portfolioData = {
    name: "KALAIVANI KUMAR",
    title: "GDS | BPM | Kallipattu",
    profileImage: "/Kalai.jpeg",
    phone: "+91 90800 84327",
    email: "kalaivanikumar21@gmail.com",
    links: {
      portfolio: "https://www.instagram.com/msd07thalapathy22?stkn=b3o3ODB5ZW1vZzht",
      linkedin: "https://www.linkedin.com/in/vimalbharath-kumar-007311201",
      github: "https://github.com/Vimalbharath",
      leetcode: "https://leetcode.com/Vi21rath"
    },
   skills: [
  { category: "Postal & Branch Operations", items: "Branch Post Office Management, Mail Conveyance & Delivery Coordination, Cash & Accounts Handling, Record Maintenance, Regulatory Compliance (Dept. of Posts)" },
  { category: "Banking Services", items: "India Post Payments Bank (IPPB) Transactions, Post Office Savings Account (POSA) Operations, AEPS, DBT & Aadhaar-linked Disbursements, Small Savings Schemes (RD, PPF, SSY)" },
  { category: "Digital Tools", items: "Handheld Device / Smartphone Transaction Processing, MS Office, Online Transaction Systems, Basic Data Entry" },
  { category: "Customer & Community Engagement", items: "Rural Customer Service, Grievance Handling, Product Marketing & Business Procurement, Local Outreach Camps" },
  { category: "Core Strengths", items: "Team Supervision, Financial Accountability, Local Language Communication, Multitasking in Single-Handed Office" }
],
experience: [
  {
    company: "Indian Postal Department (India Post)",
    location: "Kallipattu, Tamil Nadu",
    role: "GDS - BPM",
    period: "May 2023 -- Present",
    highlights: [
      "Manage end-to-end daily operations of the Branch Post Office, including mail conveyance, delivery coordination, and counter services for the local community.",
      "Process IPPB banking transactions -- deposits, withdrawals, and account opening -- along with Post Office Savings Bank operations in compliance with Department of Posts guidelines.",
      "Maintain accurate financial records, daily cash accounts, and transaction logs, ensuring error-free reconciliation.",
      "Drive marketing and business procurement for postal and IPPB products, contributing to branch revenue and service targets.",
      "Coordinate with Assistant Branch Postmaster(s) to ensure smooth branch functioning, handling combined BPM/ABPM duties when required.",
      "Serve as the primary point of contact for the village community on postal, banking, and government scheme (DBT/Aadhaar-linked) services."
    ]
  }
],
projects: [
  {
    title: "Digital Banking & Financial Inclusion Drive",
    tech: "IPPB, AEPS, Aadhaar-linked DBT",
    details: [
      "Led local onboarding of new IPPB account holders, expanding formal banking access in the branch's service area.",
      "Organized outreach camps to enroll villagers in small savings schemes and government welfare payment programs.",
      "Facilitated adoption of Aadhaar-enabled payment systems (AEPS) for pension and DBT disbursements.",
      "Maintained zero-discrepancy daily cash and transaction records throughout the initiative."
    ]
  }
]
    ,
    education: {
      institution: "Anna University (BIT Campus)",
      location: "Tiruchirappalli, Tamil Nadu",
      degree: "Bachelor of Engineering in Electronics and Communication",
      period: "Jul 2019 -- May 2023"
    },
    achievements: [
      "Sports Excellence: Secured 1st place in Department Level Khokho Tournament (2019-20) and 2nd place in Department Level Khokho Tournament (2021-22).",
      "Academic Excellence: Secured School Second position in SSLC (495/500)."
    ]
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">Kalaivani.Kumar</div>
        <button 
          className="menu-toggle" 
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation menu"
        >
          <MenuIcon />
        </button>
        <ul className="nav-links">
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#achievements" className="nav-link">Achievements</a></li>
        </ul>
      </nav>

      {/* Modal Navigation Menu for Mobile */}
      {navOpen && (
        <div className="nav-modal-overlay" onClick={() => setNavOpen(false)}>
          <div className="nav-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="nav-modal-header">
              <span className="nav-logo">Navigation</span>
              <button className="menu-close-btn" onClick={() => setNavOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <ul className="nav-modal-links">
              <li><a href="#skills" className="nav-modal-link" onClick={() => setNavOpen(false)}>Skills</a></li>
              <li><a href="#experience" className="nav-modal-link" onClick={() => setNavOpen(false)}>Experience</a></li>
              <li><a href="#projects" className="nav-modal-link" onClick={() => setNavOpen(false)}>Projects</a></li>
              <li><a href="#education" className="nav-modal-link" onClick={() => setNavOpen(false)}>Education</a></li>
              <li><a href="#achievements" className="nav-modal-link" onClick={() => setNavOpen(false)}>Achievements</a></li>
            </ul>
          </div>
        </div>
      )}

      {/* Hero Header */}
      <header className="hero-section">
        <div className="profile-img-container">
          <img 
            src={portfolioData.profileImage} 
            alt={portfolioData.name} 
            className="profile-img"
          />
        </div>

        <h1 className="hero-title">{portfolioData.name}</h1>
        <p className="hero-subtitle">{portfolioData.title}</p>
        
        <div className="hero-contact">
          <div className="contact-item"><PhoneIcon /> {portfolioData.phone}</div>
          <div className="contact-item">
            <MailIcon /> <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
          </div>
        </div>

        <div className="links-row">
    
          <a href={portfolioData.links.portfolio} target="_blank" rel="noreferrer" className="glare-btn">
            Instagram <ExternalLinkIcon />
          </a>
        </div>
      </header>

      {/* Technical Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="card-content">
          {portfolioData.skills.map((skill, idx) => (
            <div key={idx} className="skill-category">
              <span className="skill-name">{skill.category}: </span>
              <span>{skill.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="card-content">
            <div className="card-header">
              <div>
                <div className="card-title">{exp.company}</div>
                <div className="card-subtitle">{exp.role}</div>
              </div>
              <div className="card-meta-right">
                <div className="card-meta">{exp.location}</div>
                <div className="card-meta">{exp.period}</div>
              </div>
            </div>
            <ul className="card-list">
              {exp.highlights.map((item, iIndex) => (
                <li key={iIndex} className="card-list-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects with Glaring Running CSS */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects &amp; Works</h2>
        {portfolioData.projects.map((proj, idx) => (
          <div key={idx} className="glowing-card">
            <div className="card-content" style={{ marginBottom: 0 }}>
              <div className="card-header">
                <div>
                  <div className="card-title">{proj.title}</div>
                  <div className="card-subtitle">{proj.tech}</div>
                </div>
                <div className="action-buttons">
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="glare-btn">
                      View Live <ExternalLinkIcon />
                    </a>
                  )}
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="glare-btn">
                      Code <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
              <ul className="card-list">
                {proj.details.map((item, dIndex) => (
                  <li key={dIndex} className="card-list-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="card-content">
          <div className="card-header">
            <div>
              <div className="card-title">{portfolioData.education.institution}</div>
              <div className="card-subtitle">{portfolioData.education.degree}</div>
            </div>
            <div className="card-meta-right">
              <div className="card-meta">{portfolioData.education.location}</div>
              <div className="card-meta">{portfolioData.education.period}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section id="achievements" className="section">
        <h2 className="section-title">Achievements &amp; Awards</h2>
        <div className="card-content">
          <ul className="card-list">
            {portfolioData.achievements.map((ach, idx) => (
              <li key={idx} className="card-list-item">{ach}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Kalaivani Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

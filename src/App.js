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
    name: "VIMALBHARATH KUMAR",
    title: "Software Development Engineer | Java, Spring Boot & React",
    profileImage: "/Vimal.jpeg",
    phone: "+91 80727 32691",
    email: "vimalbharath21@gmail.com",
    links: {
      portfolio: "https://vimalbharath.netlify.app/",
      linkedin: "https://www.linkedin.com/in/vimalbharath-kumar-007311201",
      github: "https://github.com/Vimalbharath",
      leetcode: "https://leetcode.com/Vi21rath"
    },
    skills: [
      { category: "Languages", items: "Java (Core Java, OOPs, Collections, Multithreading), JavaScript (ES6+), SQL, Python" },
      { category: "Backend Development", items: "Spring Boot, RESTful APIs, Microservices Architecture, Spring Data JPA, Hibernate, JWT Auth" },
      { category: "Frontend Development", items: "React.js, Redux Toolkit, Axios, HTML5, CSS3, Bootstrap" },
      { category: "Cloud & DevOps", items: "Docker, Red Hat OpenShift (ROSA), Kubernetes, GitLab CI/CD, WebSphere (WAS), Splunk" },
      { category: "Databases & Tools", items: "MySQL, PostgreSQL, Git, GitHub Copilot, Postman, JUnit, Mockito" }
    ],
    experience: [
      {
        company: "HTC Global Services",
        location: "Chennai, Tamil Nadu",
        role: "Software Development Engineer (SDE) - Full Stack",
        period: "Feb 2022 -- Present",
        highlights: [
          "Accelerated legacy monolith modernization by engineering Spring Boot microservices to replace legacy WebSphere (WAS) workflows, deploying containerized services on Red Hat OpenShift (ROSA) to enhance system scalability.",
          "Architected automated GitLab CI/CD pipelines for continuous build verification and deployment across 7 non-production environments, reducing manual environment deployment overhead by 70%.",
          "Engineered automated end-to-end integration and API validation suites across staging microservices, decreasing pre-production incident reports by 90%.",
          "Managed MySQL/PostgreSQL schema migrations and optimized complex SQL queries using indexed joins and execution plan analysis, maintaining 100% data consistency during system upgrades.",
          "Utilized Splunk log aggregation to diagnose microservice bottlenecks, conduct Root Cause Analysis (RCA) on distributed API calls, and maintain high system availability."
        ]
      }
    ],
    projects: [
      {
        title: "Full-Stack Expense Tracker Platform",
        tech: "Spring Boot, React, MySQL, GitHub Copilot, REST API",
        live: "https://tracker-frontend-8mvf.onrender.com/",
        github: "https://github.com/Vimalbharath/project3",
        details: [
          "Architected a full-stack financial tracking application leveraging GitHub Copilot to accelerate backend service layer development and frontend component scaffolding.",
          "Engineered a robust Spring Boot backend with Spring Data JPA and MySQL to persist transactional data, categorization models, and monthly budget limits.",
          "Built an interactive dashboard in React.js featuring a dynamic monthly calendar view to visualize daily expenditure trends, category breakdowns, and financial analytics.",
          "Optimized RESTful API endpoint execution times and handled client-side asynchronous data flows using Axios and deployed on Render platform."
        ]
      },
      {
        title: "Full-Stack Tournament Scoring Application",
        tech: "Spring Boot, React, MySQL, JWT, Redux",
        details: [
          "Engineered a scalable RESTful backend using Spring Boot and Spring Data JPA following 3-tier Layered Architecture (Controller-Service-Repository).",
          "Secured backend endpoints with Spring Security and stateless JWT authentication, implementing Role-Based Access Control (RBAC) to manage user permissions.",
          "Developed an interactive dashboard in React utilizing Redux Toolkit for global state management and Axios interceptors for real-time score rendering.",
          "Designed optimized MySQL database schemas with indexed primary/foreign keys to accelerate leaderboard query execution."
        ]
      },
      {
        title: "Performance Rating Platform",
        tech: "React, Bootstrap, Axios, REST API",
        live: "https://reactclass-tnjt.onrender.com",
        github: "https://github.com/Vimalbharath/ReactClass/tree/rating/Testing/my-react-app/src/project",
        details: [
          "Built a responsive corporate appraisal portal in React.js enabling managers to evaluate employee performance metrics seamlessly.",
          "Configured client-side routing via React-Router and managed persistent user session states using Local Storage."
        ]
      },
      {
        title: "Personal Portfolio Website",
        tech: "React, JavaScript, GitLab CI/CD",
        live: "https://vimalbharath.netlify.app/",
        github: "https://gitlab.com/vimalbharath21/portfolio",
        details: [
          "Designed and deployed a responsive Single Page Application (SPA) showcasing full-stack projects and technical architecture.",
          "Automated continuous deployment (CD) workflows using GitLab CI/CD pipelines for live hosting on Netlify."
        ]
      }
    ],
    education: {
      institution: "Anna University (BIT Campus)",
      location: "Tiruchirappalli, Tamil Nadu",
      degree: "Bachelor of Engineering in Electronics and Communication",
      period: "Jul 2016 -- Nov 2020"
    },
    achievements: [
      "Shooting Star & Client Delight Awards: Recognized by HTC Global Services for rapid technology onboarding and outstanding technical delivery.",
      "Academic Excellence: Secured School First position in secondary school board examinations (1133/1200)."
    ]
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">Vimalbharath.dev</div>
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
          <a href={portfolioData.links.linkedin} target="_blank" rel="noreferrer" className="glare-btn">
            LinkedIn <ExternalLinkIcon />
          </a>
          <a href={portfolioData.links.github} target="_blank" rel="noreferrer" className="glare-btn">
            GitHub <ExternalLinkIcon />
          </a>
          <a href={portfolioData.links.leetcode} target="_blank" rel="noreferrer" className="glare-btn">
            LeetCode <ExternalLinkIcon />
          </a>
          <a href={portfolioData.links.portfolio} target="_blank" rel="noreferrer" className="glare-btn">
            Live Portfolio <ExternalLinkIcon />
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
        <p>© {new Date().getFullYear()} Vimalbharath Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

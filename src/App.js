import React, { useState } from 'react';

// Inline simple SVG icons to eliminate extra external dependencies
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

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const portfolioData = {
    name: "VIMALBHARATH KUMAR",
    title: "Software Development Engineer | Java, Spring Boot & React",
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

  const styles = {
    container: {
      maxWidth: '1024px',
      margin: '0 auto',
      padding: '0 20px'
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
      borderBottom: '1px solid #334155',
      position: 'relative'
    },
    logo: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#38bdf8'
    },
    menuToggle: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: '#f8fafc',
      cursor: 'pointer'
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      listStyle: 'none'
    },
    navLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.95rem'
    },
    heroSection: {
      padding: '60px 0 40px',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '10px',
      color: '#f8fafc'
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      color: '#38bdf8',
      marginBottom: '20px'
    },
    heroContact: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      marginBottom: '25px',
      color: '#94a3b8'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    linksRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      flexWrap: 'wrap'
    },
    btn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 16px',
      borderRadius: '6px',
      fontSize: '0.9rem',
      fontWeight: '600',
      textDecoration: 'none',
      backgroundColor: '#1e293b',
      color: '#38bdf8',
      border: '1px solid #334155'
    },
    section: {
      padding: '40px 0',
      borderBottom: '1px solid #334155'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#f8fafc',
      marginBottom: '20px',
      borderLeft: '4px solid #38bdf8',
      paddingLeft: '10px'
    },
    card: {
      backgroundColor: '#1e293b',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px',
      border: '1px solid #334155'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: '10px'
    },
    cardTitle: {
      fontSize: '1.15rem',
      fontWeight: '600',
      color: '#f8fafc'
    },
    cardSubtitle: {
      color: '#38bdf8',
      fontSize: '0.95rem'
    },
    cardMeta: {
      color: '#94a3b8',
      fontSize: '0.9rem'
    },
    list: {
      paddingLeft: '20px',
      color: '#cbd5e1',
      fontSize: '0.95rem',
      lineHeight: '1.6'
    },
    listItem: {
      marginBottom: '8px'
    },
    skillCategory: {
      marginBottom: '12px',
      lineHeight: '1.5'
    },
    skillName: {
      color: '#38bdf8',
      fontWeight: '600'
    },
    footer: {
      textAlign: 'center',
      padding: '30px 0',
      color: '#64748b',
      fontSize: '0.85rem'
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.logo}>Vimalbharath.dev</div>
        <button 
          style={styles.menuToggle} 
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation menu"
        >
          <MenuIcon />
        </button>
        <ul style={{
          ...styles.navLinks,
          display: navOpen ? 'flex' : undefined
        }}>
          <li><a href="#skills" style={styles.navLink} onClick={() => setNavOpen(false)}>Skills</a></li>
          <li><a href="#experience" style={styles.navLink} onClick={() => setNavOpen(false)}>Experience</a></li>
          <li><a href="#projects" style={styles.navLink} onClick={() => setNavOpen(false)}>Projects</a></li>
          <li><a href="#education" style={styles.navLink} onClick={() => setNavOpen(false)}>Education</a></li>
          <li><a href="#achievements" style={styles.navLink} onClick={() => setNavOpen(false)}>Achievements</a></li>
        </ul>
      </nav>

      {/* Hero Header */}
      <header style={styles.heroSection}>
        <h1 style={styles.heroTitle}>{portfolioData.name}</h1>
        <p style={styles.heroSubtitle}>{portfolioData.title}</p>
        
        <div style={styles.heroContact}>
          <div style={styles.contactItem}><PhoneIcon /> {portfolioData.phone}</div>
          <div style={styles.contactItem}>
            <MailIcon /> <a href={`mailto:${portfolioData.email}`} style={{ color: 'inherit' }}>{portfolioData.email}</a>
          </div>
        </div>

        <div style={styles.linksRow}>
          <a href={portfolioData.links.linkedin} target="_blank" rel="noreferrer" style={styles.btn}>
            LinkedIn <ExternalLinkIcon />
          </a>
          <a href={portfolioData.links.github} target="_blank" rel="noreferrer" style={styles.btn}>
            GitHub <ExternalLinkIcon />
          </a>
          <a href={portfolioData.links.leetcode} target="_blank" rel="noreferrer" style={styles.btn}>
            LeetCode <ExternalLinkIcon />
          </a>
          <a href={portfolioData.links.portfolio} target="_blank" rel="noreferrer" style={styles.btn}>
            Live Portfolio <ExternalLinkIcon />
          </a>
        </div>
      </header>

      {/* Technical Skills */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <div style={styles.card}>
          {portfolioData.skills.map((skill, idx) => (
            <div key={idx} style={styles.skillCategory}>
              <span style={styles.skillName}>{skill.category}: </span>
              <span style={{ color: '#cbd5e1' }}>{skill.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <div style={styles.cardTitle}>{exp.company}</div>
                <div style={styles.cardSubtitle}>{exp.role}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={styles.cardMeta}>{exp.location}</div>
                <div style={styles.cardMeta}>{exp.period}</div>
              </div>
            </div>
            <ul style={styles.list}>
              {exp.highlights.map((item, iIndex) => (
                <li key={iIndex} style={styles.listItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        {portfolioData.projects.map((proj, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <div style={styles.cardTitle}>{proj.title}</div>
                <div style={styles.cardSubtitle}>{proj.tech}</div>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noreferrer" style={styles.btn}>
                    View Live <ExternalLinkIcon />
                  </a>
                )}
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" style={styles.btn}>
                    Code <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>
            <ul style={styles.list}>
              {proj.details.map((item, dIndex) => (
                <li key={dIndex} style={styles.listItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section id="education" style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <div>
              <div style={styles.cardTitle}>{portfolioData.education.institution}</div>
              <div style={styles.cardSubtitle}>{portfolioData.education.degree}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={styles.cardMeta}>{portfolioData.education.location}</div>
              <div style={styles.cardMeta}>{portfolioData.education.period}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section id="achievements" style={styles.section}>
        <h2 style={styles.sectionTitle}>Achievements &amp; Awards</h2>
        <div style={styles.card}>
          <ul style={styles.list}>
            {portfolioData.achievements.map((ach, idx) => (
              <li key={idx} style={styles.listItem}>{ach}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Vimalbharath Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

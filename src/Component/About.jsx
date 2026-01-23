// About.jsx
import React from 'react';
import './About.css';
import TeamSection from './TeamSection';
import MissionVision from './MissionVision';
import OfficeSection from './OfficeSection';
import KeepInTouch from './KeepInTouch';

const About = () => {
  // Your personal info
  const developer = {
    name: "Paul Adim",
    title: "Full Stack Developer & Digital Creator",
    bio: "I'm a passionate full-stack developer with experience of building responsive, accessible, and performant web applications. I believe that great code should be as beautiful as the user interfaces it powers—and that every project is an opportunity to solve real problems with creativity and precision.",
    philosophy: "I craft digital experiences that balance aesthetics, functionality, and performance. My approach is user-first: I focus on clean architecture, thoughtful interactions, and scalable solutions that grow with your business.",
    location: "Lagos, Nigeria",
    email: "builtbypauladim@gmail.com"
  };

  // Tech stack categorized
  const techStack = {
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'JavaScript', icon: 'JS' }, // Text-based, clean and recognizable
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'HTML / CSS', icon: '🌐' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '⚡' },
      { name: 'RESTful APIs', icon: '🔌' }
    ],
    databases: [
      { name: 'MongoDB', icon: '🍃' },
    ],
    devops: [
      { name: 'Git / GitHub', icon: '🐙' },
      { name: 'Render', icon: '🐳' },
      { name: 'Vercel', icon: '▲' },
    ]
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">About Me</h1>
            <p className="about-hero__subtitle">
              Full Stack Developer • Problem Solver • Digital Craftsman
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-main">
        <div className="about-container">
          <div className="about-layout">
            {/* Developer Image */}
            <div className="about-image">
              <img
                src="/public/paulo.jpeg" // ✅ Replace with your actual image path
                alt={`${developer.name} - Full Stack Developer`}
                className="about-image__photo"
                loading="lazy"
              />
            </div>

            {/* Bio & Details */}
            <div className="about-text">
              <h2 className="about-text__name">{developer.name}</h2>
              <div className="about-text__title">{developer.title}</div>
              <div className="about-text__location">📍 {developer.location}</div>

              <p className="about-text__paragraph">
                {developer.bio}
              </p>

              <p className="about-text__paragraph">
                {developer.philosophy}
              </p>

              <div className="about-contact">
                <a
                  href={`mailto:${developer.email}`}
                  className="about-contact__email"
                >
                  {developer.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-section">
        <div className="about-container">
          <h2 className="tech-section__title">Tools & Technologies</h2>
          <p className="tech-section__subtitle">
            I build with modern, reliable tools that help me ship fast and scale smart.
          </p>

          <div className="tech-grid">
            {/* Frontend */}
            <div className="tech-category">
              <h3 className="tech-category__title">Frontend</h3>
              <div className="tech-category__items">
                {techStack.frontend.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-item__icon">{tech.icon}</span>
                    <span className="tech-item__name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="tech-category">
              <h3 className="tech-category__title">Backend</h3>
              <div className="tech-category__items">
                {techStack.backend.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-item__icon">{tech.icon}</span>
                    <span className="tech-item__name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="tech-category">
              <h3 className="tech-category__title">Databases</h3>
              <div className="tech-category__items">
                {techStack.databases.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-item__icon">{tech.icon}</span>
                    <span className="tech-item__name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="tech-category">
              <h3 className="tech-category__title">DevOps & Tools</h3>
              <div className="tech-category__items">
                {techStack.devops.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-item__icon">{tech.icon}</span>
                    <span className="tech-item__name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MissionVision />
      <TeamSection />
      {/* <OfficeSection /> */}
      <KeepInTouch />
    </div>
  );
};

export default About;
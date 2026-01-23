// MissionVision.jsx
import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  const mission = {
    title: "The Mission",
    description: "To empower businesses with world-class digital solutions that simplify operations, enhance customer experience, and unlock new opportunities for growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
        <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path>
        <path d="M12 12L9 15M12 12l3 3M12 12l-3-3M12 12l3-3"></path>
      </svg>
    )
  };

  const vision = {
    title: "The Vision",
    description: "To become the most trusted digital partner for businesses that want to innovate, scale, and dominate their industry.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="12" y1="16" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="8" y2="12"></line>
        <line x1="16" y1="12" x2="16" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="8"></line>
        <path d="M17 17l-5-5M7 7l5 5"></path>
      </svg>
    )
  };

  return (
    <section className="mission-vision-section">
      <div className="container">
        <div className="mission-vision-grid">
          {/* Mission Card */}
          <div className="card">
            <div className="card-icon">{mission.icon}</div>
            <h2 className="card-title">{mission.title}</h2>
            <p className="card-description">{mission.description}</p>
          </div>

          {/* Vision Card */}
          <div className="card">
            <div className="card-icon">{vision.icon}</div>
            <h2 className="card-title">{vision.title}</h2>
            <p className="card-description">{vision.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
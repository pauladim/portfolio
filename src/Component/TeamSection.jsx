import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Chukwujindu Paul Adim",
      role: "Lead Developer",
      image: "/paulo.jpeg", // ✅ CORRECT PATH — served from public/
      bio: "Full-stack developer with expertise in React, Node.js, and modern UI/UX design."
    },
    {
      name: "Offiong Godswill",
      role: "Full-stack developer & Graphic Designer",
      image: "/godswil.jpeg", // ✅ CORRECT PATH — served from public/
      bio: "Creative problem-solver who turns ideas into pixel-perfect, accessible interfaces."
    }
  ];

  return (
    <section className="team-section">
      {/* === HEADING === */}
      <div className="team-header">
        <h2 className="team-title">MEET THE TEAM</h2>
      </div>

      {/* === TEAM CARDS === */}
      <div className="container">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card__image-wrapper">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="team-card__image"
                  loading="lazy"
                />
              </div>
              <div className="team-card__content">
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
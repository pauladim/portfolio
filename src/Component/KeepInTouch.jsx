// KeepInTouch.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KeepInTouch.css';

const KeepInTouch = () => {
  const navigate = useNavigate();
  
  return (
    <section className="keep-in-touch-section">
      <div className="container">
        {/* Left Character */}
        <div className="character character-left">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="200" viewBox="0 0 160 200">
            <rect x="40" y="80" width="40" height="80" rx="8" fill="#3b82f6" />
            <circle cx="60" cy="70" r="20" fill="#1e40af" />
            <circle cx="55" cy="65" r="5" fill="#ffffff" />
            <circle cx="65" cy="65" r="5" fill="#ffffff" />
            <path d="M55 85 Q60 90 65 85" stroke="#1e40af" strokeWidth="2" fill="none" />
            
            {/* Speech Bubble */}
            <rect x="80" y="40" width="60" height="40" rx="8" fill="#d9f73c" />
            <polygon points="80,80 70,90 80,100" fill="#d9f73c" />
            <circle cx="90" cy="55" r="8" fill="#ffffff" />
            <circle cx="105" cy="55" r="5" fill="#ffffff" />
            <circle cx="95" cy="70" r="3" fill="#ffffff" />
          </svg>
        </div>

        {/* Center Content */}
        <div className="content-center">
          <h2 className="section-title">Let's keep in touch</h2>
          <p className="section-subtitle">
            Got a question or need some help? Just reach out — we’re always here for you!
          </p>
          <button className="contact-button"
           onClick={() => navigate('/contact')}>Contact us</button>
        </div>

        {/* Right Character */}
        <div className="character character-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="200" viewBox="0 0 160 200">
            <rect x="60" y="80" width="40" height="80" rx="8" fill="#ec4899" />
            <circle cx="80" cy="70" r="20" fill="#be185d" />
            <circle cx="75" cy="65" r="5" fill="#ffffff" />
            <circle cx="85" cy="65" r="5" fill="#ffffff" />
            <path d="M75 85 Q80 90 85 85" stroke="#be185d" strokeWidth="2" fill="none" />
            
            {/* Speech Bubble */}
            <rect x="20" y="40" width="60" height="40" rx="8" fill="#d9f73c" />
            <polygon points="80,80 90,90 80,100" fill="#d9f73c" />
            
            {/* Starburst */}
            <path d="M50 60 L55 50 L60 60 L70 55 L65 65 L75 70 L65 75 L70 85 L60 80 L55 90 L50 80 L40 85 L45 75 L35 70 L45 65 L40 55 Z" 
                  fill="#ffffff" stroke="#d9f73c" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default KeepInTouch;
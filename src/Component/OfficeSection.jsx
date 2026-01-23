// OfficeSection.jsx
import React from 'react';
import './OfficeSection.css';

const OfficeSection = () => {
  return (
    <section className="office-section">
      <div className="office-container">
        {/* Left Side - Text Content */}
        <div className="office-text">
          <h2 className="office-title">
            Our office in Lagos, <span className="dot yellow-dot">●</span>
          </h2>
          <h2 className="office-title">Nigeria</h2>
          
          <p className="office-description">
            Located at Lagos, our office is where creativity meets innovation. 
            This is where our dedicated team designs, builds, and perfects the Babsify digital experience. 
            Visit us to meet the minds behind our solutions and see how we’re helping businesses grow through 
            modern web, mobile, branding, and advertising services.
          </p>

          {/* Decorative Cloud */}
          <div className="cloud cloud-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 120 60">
              <path d="M15,30 Q30,15 45,30 T75,30 Q90,15 105,30 L105,45 L15,45 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Right Side - Image + Decorations */}
        <div className="office-image-wrapper">
          <div className="image-frame">
            <img 
              src="/public/download.jpg" // Replace with your actual image
              alt="Our office in Lagos, Nigeria"
              className="office-image"
              loading="lazy"
            />
          </div>

          {/* Decorative Elements */}
          <div className="decorative-elements">
            <div className="dot blue-dot">●</div>
            <div className="dot yellow-dot">●</div>
            
            {/* Clouds */}
            <div className="cloud cloud-top">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 80 40">
                <path d="M10,20 Q20,10 30,20 T50,20 Q60,10 70,20 L70,30 L10,30 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2"/>
              </svg>
            </div>
            <div className="cloud cloud-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 60 30">
                <path d="M5,15 Q15,5 25,15 T45,15 Q55,5 60,15 L60,25 L5,25 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
// Footer.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // Social media links
  const socialLinks = [
   { 
  name: 'Instagram', 
  url: 'https://instagram.com/builtbypauladim', 
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
},
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/paul-chukwujindu-a8a842379/', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/builtbypauladim', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 1c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      )
    },
    { 
      name: 'Gmail', 
      url: 'mailto:builtbypauladim@gmail.com', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ];

  // Quick links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  // Services
  const services = [
    'Web Development',
    'Graphic Design',
    'API Integration',
    'Performance Optimization',
    'Maintenance & Support'
  ];

  // Navigation handlers
  const handleNavigation = (path) => {
    if (path.startsWith('/#')) {
      // Handle anchor links
      const element = document.querySelector(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path.endsWith('.pdf')) {
      // Open PDF in new tab
      window.open(path, '_blank');
    } else {
      // Navigate to internal route
      navigate(path);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // Handle newsletter subscription (you can integrate with services like Mailchimp)
    console.log('Subscribed with email:', email);
    e.target.reset();
    // Show success message or handle API call here
  };

  return (
    <footer className="developer-footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div 
            className="footer-logo" 
            onClick={() => navigate('/')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
          >
            <span className="logo-accent">P</span>AUL ADIM
          </div>
          <p className="footer-description">
            Crafting exceptional digital experiences with clean code and innovative solutions.
          </p>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="social-link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-nav">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(link.path)}
                  className="footer-link-btn"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-nav">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3 className="footer-heading">Stay Updated</h3>
          <p className="newsletter-description">
           Stay glued—more projects, insights, and digital crafts are on the way.
          </p>
          {/* <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                aria-label="Email address"
                required
              />
              <button type="submit" aria-label="Subscribe">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </form> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright">
            &copy; {currentYear} Paul Adim. All rights reserved.
          </div>
          <div className="footer-legal">
            <button 
              onClick={() => navigate('/privacy')} 
              className="legal-link"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => navigate('/terms')} 
              className="legal-link"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
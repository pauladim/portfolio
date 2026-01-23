// Removed TypeScript interfaces and types

import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Constants
const DEFAULT_SPIN_DURATION = 20;
const DEFAULT_BACKGROUND = 'radial-gradient(circle at 50% 50%, #4a148c 0%, #6b21a8 50%, #7e22ce 100%)';

// CircularText Component
const CircularText = ({ text, spinDuration = 20, onHover = 'speedUp', className = '', size = 300 }) => {
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(spinDuration);
  const animationRef = useRef();

  const letters = text.split('');

  useEffect(() => {
    const animate = () => {
      setRotation(prev => (prev + 360 / (currentSpeed * 60)) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentSpeed]);

const handleHoverStart = useCallback(() => {
  if (onHover === 'none') return; // ✅ Fixed: was "onHook"

  setIsHovering(true);

  switch (onHover) {
    case 'slowDown':
      setCurrentSpeed(spinDuration * 2);
      break;
    case 'speedUp':
      setCurrentSpeed(spinDuration / 4);
      break;
    case 'pause':
      setCurrentSpeed(Infinity);
      break;
    case 'goBonkers':
      setCurrentSpeed(spinDuration / 20);
      break;
    default:
      setCurrentSpeed(spinDuration);
  }
}, [onHover, spinDuration]);

  const handleHoverEnd = useCallback(() => {
    setIsHovering(false);
    setCurrentSpeed(spinDuration);
  }, [spinDuration]);

  const calculateLetterPosition = useCallback((index) => {
    const rotationDeg = (360 / letters.length) * index;
    const radius = size / 2 - 40;
    const angle = (rotationDeg * Math.PI) / 180;
    const x = Math.sin(angle) * radius;
    const y = -Math.cos(angle) * radius;
    return `translate(${x}px, ${y}px) rotate(${rotationDeg}deg)`;
  }, [letters.length, size]);

  return (
    <div
      className={`circular-hero-text ${className} ${isHovering ? 'hovering' : ''}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        width: size,
        height: size,
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      role="img"
      aria-label="Circular text animation"
      tabIndex={0}
    >
      <div className="circular-hero-text__inner">
        <div className="circular-hero-text__center">
          <div className="circular-hero-text__dot" />
        </div>
        {letters.map((letter, i) => (
          <span
            key={`${letter}-${i}`}
            className="circular-hero-text__letter"
            style={{
              transform: calculateLetterPosition(i),
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

// Skills Section (placeholder – you can implement later)
const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h3 className="section-title">My Skills</h3>
      <div className="section-content">
        <p className="coming-soon">Skills section coming soon...</p>
      </div>
    </div>
  );
};

// Services Component
const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks and best practices.',
      icon: '💻'
    },
    {
      title: 'Graphic Design',
      description: 'Creative, purpose-driven graphic design for logos, marketing materials, and digital assets that stand out and resonate.',
      icon: '🎨'
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android.',
      icon: '📱'
    },
    {
      title: 'Consulting',
      description: 'Technical consulting to help your business achieve its goals.',
      icon: '💡'
    }
  ];

  return (
    <div className="services-section">
      <h3 className="section-title">Services I Offer</h3>
      <div className="section-content">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h4 className="service-name">{service.title}</h4>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Testimonials Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ferdinand Pascal',
      role: 'CEO, We are not thugs',
      content: 'Paul delivered exceptional work on our web application. His attention to detail and technical expertise are unmatched.',
      avatar: '👨‍💼'
    },
    {
      name: 'Jacinta',
      role: 'Founder, Jaufoods',
      content: 'Paul transformed our vision into a stunning, functional website. Highly recommend his services!',
      avatar: '👩‍💼'
    }
  ];

  return (
    <div className="testimonials-section">
      <h3 className="section-title">Client Testimonials</h3>
      <div className="section-content">
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-avatar">{testimonial.avatar}</div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h5>{testimonial.name}</h5>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Home Component
const Home = () => {
  const navigate = useNavigate();
  const headline = "Building Digital Experiences With Passion";
  const subheadline = "I create beautiful, functional, and user-centered digital experiences with cutting-edge technologies.";
  const circularText = "BUILTBYPAULADIM";
  const primaryCta = "View My Works";
  const secondaryCta = "Contact Me";
  const background = DEFAULT_BACKGROUND;
  const spinDuration = DEFAULT_SPIN_DURATION;
  const defaultHoverBehavior = 'speedUp';
  const showControls = true;

  const [hoverBehavior, setHoverBehavior] = useState(defaultHoverBehavior);
  const [circularSize, setCircularSize] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setCircularSize(280);
      } else if (window.innerWidth < 768) {
        setCircularSize(350);
      } else {
        setCircularSize(400);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrimaryCta = () => {
    navigate('/projects');
  };

  const handleSecondaryCta = () => {
    navigate('/contact');
  };

  const handleBehaviorChange = (behavior) => {
    setHoverBehavior(behavior);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className="circular-hero"
        style={{ background }}
        aria-label="Hero section with circular text animation"
      >
        <div className="circular-hero__background-effects">
          <div className="circular-hero__glow" />
          <div className="circular-hero__particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="circular-hero__particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="circular-hero__container">
          <div className="circular-hero__content">
            <div className="circular-hero__text-column">
              <div>
                <div className="circular-hero__badge">
                  <div className="circular-hero__badge-dot" />
                  <span className="circular-hero__badge-text">FULL STACK DEVELOPER</span>
                </div>
              </div>

              <h1 className="circular-hero__headline">
                {headline}
              </h1>

              <p className="circular-hero__subheadline">
                {subheadline}
              </p>

              <div className="circular-hero__cta-group">
                <button
                  className="circular-hero__cta circular-hero__cta--primary"
                  onClick={handlePrimaryCta}
                >
                  <span>{primaryCta}</span>
                  <svg
                    className="circular-hero__cta-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <button
                  className="circular-hero__cta circular-hero__cta--secondary"
                  onClick={handleSecondaryCta}
                >
                  <span>{secondaryCta}</span>
                </button>
              </div>

              <div className="circular-hero__stats">
                <div className="circular-hero__stat">
                  <div className="circular-hero__stat-value">2+</div>
                  <div className="circular-hero__stat-label">Projects</div>
                </div>
                <div className="circular-hero__stat">
                  <div className="circular-hero__stat-value">1+</div>
                  <div className="circular-hero__stat-label">Years</div>
                </div>
                <div className="circular-hero__stat">
                  <div className="circular-hero__stat-value">2+</div>
                  <div className="circular-hero__stat-label">Clients</div>
                </div>
              </div>
            </div>

            <div className="circular-hero__animation-column">
              <div className="circular-hero__animation-wrapper">
                <CircularText
                  text={circularText}
                  spinDuration={spinDuration}
                  onHover={hoverBehavior}
                  size={circularSize}
                  className="circular-hero__circular-text"
                />
              </div>
            </div>
          </div>

          <div className="circular-hero__scroll-indicator" onClick={() => {
            document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <div className="circular-hero__scroll-text">Discover More</div>
            <div className="circular-hero__scroll-line" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section id="skills-section" className="section-skills">
        <div className="section-content">
          <SkillsSection />
        </div>
      </section> */}

      {/* Services Section */}
      <section className="section-services">
        <ServicesSection />
      </section>

      {/* Testimonials Section */}
      <section className="section-testimonials">
        <TestimonialsSection />
      </section>

      {/* CTA Section */}
      <section className="section-cta">
        <div className="section-content">
          <div className="cta-content">
            <h2 className="cta-title">Ready to start your project?</h2>
            <p className="cta-subtitle">Let's discuss how we can bring your ideas to life with clean code and modern design.</p>
            <div className="cta-buttons">
              <button
                className="cta-btn cta-btn-primary"
                onClick={() => navigate('/contact')}
              >
                Get in Touch
              </button>
              <button
                className="cta-btn cta-btn-secondary"
                onClick={() => navigate('/projects')}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
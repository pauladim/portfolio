// Header.jsx
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Trigger sooner for mobile
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className={`fixed-top navbar-custom ${scrolled ? 'scrolled' : ''}`}
      variant="dark"
    >
      <Container fluid className="px-3 px-md-4"> {/* Full-width on mobile */}
        {/* Logo - Far Left */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="navbar-brand-custom" 
          onClick={handleNavClick}
        >
          <img 
            src="/logonew.png" 
            alt="Paul Logo" 
            className="logo-img-bold" 
          />
        </Navbar.Brand>

        {/* Hamburger - Far Right */}
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          className="navbar-toggler-right"
        />

        {/* Collapsible Menu */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={handleNavClick}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              onClick={handleNavClick}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              onClick={handleNavClick}
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              onClick={handleNavClick}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import AboutPage from './Component/About';
import ProjectsPage from './Component/Projects';
import ContactPage from './Component/Contact';
import Footer from './Component/Footer';
import WhatsAppButton from './Component/WhatsAppButton';
import ScrollToTop from "./Component/ScrollToTop"
import './App.css';

function App() {
  // Initialize particles after component mounts
  useEffect(() => {
    // Dynamic import of particles functionality
    import('./Component/particles').then(module => {
      const { default: createParticles } = module;

      // Wait for DOM to be fully loaded before creating particles
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createParticles);
      } else {
        // DOM is already loaded, create particles immediately
        createParticles();
      }

      // Set up resize listener
      const handleResize = () => {
        setTimeout(createParticles, 100);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup event listeners on unmount
      return () => {
        document.removeEventListener('DOMContentLoaded', createParticles);
        window.removeEventListener('resize', handleResize);
      };
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <AboutPage />
            <Footer />
          </>
        } />
        <Route path="/projects" element={
          <>
            <ProjectsPage />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <ContactPage />
            <Footer />
          </>
        } />
      </Routes>

      <WhatsAppButton />
    </>
  );
}

export default App

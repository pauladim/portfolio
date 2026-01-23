// Function to create particles for the hero section
function createParticles() {
  const particlesContainer = document.getElementById('particles-js');
  if (!particlesContainer) return;

  // Clear existing particles
  particlesContainer.innerHTML = '';

  // Create 50 particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('circular-hero__particle');
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Random size
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random animation delay and duration
    const delay = Math.random() * 5;
    const duration = 3 + Math.random() * 4;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    particlesContainer.appendChild(particle);
  }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', createParticles);

// Recreate particles on window resize
window.addEventListener('resize', () => {
  setTimeout(createParticles, 100);
});

export default createParticles;
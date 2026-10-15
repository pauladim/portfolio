import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "N.G.O Website",
      description: "Empowering individuals to overcome adversity",
      technologies: ["React", "Tailwind CSS"],
      image: "/newthugs.png",
      link: "https://wearenotthugs.com"
    },
    {
      title: "Catfish Website",
      description: "E-commerce website for a catfish market with product catalog.",
      technologies: ["React", "Material UI"],
      image: "/jaufooods.png",
      link: "https://www.jaufoods.com.ng"
    },
      {
      title: "Homecare Website",
     description: "A modern homecare website designed to present caregiving services, support solutions, and seamless client inquiries.",
      technologies: ["React", "Material UI"],
      image: "/rejulz.jpeg",
      link: "https://www.rejulzhomecare.com"
    }
  ];

  return (
    <div className="page-container">
      <section id="projects" className="projects-section">
        {/* === TITLE + DESCRIPTION: NO COL, NO GRID, JUST CENTERED TEXT === */}
        <div className="projects-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-description">
            Here are some of my recent projects. Each one is crafted with attention to detail and a passion for creating exceptional user experiences.
          </p>
        </div>

        {/* === PROJECT CARDS === */}
        <Container>
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col key={index} lg={4} md={6}>
                <Card
                  className="project-card"
                  onClick={() => project.link && window.open(project.link, '_blank')}
                  style={{ cursor: project.link ? 'pointer' : 'default' }}
                >
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <Card.Body>
                    <Card.Title className="project-title">{project.title}</Card.Title>
                    <Card.Text className="project-description">
                      {project.description}
                    </Card.Text>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
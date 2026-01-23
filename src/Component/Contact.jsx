// Contact.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // EmailJS Configuration
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <div className="page-container">
      <section id="contact" className="contact-section">
        <Container fluid className="contact-container"> {/* Full-width container */}
          {/* Title & Description – centered */}
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-description">
                Have a project in mind or want to discuss potential opportunities?
                Feel free to reach out and I'll get back to you as soon as possible.
              </p>
            </Col>
          </Row>

          {/* Wider 50/50 Layout with max-width constraint */}
          <Row className="g-5 justify-content-center">
            {/* Contact Info – Wider on desktop */}
            <Col lg={6} md={12} className="contact-column">
              <div className="contact-info">
                <h3 className="contact-info-title">Contact Information</h3>

                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>Builtbypauladim@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>+234 (810) 936-7691</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Follow Me</h4>
                  <div className="social-icons">
                    <a href="https://www.linkedin.com/in/paul-chukwujindu-a8a842379" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                    <a href="https://x.com/builtbypauladim" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
                    <a href="https://instagram.com/builtbypauladim" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
                  </div>
                </div>
              </div>
            </Col>

            {/* Form */}
            <Col lg={6} md={12} className="contact-column">
              <Form className="contact-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="contact-submit-btn"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>

                {formStatus === 'success' && (
                  <div className="form-feedback success">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="form-feedback error">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
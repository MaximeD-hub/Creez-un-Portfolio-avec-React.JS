import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <p>John Doe</p>
            <p>123 Rue Exemple, 75000 Paris</p>
            <p>+33 6 12 34 56 78</p>
            <div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light me-2"><FaGithub /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-2"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light"><FaLinkedin /></a>
            </div>
          </Col>
          <Col md={4}>
            <Link to="/" className="text-light d-block">ACCUEIL</Link>
            <Link to="/services" className="text-light d-block">SERVICES</Link>
            <Link to="/portfolio" className="text-light d-block">PORTFOLIO</Link>
            <Link to="/contact" className="text-light d-block">CONTACT</Link>
            <Link to="/mentions-legales" className="text-light d-block">MENTIONS LÉGALES</Link>
          </Col>
          <Col md={4}>
            <Link to="/portfolio" className="text-light d-block">Dernières réalisations</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

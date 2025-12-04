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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light me-2"><i class="bi bi-github"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-2"><i class="bi bi-twitter-x"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light"><i class="bi bi-linkedin"></i></a>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <p><h4>Liens Utiles</h4></p>
              <ul>
            <li><Link to="/" className="footer-link">Accueil</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
            <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li><Link to="/mentions-legales" className="footer-link">Mentions Légales</Link></li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
          <div>
            <p><h4>Dernières réalisations</h4></p>
            <ul>
            <li><Link to="/portfolio" className="footer-link">Fresh Food</Link></li>
            <li><Link to="/portfolio" className="footer-link">Restaurant Akira</Link></li>
            <li><Link to="/portfolio" className="footer-link">Espace Bien-être</Link></li>
            <li><Link to="/portfolio" className="footer-link">SEO</Link></li>
            <li><Link to="/portfolio" className="footer-link">Création d'une API</Link></li>
            <li><Link to="/portfolio" className="footer-link">Maquette d'un site</Link></li>
              </ul>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

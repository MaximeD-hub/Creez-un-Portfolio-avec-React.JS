import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center"><strong>Contact</strong></h2>
        <h3 className="text-center mb-5"><small>Pour me contacter en vue d'un entretien ou d'une futur collaboration, merci de remplir le formulaire de contact.</small></h3>

        <Row>
          {/*Formulaire */}
          <Col md={6}>
          <h4>Formulaire de Contact</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Votre nom" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Votre email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="tel" placeholder="Votre numéro" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Sujet" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={10} placeholder="Votre message" required />
              </Form.Group>
              <Button variant="primary" type="submit">Envoyer</Button>
            </Form>
          </Col>

          {/*Coordonnées + Google Map */}
          <Col>
            <h4>Mes Coordonnées</h4>
            <p><i class="bi bi-map"></i> 123 Rue Exemple</p>
            <p><i class="bi bi-geo-alt"></i> 75000 Paris</p>
            <p><i class="bi bi-phone"></i> +33 6 12 34 56 78</p>
            <p><i class="bi bi-envelope-at"></i> contact@johndoe.com</p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999!2d2.292292!3d48.85837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd0d3d41f3%3A0xa0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            ></iframe>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Contact;


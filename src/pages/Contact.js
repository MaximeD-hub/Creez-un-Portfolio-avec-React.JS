import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">Contact</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Votre nom" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Votre email" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control type="tel" placeholder="Votre numéro" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Sujet</Form.Label>
            <Form.Control type="text" placeholder="Sujet" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Votre message" required />
          </Form.Group>
          <Button variant="primary" type="submit">Envoyer</Button>
        </Form>

        <div className="mt-5">
          <p><strong>Adresse :</strong> 123 Rue Exemple, 75000 Paris</p>
          <p><strong>Téléphone :</strong> +33 6 12 34 56 78</p>
          <p><strong>Email :</strong> contact@johndoe.com</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999!2d2.292292!3d48.85837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd0d3d41f3%3A0xa0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%" height="300" style={{ border:0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </Container>
    </section>
  );
}

export default Contact;

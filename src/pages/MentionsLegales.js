import React from "react";
import { Container, Accordion } from "react-bootstrap";

function MentionsLegales() {
  return (
    <section className="py-5" style={{ display: 'block' }}>
      <Container>
        <h2 className="text-center mb-5">Mentions Légales</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <p>John Doe</p>
              <p>123 Rue Exemple, 75000 Paris</p>
              <p>Email : contact@johndoe.com</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur du site</Accordion.Header>
            <Accordion.Body>
              <p>alwaysdata</p>
              <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p>  <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer">www.ovh.com</a></p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/"> Centre Européen de formation </a> </p>
              <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site : <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a></p>
              <p>La favicon de ce site a été fournie par : <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">Flaticon</a></p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default MentionsLegales;

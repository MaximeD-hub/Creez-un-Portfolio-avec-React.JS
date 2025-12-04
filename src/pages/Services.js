import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import bannerImg from "../assets/images/banner.jpg";

function Services() {
  const services = [
    { title: "UX Design", description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciel, objets connectés,etc...) en plaçant l'utilisateur au centre des préoccupations. L'Objectif est de rendre l'expérience utilisateur le plus fluide et agréable possible.", icon:"bi-brush"},
    { title: "Développement Web", description: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, Javascript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)", icon: "bi-code-slash" },
    { title: "Référencement", description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.", icon:"bi-search" },
  ];

  return (
    <div>
      <div style={{ width: "100%", height: "200px", overflow: "hidden", marginBottom: "2rem" }}>
        <img
          src={bannerImg}
          alt="Services Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <section className="py-5">
        <Container>
          <h2 className="text-center mb-2"><strong>Mon offre de services</strong></h2>
          <h3 className="text-center mb-5">Voici les prestations sur lesquelles je peux intervenir</h3>
          <Row>
            {services.map((service, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <Card className="h-100 text-center">
                  <i className={`${service.icon} mb-3`} style={{ fontSize: "3rem", color: "blue"  }}
                  ></i>
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Services;

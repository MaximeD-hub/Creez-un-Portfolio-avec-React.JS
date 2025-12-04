import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import bannerImg from "../assets/images/banner.jpg";

function Services() {
  const services = [
    { title: "Service 1", description: "Description du service 1" },
    { title: "Service 2", description: "Description du service 2" },
    { title: "Service 3", description: "Description du service 3" },
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
          <h2 className="text-center mb-2">Services</h2>
          <h3 className="text-center mb-5">Découvrez mes offres</h3>
          <Row>
            {services.map((service, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <Card className="h-100 text-center">
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

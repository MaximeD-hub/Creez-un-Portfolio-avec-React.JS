import React from "react";
import { Container, Row, Col, Card, Button, CardFooter, CardSubtitle } from "react-bootstrap";
import bannerImg from "../assets/images/banner.jpg";
import coderImg from "../assets/images/portfolio/coder.jpg";
import espacebienetreImg from "../assets/images/portfolio/espace-bien-etre.jpg";
import freshfoodImg from "../assets/images/portfolio/fresh-food.jpg";
import restaurantImg from "../assets/images/portfolio/restaurant-japonais.jpg";
import screensImg from "../assets/images/portfolio/screens.jpg";
import seoImg from "../assets/images/portfolio/seo.jpg";

function Portfolio() {
  const projects = [
    { title: "Fresh Food", description: "Site de vente de produits frais en ligne", image: freshfoodImg, subtitle: "Site réalisé avec PHP et MySQL" },
    { title: "Restaurant Akira", description: "Site de vente de produits frais en ligne", image: restaurantImg, subtitle: "Site réalisé avec WordPress"},
    { title: "Espace Bien-être", description: "Site de vente de produits frais en ligne", image: espacebienetreImg, subtitle: "Site réalisé avec LARAVEL" },
    { title: "SEO", description: "Amélioration du référencement d'un site de e-commerce", image: seoImg, subtitle: "Utilisation des outils SEO" },
    { title: "Création d'une API", description: "Création d'une API RESTFULL publique", image: coderImg, subtitle: "PHP - SYMFONY" },
    { title: "Maquette d'un site web", description: "Création du prototype d'un site", image: screensImg, subtitle: "Réaliser avec FIGMA" },
  ];

  return (
    <div>
      <div style={{ width: "100%", height: "200px", overflow: "hidden", marginBottom: "2rem" }}>
        <img
          src={bannerImg}
          alt="Portfolio Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-2"><strong>Portfolio</strong></h2>
          <h3 className="text-center mb-5">Voici quelques-unes de mes réalisations</h3>
          <Row>
            {projects.map((project, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Img variant="top" src={project.image} style={{ height: "100x", objectFit: "cover" }} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button variant="primary">Voir le site</Button>
                  </Card.Body>
                  <CardFooter>
                    <CardSubtitle>{project.subtitle}</CardSubtitle>
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Portfolio;
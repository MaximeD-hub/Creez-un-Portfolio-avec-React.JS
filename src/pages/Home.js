import React, { useState, useEffect } from "react";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import heroImg from "../assets/images/hero-bg.jpg";
import johndoeImg from "../assets/images/john-doe-about.jpg";

function Home() {
  const [show, setShow] = useState(false);
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then(res => res.json())
      .then(data => setGithubData(data))
      .catch(err => console.error(err));
  }, []);

  const skills = [
    { label: "HTML / CSS", value: 90, color: "success" },
    { label: "JavaScript / React", value: 85, color: "info" },
    { label: "Node.js / Express", value: 70, color: "warning" },
    { label: "SEO & Marketing", value: 75, color: "danger" },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: "75%" }}
      >
        <div>
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur Web full stack</h2>
          <Button className="btn-hero" onClick={() => setShow(true)}>En savoir plus</Button>
        </div>
      </section>

      {/* Présentation + compétences avec image */}
      <section className="presentation py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2 className="text-center mb-5">À propos</h2>
          <div className="row align-items-center">
            {/* Image */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={johndoeImg}
                alt="John Doe"
                className="img-fluid rounded"
                style={{ maxHeight: "300px" }}
              />
            </div>
            {/* Compétences */}
            <div className="col-md-8">
              <p style={{ fontSize: "1.1rem", color: "#495057" }}>
                Bonjour, je suis John Doe, développeur web passionné par la création de sites modernes et responsives.
              </p>

              {skills.map((skill, idx) => (
                <div className="mb-3" key={idx}>
                  <label>{skill.label}</label>
                  <ProgressBar now={skill.value} label={`${skill.value}%`} variant={skill.color} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modale GitHub */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {githubData ? (
  <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
    
    <img src={githubData.avatar_url} alt="avatar github" style={{ width: "300px", height: "300px", borderRadius: "10px" }} />

    <div>
      <p><i className="bi bi-person"></i> <a href={githubData.html_url} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "8px" }}> {githubData.name} </a> </p>
      <p><i className="bi bi-geo-alt"></i> {githubData.location}</p>
      <p><i className="bi bi-card-heading"></i> {githubData.bio}</p>
      <p><i className="bi bi-box"></i> Repositories : {githubData.public_repos}</p>
      <p><i className="bi bi-people"></i> Followers : {githubData.followers}</p>
      <p><i className="bi bi-people"></i> Following : {githubData.following}</p>
    </div>

  </div>
) : (
  <p>Chargement...</p>
)}

        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Home;

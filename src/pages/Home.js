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
    { label: "HTML 5", value: 90, color: "danger" },
    { label: "CSS3", value: 80, color: "info" },
    { label: "JAVASCRIPT", value: 70, color: "warning" },
    { label: "PHP", value: 60, color: "success" },
    { label: "REACT", value: 50, color: "primary" },
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

<section className="about-skills py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container">
    <div className="row align-items-start">

      {/* À propos*/}
      <div className="col-md-6 mb-4 mb-md-0">
        <h2 className="mb-4 text-center text-md-start">À propos</h2>
        <img
          src={johndoeImg}
          alt="John Doe"
          className="img-fluid rounded mb-3"
          style={{ maxHeight: "300px" }}
        />
        <p style={{ fontSize: "1.1rem", color: "#495057" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras arcu tellus, dictum ut suscipit ultrices, rhoncus iaculis dui.
        </p>
        <p style={{ fontSize: "1.1rem", color: "#495057" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras arcu tellus, dictum ut suscipit ultrices, rhoncus iaculis dui.
        </p>
        <p style={{ fontSize: "1.1rem", color: "#495057" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras arcu tellus, dictum ut suscipit ultrices, rhoncus iaculis dui.
        </p>
      </div>

      {/* Compétences*/}
      <div className="col-md-6">
        <h2 className="mb-4 text-center text-md-start">Compétences</h2>
        {skills.map((skill, idx) => (
          <div className="mb-3" key={idx}>
            <label className="fw-bold">{skill.label} {`${skill.value}%`} </label>
            <ProgressBar now={skill.value} variant={skill.color} />
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

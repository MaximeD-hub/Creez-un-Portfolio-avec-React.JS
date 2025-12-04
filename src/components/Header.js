import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="md" variant="dark" style={{ backgroundColor: "#343a40" }}>
      <Container>
        <Navbar.Brand href="/">JOHN DOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link" activeclassname="active-link">Accueil</NavLink>
            <NavLink to="/services" className="nav-link" activeclassname="active-link">Services</NavLink>
            <NavLink to="/portfolio" className="nav-link" activeclassname="active-link">Portfolio</NavLink>
            <NavLink to="/contact" className="nav-link" activeclassname="active-link">Contact</NavLink>
            <NavLink to="/mentions-legales" className="nav-link" activeclassname="active-link">Mentions Légales</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

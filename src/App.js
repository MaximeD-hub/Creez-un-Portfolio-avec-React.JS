import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  const [activeLink, setActiveLink] = useState("/about");

  const handleLinkChange = (link) => {
    setActiveLink(link);
  };

  return (
    <Router>
      <Navbar activeLink={activeLink} handleLinkChange={handleLinkChange} />
       
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
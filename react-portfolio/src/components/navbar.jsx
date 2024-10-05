import React, { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#about");

  return (
    <>
      <nav style={navStyle}>
        <h1 style={logoStyle}>Eric Neff</h1>
        <div style={linksContainerStyle}>
          <a
            href="#about"
            style={activeLink === "#about" ? activeLinkStyle : linkStyle}
            onClick={() => setActiveLink("#about")}
          >
            About Me
          </a>
          <a
            href="#portfolio"
            style={activeLink === "#portfolio" ? activeLinkStyle : linkStyle}
            onClick={() => setActiveLink("#portfolio")}
          >
            Portfolio
          </a>
          <a
            href="#resume"
            style={activeLink === "#resume" ? activeLinkStyle : linkStyle}
            onClick={() => setActiveLink("#resume")}
          >
            Resume
          </a>
          <a
            href="#contact"
            style={activeLink === "#contact" ? activeLinkStyle : linkStyle}
            onClick={() => setActiveLink("#contact")}
          >
            Contact
          </a>
        </div>
      </nav>
      <img
        src="../public/images/fretboard.jpg"
        alt="Header Background"
        style={imageStyle}
      />
      <style>{mediaStyles}</style>
    </>
  );
}

const navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 20px", // Increased padding for 50% taller header
  backgroundColor: "#282c34",
  zIndex: 1000,
  flexWrap: "wrap",
};

const logoStyle = {
  margin: 0,
  color: "#fff",
  fontSize: "30px", // Increased font size by 25%
};

const linksContainerStyle = {
  display: "flex",
  gap: "30px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "22.5px", // Increased font size by 25%
};

const activeLinkStyle = {
  ...linkStyle,
  fontWeight: "bold",
  borderBottom: "2px solid #fff",
};

// Image style to snap below the header and fill the width of the screen
const imageStyle = {
  position: "fixed",
  top: "75px", // Adjusted to match the increased height of your navbar
  left: 0,
  width: "100%",
  height: "auto",
  zIndex: 500, // Ensures the image stays below the navbar
};

// Media query for screen sizes 511px or smaller
const mediaStyles = `
  @media (max-width: 606px) {
    nav {
      flex-direction: column;
      align-items: center;
      padding: 22.5px; /* Increased padding for 50% taller header */
    }

    h1 {
      margin-bottom: 10px;
      text-align: center;
      font-size: 30px; /* Increased font size by 25% */
    }

    div {
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    img {
      top: 120px; /* Adjusted to match the increased height of the navbar on mobile */
    }
  }
`;
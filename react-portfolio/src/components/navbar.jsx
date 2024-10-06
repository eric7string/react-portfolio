import React from "react";
import { useLocation } from "react-router-dom";

export default function Navbar({ handleLinkChange }) {
  const location = useLocation();
  const activeLink = location.pathname; // Get the current path

  return (
    <>
      <nav style={navStyle}>
        <h1 style={logoStyle}>Eric Neff</h1>
        <div style={linksContainerStyle}>
          <a
            href="/about"
            style={activeLink === "/about" ? activeLinkStyle : linkStyle}
            onClick={() => handleLinkChange("/about")}
          >
            About Me
          </a>
          <a
            href="/portfolio"
            style={activeLink === "/portfolio" ? activeLinkStyle : linkStyle}
            onClick={() => handleLinkChange("/portfolio")}
          >
            Portfolio
          </a>
          <a
            href="/resume"
            style={activeLink === "/resume" ? activeLinkStyle : linkStyle}
            onClick={() => handleLinkChange("/resume")}
          >
            Resume
          </a>
          <a
            href="/contact"
            style={activeLink === "/contact" ? activeLinkStyle : linkStyle}
            onClick={() => handleLinkChange("/contact")}
          >
            Contact
          </a>
        </div>
      </nav>
      <style>{mediaStyles}</style>
    </>
  );
}

const navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center", // Center all content
  alignItems: "center",
  flexDirection: "column", // Ensure vertical stacking for responsiveness
  padding: "15px 20px",
  backgroundColor: "#282c34",
  zIndex: 1000,
  height: "auto",
  backgroundImage: "url('/images/fretboard.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
  boxSizing: "border-box",
};

const overlayStyle = `
  nav::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.25);
    z-index: -1;
  }
`;

const mediaStyles = `
  ${overlayStyle}
  
  /* Responsive layout for screens below 768px */
  @media (max-width: 768px) {
    nav {
      flex-direction: column; /* Stack items vertically */
      align-items: center; /* Center items */
      padding: 15px;
    }

    h1 {
      margin-bottom: 15px;
      text-align: center; /* Center the logo */
      font-size: 8vw; /* Scale down the h1 size */
    }

    div {
      display: flex;
      flex-wrap: wrap; /* Allow wrapping */
      justify-content: center; /* Center links */
      gap: 15px;
      width: 100%; /* Ensure full width */
      max-width: 100%; /* Prevent overflow */
      padding: 10px; /* Add padding for spacing */
    }

    div a {
      font-size: 5vw; /* Scale down link font size */
      flex-basis: calc(50% - 30px); /* Ensure 2 links per row */
      text-align: center; /* Center the link text */
      box-sizing: border-box;
      padding: 10px; /* Space around each link */
    }
  }
`;

const logoStyle = {
  margin: 0,
  color: "#fff",
  fontSize: "45px",
  zIndex: 1001,
  textShadow: "2px 2px 5px black",
};

const linksContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap", // Allow links to wrap
  width: "100%", // Make container full width
  maxWidth: "100%", // Prevent overflow
  zIndex: 1001,
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "27px",
  textShadow: "2px 2px 5px black",
};

const activeLinkStyle = {
  ...linkStyle,
  fontWeight: "bold",
  borderBottom: "2px solid #fff",
};

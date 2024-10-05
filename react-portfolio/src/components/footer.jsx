import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <a href="https://github.com/eric7string" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" style={iconStyle} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" style={iconStyle} />
      </a>
      <a href="https://x.com/eric7string" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" style={iconStyle} />
      </a>
    </footer>
  );
};

const footerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "#282c34",
  zIndex: 1000, // Ensures the footer stays on top of other content
};

const iconStyle = {
  margin: "0 15px",
  color: "#fff",
  textDecoration: "none",
};

export default Footer;

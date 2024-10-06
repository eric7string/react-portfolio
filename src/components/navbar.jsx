import React from "react";
import { useLocation } from "react-router-dom";

export default function Navbar({ handleLinkChange }) {
  const location = useLocation();
  const activeLink = location.pathname; 

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
  justifyContent: "center", 
  alignItems: "center",
  flexDirection: "column", 
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
  
  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      align-items: center;
      padding: 15px;
    }

    h1 {
      margin-bottom: 15px;
      text-align: center;
      font-size: 8vw;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      width: 100%;
      max-width: 100%;
      padding: 10px;
    }

    div a {
      font-size: 5vw;
      flex-basis: calc(50% - 30px);
      text-align: center;
      box-sizing: border-box;
      padding: 10px;
    }
  }
`;

const logoStyle = {
  margin: 0,
  color: "#fff7f7",
  fontSize: "45px",
  zIndex: 1001,
  textShadow: "2px 2px 5px black",
};

const linksContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
  width: "100%",
  maxWidth: "100%",
  zIndex: 1001,
};

const linkStyle = {
  color: "#C68FE6",
  textDecoration: "none",
  fontSize: "27px",
  textShadow: "2px 2px 5px black",
};

const activeLinkStyle = {
  ...linkStyle,
  fontWeight: "bold",
  borderBottom: "2px solid #C68FE6",
};

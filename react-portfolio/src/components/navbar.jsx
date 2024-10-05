import React from "react";

export default function Navbar({ activeLink, handleLinkChange }) {
 

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
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 20px",
  backgroundColor: "#282c34",
  zIndex: 1000,
  flexWrap: "wrap",
  height: "155px",
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
      margin-bottom: 10px;
      text-align: center;
      font-size: 37.5px;
    }

    div {
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
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
  justifyContent: "space-evenly",
  gap: "15px",
  flexGrow: 1,
  zIndex: 1001,
  flexWrap: "wrap",
  boxSizing: "border-box",
  maxWidth: "100%",
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

import React, { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 485);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 485);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    if (e.target.value.trim() === "") {
      alert(`${e.target.name} field cannot be empty!`);
    }
    if (e.target.name === "email" && e.target.value.trim() !== "") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(e.target.value)) {
        alert("Please enter a valid email address.");
      }
    }
  };

  const adjustedFormStyle = {
    ...formStyle,
    maxWidth: isMobile ? "480px" : "640px",
    padding: isMobile ? "19.2px" : "25.6px", // Reduced padding by 20%
    gap: isMobile ? "14.4px" : "19.2px", // Reduced gap by 20%
    border: isMobile ? "1.2px solid #ccc" : "1.6px solid #ccc",
    borderRadius: isMobile ? "7.6px" : "10.2px", // Reduced border radius by 20%
  };

  const adjustedInputStyle = {
    ...inputStyle,
    padding: isMobile ? "9.6px" : "12.8px", // Reduced padding by 20%
    fontSize: isMobile ? "15.4px" : "20.5px", // Reduced font size by 20%
    borderRadius: isMobile ? "3.8px" : "5.1px", // Reduced border radius by 20%
  };

  const adjustedTextAreaStyle = {
    ...adjustedInputStyle,
    height: isMobile ? "96px" : "128px", // Reduced height by 20%
  };

  const adjustedButtonStyle = {
    ...buttonStyle,
    padding: isMobile ? "9.6px" : "12.8px", // Reduced padding by 20%
    fontSize: isMobile ? "15.4px" : "20.5px", // Reduced font size by 20%
    borderRadius: isMobile ? "3.8px" : "5.1px", // Reduced border radius by 20%
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 20px',
          maxWidth: '800px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <form style={adjustedFormStyle}>
          <div style={inputContainerStyle}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              style={adjustedInputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              style={adjustedInputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              style={adjustedTextAreaStyle}
            />
          </div>
          <button type="submit" style={adjustedButtonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "19.2px",
  maxWidth: "640px",
  margin: "25.6px auto", // Reduced margin by 20%
  padding: "25.6px", // Reduced padding by 20%
  border: "1.6px solid #ccc",
  borderRadius: "10.2px", // Reduced border radius by 20%
};

const inputContainerStyle = {
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  padding: "12.8px", // Reduced padding by 20%
  fontSize: "20.5px", // Reduced font size by 20%
  marginTop: "8px",
  borderRadius: "5.1px", // Reduced border radius by 20%
  border: "1.6px solid #ccc",
};

const buttonStyle = {
  padding: "12.8px", // Reduced padding by 20%
  fontSize: "20.5px", // Reduced font size by 20%
  borderRadius: "5.1px", // Reduced border radius by 20%
  border: "none",
  cursor: "pointer",
  backgroundColor: "#282c34",
  color: "#fff",
};

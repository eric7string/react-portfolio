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
    padding: isMobile ? "24px" : "32px",
    gap: isMobile ? "18px" : "24px",
    border: isMobile ? "1.2px solid #ccc" : "1.6px solid #ccc",
    borderRadius: isMobile ? "9.6px" : "12.8px",
  };

  const adjustedInputStyle = {
    ...inputStyle,
    padding: isMobile ? "12px" : "16px",
    fontSize: isMobile ? "19.2px" : "25.6px",
    borderRadius: isMobile ? "4.8px" : "6.4px",
  };

  const adjustedTextAreaStyle = {
    ...adjustedInputStyle,
    height: isMobile ? "120px" : "160px",
  };

  const adjustedButtonStyle = {
    ...buttonStyle,
    padding: isMobile ? "12px" : "16px",
    fontSize: isMobile ? "19.2px" : "25.6px",
    borderRadius: isMobile ? "4.8px" : "6.4px",
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
  gap: "24px",
  maxWidth: "640px",
  margin: "32px auto",
  padding: "32px",
  border: "1.6px solid #ccc",
  borderRadius: "12.8px",
};

const inputContainerStyle = {
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  padding: "16px",
  fontSize: "25.6px",
  marginTop: "8px",
  borderRadius: "6.4px",
  border: "1.6px solid #ccc",
};

const buttonStyle = {
  padding: "16px",
  fontSize: "25.6px",
  borderRadius: "6.4px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#282c34",
  color: "#fff",
};

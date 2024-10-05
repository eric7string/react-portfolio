import React from "react";








export default function Resume() {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100vw', // Use full viewport width
      boxSizing: 'border-box', // Ensure padding is considered within the width
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Stacks elements vertically
        alignItems: 'center', // Centers content
        padding: '0 20px', // Adds padding to the sides
        maxWidth: '800px', // Limits the width of the content
        width: '100%', // Ensures content scales with max width
        boxSizing: 'border-box', // Ensure padding is considered within the width
      }}
    >
      <h1>Resume</h1>
      <p>
        Here is my resume:
      </p>
    </div>
  </div>
  );
}
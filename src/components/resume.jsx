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
        {/* Add your image here */}
        <img 
          src="./images/resume.jpg" // Replace with the correct path to your image
          alt="Resume preview"
          style={{
            maxWidth: '50%',
            height: 'auto',
            marginBottom: '20px',
            borderRadius: '10px', // Adds a border radius
          }}
        />
        
        <p>
          You can download my resume <a href="https://drive.google.com/file/d/1kOGIiO-UWpN3JJkNVOq6D2coAvEYX0J7/view?usp=sharing" target="_blank" rel="noopener noreferrer">HERE</a>
        </p>
        
        <ul>
          <h2>Front-end Proficiencies</h2>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Responsive Design</li>
          <li>React</li>
        </ul>
        
        <ul>
          <h2>Back-end Proficiencies</h2>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>SQL</li>
          <li>PostgresSQL</li>
        </ul>
      </div>
    </div>
  );
}

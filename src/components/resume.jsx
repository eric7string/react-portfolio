export default function Resume() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        paddingBottom: '75px', // Added padding to the bottom
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
        <img 
          src="./images/resume.jpg"
          alt="Resume preview"
          style={{
            maxWidth: '35%',
            height: 'auto',
            marginTop: '150px',
            borderRadius: '10px, 10px',
          }}
        />
        
        <p>
          You can download my resume <a href="https://drive.google.com/file/d/1kOGIiO-UWpN3JJkNVOq6D2coAvEYX0J7/view?usp=sharing" target="_blank" rel="noopener noreferrer">HERE</a>
        </p>
        
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            maxWidth: '800px',
            
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <h2>Front-end Proficiencies</h2>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>React</li>
          </ul>
          
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <h2>Back-end Proficiencies</h2>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>SQL</li>
            <li>PostgresSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

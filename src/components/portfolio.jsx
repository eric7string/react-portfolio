import React, { useState } from 'react';

export default function Portfolio() {
  const projects = [
    {
      name: 'Weather Dashboard',
      description: 'Node.js, TypeScript',
      imageUrl: './images/forecast.jpg',
      projectUrl: 'https://weather-dashboard-d1yq.onrender.com'
    },
    {
      name: 'README Generator',
      description: 'Node.js, JavaScript',
      imageUrl: './images/readme.jpg',
      projectUrl: 'https://github.com/eric7string/readme_generator'
    },
    {
      name: 'Employee Tracker',
      description: 'Node.js, MySQL',
      imageUrl: './images/employee.jpg',
      projectUrl: 'https://github.com/eric7string/employee-tracker'
    },
    {
      name: 'Inflation Parser',
      description: 'JS, HTML, CSS',
      imageUrl: './images/inflation.jpg',
      projectUrl: 'https://louismke.github.io/inflation-parser/'
    },
    {
      name: 'Mystery Project 1',
      description: 'TBD',
      imageUrl: './images/mystery1.jpg',
      projectUrl: 'https://www.github.com/eric7string'
    },
    {
      name: 'Mystery Project 2',
      description: 'TBD',
      imageUrl: './images/mystery2.jpg',
      projectUrl: 'https://www.github.com/eric7string'
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        paddingTop: window.innerWidth >= 979 ? '160px' : window.innerWidth < 575 ? '260px' : '0px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 20px',
          maxWidth: '1200px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>Portfolio</h1>
        
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: window.innerWidth < 768 ? 'center' : 'space-around',
            gap: '20px',
            marginTop: '20px',
            flexDirection: window.innerWidth < 575 ? 'column' : window.innerWidth < 768 ? 'column' : 'row',
          }}
        >
          {projects.map((project, index) => (
            <a
              href={project.projectUrl}
              key={index}
              style={{
                position: 'relative',
                width: window.innerWidth < 575 ? '90%' : window.innerWidth < 768 ? '90%' : '300px',
                height: window.innerWidth < 575 ? 'auto' : window.innerWidth < 768 ? 'auto' : '225px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.5s ease',
                  opacity: hoveredIndex === index ? 0.3 : 1,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}
              >
                <h3 style={{ color: 'white', margin: '5px 0' }}>{project.name}</h3>
                <p style={{ color: 'white', margin: '0' }}>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

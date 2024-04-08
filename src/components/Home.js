import React from 'react';
import Navigation from './Navigation'; // Ensure the path is correct

const homeStyle = {
  textAlign: 'center',
  padding: '50px 20px',
  background: '#f0f0f0', // A light grey background for a subtle contrast
};

const headerStyle = {
  fontSize: '2.5rem',
  color: '#282c34', // Keeping the main header dark for contrast
};

const textStyle = {
  fontSize: '1.2rem',
  color: '#666', // A softer color for the text for readability
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#4CAF50', // A vibrant color for the Call To Action (CTA) button
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Home = () => {
  return (
    <div>
      <Navigation />
      <div style={homeStyle}>
        <h1 style={headerStyle}>Welcome to My Digital World</h1>
        <p style={textStyle}>
          I'm Gokulan Vigneswaran, a Computer and Data Science enthusiast with a passion for technology, innovation, and continuous learning. Dive into my portfolio to discover projects that not only demonstrate my technical skills but also my journey towards making a significant impact in the tech community.
        </p>
        <button style={buttonStyle} onClick={() => window.location.href = '/projects'}>
          Explore My Projects
        </button>
      </div>
    </div>
  );
}

export default Home;

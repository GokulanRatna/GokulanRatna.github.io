import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  backgroundColor: '#282c34',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '40px',
};

const linkStyle = {
  color: '#61dafb',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
};

const Navigation = () => {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      <Link to="/skills" style={linkStyle}>Skills</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
};

export default Navigation;

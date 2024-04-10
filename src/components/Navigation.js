

import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css'; 

const Navigation = () => {
    return (
        <nav className="nav-container"> 
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
    );
};

export default Navigation;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navigation from './Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const navigate = useNavigate(); // Create navigate function object

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Animation occurs only once during scroll
    });
  }, []);

  const navigateToProjects = () => {
    navigate('/projects'); // Use React Router's navigate to go to projects
  };

  return (
    <div>
      <Navigation />
      <div style={{
        textAlign: 'center',
        padding: '50px 20px',
        background: '#f0f0f0',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#282c34',
          marginBottom: '20px',
        }} data-aos="fade-down">
          Welcome to My Digital World
        </h1>
        <div style={{
          width: '300px',
          height: '300px',
          overflow: 'hidden',
          margin: '0 auto',
          borderRadius: '55%'
        }}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/earth.gif`}
            alt="Spinning Earth"
            className="img-fluid"
            style={{
              width: 'auto',
              height: '100%',
              marginLeft: '0%'
            }}
            data-aos="zoom-in"
          />
        </div>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          marginTop: '20px',
        }} data-aos="fade-up">
          I'm Gokulan Vigneswaran, a Computer and Data Science enthusiast with a passion for technology, innovation, and continuous learning. Dive into my portfolio to discover projects that not only demonstrate my technical skills but also my journey towards making a significant impact in the tech community.
        </p>
        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }} onClick={navigateToProjects} data-aos="fade-up">
          Explore My Projects
        </button>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navigation />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="mb-4">About Me</h1>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/myphoto.jpeg`}
              alt="Gokulan Vigneswaran"
              className="img-fluid rounded-circle mb-4"
              style={{ maxWidth: '200px', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
              data-aos="fade-up"
            />
            <div data-aos="fade-right">
              <p>Hello, I'm Gokulan Vigneswaran, a recent graduate from Birmingham City University with a BSc (Hons) in Computer and Data Science, specializing in machine learning and deep learning.</p>
            </div>
            <div data-aos="fade-left">
              <p>My technical toolkit is diverse, encompassing advanced proficiency in Java and Python, alongside strong skills in JavaScript, PHP, HTML, and CSS.</p>
            </div>
            <div data-aos="fade-right">
              <p>Professionally, I've contributed to various sectors, including a significant role as a Production Supervisor at Do & Co Airline Catering and an IT Intern at ACCMA Accountants.</p>
            </div>
            <div data-aos="fade-left">
              <p>Outside of my professional life, my interests are broad and varied, including technology, physics, Brazilian Jiu-Jitsu, bodybuilding, Formula 1 motorsports, aerospace, and cars.</p>
            </div>
            <div data-aos="fade-up">
              <p>Through my portfolio, I aim to showcase my journey, the projects I've been part of, and the impact of my work. Connect with me on <a href="https://linkedin.com/in/GokulanVigneswaran" className="text-primary">LinkedIn</a> or check out my work on <a href="https://github.com/GokulanRatna?tab=repositories" className="text-primary">GitHub</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

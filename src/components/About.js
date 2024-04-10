import React from 'react';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const About = () => {
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
              style={{ maxWidth: '200px', height: 'auto' }} 
            />
            <p>Hello, I'm Gokulan Vigneswaran, a recent graduate from Birmingham City University with a BSc (Hons) in Computer and Data Science, where I specialised in machine learning and deep learning, crafting models for various analytical tasks. My passion lies in leveraging technology to solve real-world problems, and I have a proven track record of delivering high-quality, data-driven solutions.</p>

            <p>My technical toolkit is diverse, encompassing advanced proficiency in Java and Python, alongside strong skills in JavaScript, PHP, HTML, and CSS. I have extensive experience with SQL and NoSQL databases, as well as data visualisation tools such as R, Power BI, and Tableau. My interest in machine learning and deep learning is complemented by hands-on experience with TensorFlow, Keras, and scikit-learn, enabling me to apply these techniques to practical challenges.</p>

            <p>Professionally, I've contributed to various sectors, including a significant role as a Production Supervisor at Do & Co Airline Catering and an IT Intern at ACCMA Accountants. These roles have honed my abilities in project management, team leadership, and the practical application of my technical skills in a business context.</p>

            <p>Outside of my professional life, my interests are broad and varied, including technology, physics, Brazilian Jiu-Jitsu, bodybuilding, Formula 1 motorsports, aerospace, and cars. I also enjoy exploring books on philosophy, finance, geopolitics, and history to expand my knowledge and understanding of the world.</p>

            <p>I am a native English speaker with Tamil as my mother tongue, and I possess a basic understanding of Spanish, reflecting my multicultural background and ability to adapt to diverse environments.</p>

            <p>Through my portfolio, I aim to showcase my journey, the projects I've been part of, and the impact of my work. I'm excited to explore opportunities where I can contribute to impactful projects and drive growth. Connect with me on <a href="https://linkedin.com/in/GokulanVigneswaran" className="text-primary">LinkedIn</a> or check out my work on <a href="https://github.com/GokulanRatna?tab=repositories" className="text-primary">GitHub</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

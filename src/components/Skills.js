import React from 'react';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Skills = () => {
  return (
    <div>
      <Navigation />
      <div className="container mt-5">
        <h1 className="mb-4">My Skills</h1>
        <p>Throughout my academic and professional journey, I've developed a robust set of skills that enable me to contribute effectively to technology-driven projects. Here's a snapshot of my expertise:</p>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header">
                <h2>Technical Skills</h2>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Programming & Development: Java, Python, JavaScript, PHP, HTML, CSS</li>
                <li className="list-group-item">Database Management: SQL, NoSQL</li>
                <li className="list-group-item">Data Visualisation: R, Power BI, Tableau</li>
                <li className="list-group-item">Machine Learning & Deep Learning: TensorFlow, Keras, Scikit-learn</li>
                <li className="list-group-item">Tools & Platforms: Docker, Jupyter Notebook, VS Code</li>
                <li className="list-group-item">Operating Systems: Windows, macOS, Linux</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header">
                <h2>Soft Skills</h2>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Effective Communication: Capable of conveying ideas clearly.</li>
                <li className="list-group-item">Teamwork & Collaboration: Experienced in working within and leading teams.</li>
                <li className="list-group-item">Adaptability: Quick to adjust to new challenges and environments.</li>
                <li className="list-group-item">Problem-Solving: Proficient in identifying issues and implementing solutions.</li>
                <li className="list-group-item">Project Management: Adept at overseeing project lifecycles.</li>
              </ul>
            </div>
          </div>
        </div>

        <p>These skills, combined with my passion for technology and continuous learning, drive my ambition to contribute to meaningful and impactful projects.</p>
      </div>
    </div>
  );
};

export default Skills;

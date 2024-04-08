import React from 'react';
import Navigation from './Navigation';

const Skills = () => {
  return (
    <div>
      <Navigation />
      <div style={{ padding: '0 20px' }}>
        <h1>My Skills</h1>
        <p>Throughout my academic and professional journey, I've developed a robust set of skills that enable me to contribute effectively to technology-driven projects. Here's a snapshot of my expertise:</p>
        
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming & Development:</strong> Java, Python (advanced skills for automation, data analysis, and developing tools), JavaScript, PHP, HTML, CSS</li>
          <li><strong>Database Management:</strong> SQL (MySQL, PostgreSQL, SQLite), NoSQL (MongoDB)</li>
          <li><strong>Data Visualisation:</strong> R, Power BI, Tableau, Python (Seaborn, Matplotlib, NumPy, Pandas)</li>
          <li><strong>Machine Learning & Deep Learning:</strong> TensorFlow, Keras, Scikit-learn</li>
          <li><strong>Tools & Platforms:</strong> Docker, Conda, Jupyter Notebook, Colab, Redis, Eclipse, VS Code, VirtualBox, Parallels (some experience)</li>
          <li><strong>Operating Systems:</strong> Windows, macOS, Linux (Ubuntu)</li>
        </ul>

        <h2>Soft Skills</h2>
        <ul>
          <li><strong>Effective Communication:</strong> Capable of conveying ideas and technical concepts clearly to diverse audiences.</li>
          <li><strong>Teamwork & Collaboration:</strong> Experienced in working within and leading teams to achieve project goals efficiently.</li>
          <li><strong>Adaptability:</strong> Quick to adjust to new challenges and environments, leveraging my skills to thrive under change.</li>
          <li><strong>Problem-Solving:</strong> Proficient in identifying issues and implementing innovative solutions.</li>
          <li><strong>Project Management:</strong> Adept at overseeing project lifecycles, ensuring timely delivery while maintaining high standards.</li>
        </ul>

        <p>These skills, combined with my passion for technology and continuous learning, drive my ambition to contribute to meaningful and impactful projects.</p>
      </div>
    </div>
  );
};

export default Skills;

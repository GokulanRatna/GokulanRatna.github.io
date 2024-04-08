import React from 'react';
import Navigation from './Navigation';

const Projects = () => {
  return (
    <div>
      <Navigation />
      <div style={{ padding: '0 20px' }}>
        <h1>My Projects</h1>
        <p>I've been fortunate to work on a range of projects that allowed me to apply my knowledge and skills in real-world scenarios. Here are some highlights:</p>
        
        <div>
          <h2>Snake Game in Python</h2>
          <p>This project is a Python-based implementation of the classic Snake Game. It was developed using the Pygame library, demonstrating my proficiency in Python and my ability to create engaging applications. The game features a score counter and increasing difficulty levels as the snake grows longer.</p>
          <p><a href="https://github.com/GokulanRatna/Snake-Game">View the code on GitHub</a></p>
        </div>

        <div>
          <h2>Machine Learning Pipeline for House Price Prediction</h2>
          <p>Created a full machine learning pipeline within a VirtualBox Ubuntu environment using Docker containers. This end-to-end project utilised Jupyter Notebooks for model development and FastAPI for deployment, showcasing my skills in developing and deploying machine learning models.</p>
          <p><a href="https://github.com/GokulanRatna/Research_Projects/blob/main/Final_Perth_House_Price_Prediction_ML_Project_with_hyper_parameter_tuning.ipynb">View the code on GitHub</a></p>
        </div>
        
        <div>
          <h2>Comparative Analysis of RNNs for Network Intrusion Detection</h2>
          <p>This project involved evaluating various neural network architectures to develop an enhanced adversarial data generation model, using technologies like Python, TensorFlow, Keras, and cGAN. It highlighted my ability to apply deep learning techniques to cybersecurity.</p>
          <p><a href="https://github.com/GokulanRatna/Research_Projects/blob/main/NIDS_FINAL.ipynb">View the code on GitHub</a></p>
        </div>

        <div>
          <h2>Tableau Dashboard Development for ACCMA Accountants</h2>
          <p>Developed a comprehensive Tableau dashboard to visualize key business metrics, facilitating data-driven decision-making and insights. This project underscored my data visualisation skills and the ability to translate complex datasets into actionable insights.</p>
        </div>

      </div>
    </div>
  );
};

export default Projects;

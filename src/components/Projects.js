import React from 'react';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Projects = () => {
  return (
    <div>
      <Navigation />
      <div className="container my-5">
        <h1 className="mb-4">My Projects</h1>
        
        <div className="row">
          {/* Snake Game Project */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src={`${process.env.PUBLIC_URL}/assets/images/snakegame.jpeg`} className="card-img-top" alt="Snake Game" />
              <div className="card-body">
                <h5 className="card-title">Snake Game in Python</h5>
                <p className="card-text">A Python-based implementation of the classic Snake Game, developed with Pygame.</p>
                <a href="https://github.com/GokulanRatna/Snake-Game" className="btn btn-primary">View on GitHub</a>
              </div>
            </div>
          </div>

          {/* Machine Learning Pipeline Project */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src={`${process.env.PUBLIC_URL}/assets/images/machinelearning.jpeg`} className="card-img-top" alt="House Price Prediction" />
              <div className="card-body">
                <h5 className="card-title">Machine Learning Pipeline for House Price Prediction</h5>
                <p className="card-text">An end-to-end machine learning pipeline using Docker containers within a VirtualBox Ubuntu environment.</p>
                <a href="https://github.com/GokulanRatna/Research_Projects/blob/main/Final_Perth_House_Price_Prediction_ML_Project_with_hyper_parameter_tuning.ipynb" className="btn btn-primary">View on GitHub</a>
              </div>
            </div>
          </div>

          {/* Network Intrusion Detection Project */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
            <img src={`${process.env.PUBLIC_URL}/assets/images/NIDS_Image.jpeg`} className="card-img-top" alt="Network Intrusion Detection" />
              <div className="card-body">
                <h5 className="card-title">Comparative Analysis of RNNs for Network Intrusion Detection</h5>
                <p className="card-text">Evaluating neural network architectures to develop an enhanced adversarial data generation model.</p>
                <a href="https://github.com/GokulanRatna/Research_Projects/blob/main/NIDS_FINAL.ipynb" className="btn btn-primary">View on GitHub</a>
              </div>
            </div>
          </div>

          {/* Tableau Dashboard Project */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src={`${process.env.PUBLIC_URL}/assets/images/Dashboard.jpeg`} className="card-img-top" alt="Tableau Dashboard" />
              <div className="card-body">
                <h5 className="card-title">Tableau Dashboard Development for ACCMA Accountants</h5>
                <p className="card-text">A comprehensive Tableau dashboard visualizing key business metrics for data-driven decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

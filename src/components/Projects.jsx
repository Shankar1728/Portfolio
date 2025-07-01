import React from 'react';
import './Projects.css'; 

function Projects() {
  return (
    <div className="projects-container">
      <div className="project-card">
        <h2 className="project-title">Brain Tumor Detection</h2>
        <p className="project-description">
          Developed a deep learning model using Convolutional Neural Networks (CNN) to detect brain tumors from MRI images.
          Trained on medical imaging datasets with high accuracy and performance metrics.
        </p>
        <a href="https://github.com/Shankar1728/BrainTumor_Detection" target="_blank" className="project-link">
          View Project
        </a>
      </div>
      <div className="project-card">
        <h2 className="project-title">Portfolio Website</h2>
        <p className="project-description">
          A simple and elegant portfolio website developed with react, featuring my skills, education and projects in a clean
          and responsive layout.
        </p>
        <a href="https://github.com/Shankar1728/BrainTumor_Detection" target="_blank" className="project-link">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Projects;

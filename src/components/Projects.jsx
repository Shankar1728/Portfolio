import React from 'react';
import './Projects.css'; 

function Projects() {
  return (
    <div className="projects-container">
      <div className="project-card">
        <h2 className="project-title">Brain Tumor Detection</h2>
        <div className="project-description">
          <p >
            Designed and implemented a CNN-based deep learning model for brain tumor detection from MRI images.
            Trained on curated medical imaging datasets, the model demonstrated high accuracy and robust evaluation performance.
          </p>
        </div>
        <a href="https://github.com/Shankar1728/BrainTumor_Detection" target="_blank" className="project-link">
          Github Repository
        </a>
      </div>
      <div className="project-card">
        <h2 className="project-title">Portfolio Website</h2>
        <p className="project-description">
          A simple and elegant portfolio website developed with react, featuring my skills, education and projects in a clean
          and responsive layout.
        </p>
        <a href="https://github.com/Shankar1728/BrainTumor_Detection" target="_blank" className="project-link"/>
          Github Repository
        <div className="project-description">
          <p>
            A simple and elegant portfolio website developed with react, featuring my skills, education ,
            projects and my contact details in a clean and responsive layout. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;

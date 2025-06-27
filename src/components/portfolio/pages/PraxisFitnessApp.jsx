import React from 'react';
import { useNavigate } from 'react-router-dom';
import './project-detail.css';
// Keep the same placeholder image import path for now
import PraxisIcon from "../../../assets/FitnessIcon.svg"

const PraxisFitnessApp = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <section className="project-detail container section">
      <button onClick={handleBackClick} className="back-button">
        ← Back to Home
      </button>

      <h2 className="section__title">Praxis Fitness App</h2>

      <div className="project-detail__image-wrapper">
        <img src={PraxisIcon} alt="Project Title Here" className="project-detail__img" />
      </div>

      <div className="project-detail__boxes">
        <div className="project-detail__box">
          <h3>Project Description</h3>
          <p>
Praxis Impact is a user-centered design project focused on building a fitness data visualization platform that presents longitudinal performance metrics from wearables in a clear and engaging way. The team shifted from a full application build to prioritizing UX design, branding, and a comprehensive metrics document after identifying significant barriers related to user data privacy and platform compatibility. The final deliverables include a detailed Figma-based user interface prototype, a brand identity (name and logo), and an extensively researched metrics document to guide future development.

          </p>
        </div>

        <div className="project-detail__box">
          <h3>Tools Used</h3>
          <ul>
            <li>Figma (for UI/UX design)</li>
            <li>Google Docs (for research documentation)</li>
            <li>Surveys (for user feedback on branding and accessibility)</li>
            <li>Collaborative feedback with stakeholders (especially Praxis team lead TJ)</li>

          </ul>
        </div>

        <div className="project-detail__box">
          <h3>What I Learned</h3>
          <ul>
            <li>How to translate broad project goals into actionable deliverables under time and resource constraints.</li>
            <li>The importance of UX testing and feedback in refining user interface designs.</li>
            <li>How to navigate and adapt when facing legal, technical, and logistical challenges, particularly around user data privacy.</li>
            <li>The value of collaborative branding processes, including surveys and iteration.</li>
            <li>The need for an MVP (Minimum Viable Product) mindset and clear scope definition when dealing with complex, data-heavy applications.</li>

          </ul>
        </div>
      </div>

      <a href="https://github.com/yourusername/project-repo" className="btn" target="_blank" rel="noopener noreferrer">
        View GitHub Repository
      </a>
    </section>
  );
};

export default PraxisFitnessApp;

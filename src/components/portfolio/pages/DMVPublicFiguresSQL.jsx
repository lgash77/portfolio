import React from 'react';
import { useNavigate } from 'react-router-dom';
import './project-detail.css';
// Keep the same placeholder image import path for now
import DMVIcon from '../../../assets/Figures.svg';

const DMVPublicFiguresSQL = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <section className="project-detail container section">
      <button onClick={handleBackClick} className="back-button">
        ← Back to Home
      </button>

      <h2 className="section__title">DMV Public Figures</h2>

      <div className="project-detail__image-wrapper">
        <img src={DMVIcon} alt="Project Title Here" className="project-detail__img" />
      </div>

      <div className="project-detail__boxes">
        <div className="project-detail__box">
          <h3>Project Description</h3>
          <p>
              In this project, I worked collaboratively with a team to design and implement a comprehensive relational database system 
              focused on DMV public figures. We captured detailed information about demographics, career histories, social media presence, 
              and educational backgrounds. Together, we used advanced SQL techniques including complex joins, aggregations, and view creation 
              to build a dynamic and scalable data model that integrates diverse datasets into actionable insights.<br />
                        
            <br />
              We developed multiple SQL views to simplify data retrieval and enable efficient analysis of occupation trends, social media 
              influence, and demographic patterns within the DMV region. Our cooperative approach ensured data integrity, optimized query 
              performance, and delivered a robust schema capable of supporting complex analytical queries with precision.<br />

              <br />
              Throughout the project, we engaged in continuous peer review and collaborative problem-solving to refine our design, improve code 
              quality, and follow best practices. This resulted in a high-quality database solution suited for deep data exploration.




          </p>
        </div>

        <div className="project-detail__box">
          <h3>Tools Used</h3>
          <ul>
            <li>MySQL (version 8.0.30) for database design, creation, and advanced querying</li>
            <li>MySQL Workbench for ERD visualization, schema modeling, and query management</li>
            <li>SQL Views and aggregations to create modular, reusable components for data analysis</li>
            <li>Relational database design concepts such as normalization, indexing, and foreign key constraints</li>
            <li>Team collaboration techniques including pair programming, code reviews, and group discussions</li>
          </ul>
        </div>

        <div className="project-detail__box">
          <h3>What I Learned</h3>
          <ul>
            <li>Strengthened skills in writing complex SQL queries including multi-table joins, groupings, and view creation</li>
            <li>Gained experience designing normalized database schemas that ensure data integrity and optimize performance</li>
            <li>Learned to integrate multiple related datasets into coherent views for insightful analysis</li>
            <li>Developed strategies for query optimization and handling real-world data inconsistencies</li>
            <li>Improved collaboration skills through teamwork, peer review, and shared problem-solving</li>
            <li>Applied entity-relationship diagrams to design and communicate database structure effectively</li>
            <li>Experienced managing project workflow and coordinating tasks within a team environment</li>
          </ul>
        </div>
      </div>

      <a href="https://github.com/yourusername/project-repo" className="btn" target="_blank" rel="noopener noreferrer">
        View GitHub Repository
      </a>
    </section>
  );
};

export default DMVPublicFiguresSQL;

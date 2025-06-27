import React from 'react';
import { useNavigate } from 'react-router-dom';
import './project-detail.css';
import PremImage from '../../../assets/prem-league-snapshot.svg';

const PremierLeagueProject = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <section className="project-detail container section">
      <button onClick={handleBackClick} className="back-button">
        ← Back to Home
      </button>

      <h2 className="section__title">Premier League Data Insights</h2>

      <div className="project-detail__image-wrapper">
        <img src={PremImage} alt="Premier League Project" className="project-detail__img" />
      </div>

      <div className="project-detail__boxes">
        <div className="project-detail__box">
          <h3>Project Description</h3>
          <p>
            This project explores Premier League data for the 2020–2021 season through the lens of both team-level and individual player performance.
            Using a combination of web scraping, data engineering, SQL database design, and advanced data visualization, this analysis delivers
            actionable insights into efficiency, contribution, and overall effectiveness.
          </p>
        </div>

        <div className="project-detail__box">
          <h3>Tools Used</h3>
          <ul>
            <li>Python (Pandas, NumPy, Requests, BeautifulSoup)</li>
            <li>SQLite3 for database management</li>
            <li>Jupyter Notebook for exploration</li>
            <li>Matplotlib & Seaborn for visualizations</li>
            <li>SQL queries for in-depth analysis</li>
          </ul>
        </div>

        <div className="project-detail__box">
          <h3>What I Learned</h3>
          <p>
            This project strengthened my skills in web scraping, SQL database design, and statistical analysis using normalized metrics.
            I learned how to build an interactive data pipeline, compare player efficiencies fairly, and communicate insights through clean visuals.
          </p>
        </div>
      </div>

      <a href="https://github.com/yourusername/prem-league-sql-analysis" className="btn" target="_blank" rel="noopener noreferrer">
        View GitHub Repository
      </a>
    </section>
  );
};

export default PremierLeagueProject;

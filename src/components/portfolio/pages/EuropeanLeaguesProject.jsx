import React from 'react';
import { useNavigate } from 'react-router-dom';
import './project-detail.css';
// Keep the same placeholder image import path for now
import Top5SoccerIcon from '../../../assets/uefa.svg';

const EuropeanLeaguesProject = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <section className="project-detail container section">
      <button onClick={handleBackClick} className="back-button">
        ← Back to Home
      </button>

      <h2 className="section__title">Multi-Season Analysis of Football Excellence</h2>

      <div className="project-detail__image-wrapper">
        <img src={Top5SoccerIcon} alt="Project Title Here" className="project-detail__img" />
      </div>

      <div className="project-detail__boxes">
        <div className="project-detail__box">
          <h3>Project Description</h3>
          <p>
              In this data-driven project, I developed a dynamic pipeline to extract, clean, and analyze elite soccer player 
              performance data from the FotMob API across Europe's top five leagues: Premier League, La Liga, Serie A, Bundesliga, 
              and Ligue 1, spanning multiple seasons (2016–2025). <br />

              <br />
              Using user-selected metrics such as goals, assists, xG, dribbles, and shots on target, we programmatically retrieved 
              and stored raw player statistics in CSV format. This pipeline supported custom filters, seasonal comparisons, and 
              league-based queries. Additional scripts were designed to enrich the data with contextual player information (e.g., 
              age, nationality, position) using individual player IDs. <br />


              <br />
              After aggregating the data, we utilized PySpark for large-scale processing, joining and ranking players by season and 
              overall performance. Top 20 performers were isolated based on rank, goals, and assists. These insights were then visualized 
              using interactive scatter plots created in Plotly, where league-specific color encoding helped differentiate talent distribution. <br />


              <br />
              To further explore player similarity, we introduced clustering techniques like K-Means and DBSCAN in the Jupyter notebook, 
              allowing us to identify standout players and clusters of similar profiles based on their stat combinations.
          </p>
        </div>

        <div className="project-detail__box">
          <h3>Tools Used</h3>
          <ul>
            <li>Python: Core language for scripting and data handling</li>
            <li>Pandas: For data transformation and CSV generation</li>
            <li>Requests: To interface with the FotMob public API</li>
            <li>PySpark: For distributed data processing and ranking logic</li>
            <li>Plotly & Matplotlib: For static and interactive visualizations</li>
            <li>Scikit-learn: Implemented clustering algorithms (K-Means, DBSCAN)</li>
            <li>Jupyter Notebook: For final analysis, experimentation, and documentation</li>
            <li>FotMob API (Unofficial): Source of all player stats and metadata</li>
            <li>CSV Files: Used for persistent data storage and cross-stage processing</li>
          </ul>
        </div>

        <div className="project-detail__box">
          <h3>What I Learned</h3>
          <ul>
            <li>API Design & Integration: Built a flexible pipeline for interacting with an undocumented API, 
              including dynamic metric selection, season filtering, and player-level granularity.</li>

            <li>PySpark Workflow: Gained hands-on experience with large-scale data manipulation using Spark's 
              DataFrame APIs, window functions, and multi-stage joins.</li>

            <li>Statistical Ranking: Learned how to rank players both seasonally and across multiple years, 
              handling complex joins across team, player, and metric dimensions.</li>

            <li>Clustering Models: Applied and compared K-Means vs. DBSCAN to uncover natural groupings of 
              players based on performance metrics.</li>

            <li>Interactive Visualization: Used Plotly to deliver intuitive and meaningful scatterplots that 
              revealed relationships between assists and goals.</li>
            
            <li>Collaborative Analysis Design: Developed user-friendly scripts that allowed flexible participation 
              and input, which is essential for reproducibility and scalability.</li>
            
            <li>Multi-League Complexity: Navigated the challenge of standardizing across different league structures, 
              stat availability, and player data inconsistencies.</li>
            
          </ul>
        </div>
      </div>

      <a href="https://github.com/yourusername/project-repo" className="btn" target="_blank" rel="noopener noreferrer">
        View GitHub Repository
      </a>
    </section>
  );
};

export default EuropeanLeaguesProject;

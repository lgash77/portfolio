import React from 'react';
import { useNavigate } from 'react-router-dom';
import './project-detail.css';
// Keep the same placeholder image import path for now
import JobsIcon from '../../../assets/JobHunt.svg';

const JobGeospatialTrends = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <section className="project-detail container section">
      <button onClick={handleBackClick} className="back-button">
        ← Back to Home
      </button>

      <h2 className="section__title">Geospatial Analysis and Trends of the Job Market</h2>

      <div className="project-detail__image-wrapper">
        <img src={JobsIcon} alt="Project Title Here" className="project-detail__img" />
      </div>

      <div className="project-detail__boxes">
        <div className="project-detail__box">
          <h3>Project Description</h3>
          <p>
            This project was a collaborative effort between myself and my peer. We worked closely together to analyze current job market trends 
            using geospatial and textual data. Instead of dividing the work into isolated tasks, we adopted a mutual, cooperative approach. We 
            brainstormed, problem-solved, and executed steps side-by-side throughout the entire process. This included jointly sourcing datasets, 
            cleaning and preprocessing large volumes of messy LinkedIn job posting data, and collaboratively designing and tuning machine learning 
            models such as KMeans clustering.<br />

            <br />Our teamwork allowed us to combine diverse perspectives and skills, which was crucial for handling the complexities of data curation, 
            natural language processing, and geospatial visualization. The iterative nature of our collaboration ensured that all insights were thoroughly 
            vetted and that both of us contributed equally to every phase, from data exploration to visualization and interpretation of results.<br />

            <br />This joint effort not only improved the quality and accuracy of our analysis but also enriched our understanding of the job market dynamics 
            through shared learning and consistent dialogue.



          </p>
        </div>

        <div className="project-detail__box">
          <h3>Tools Used</h3>
          <ul>
            <li>Python — Core programming language used for data cleaning, manipulation, and analysis.</li>
            <li>Pandas — Data wrangling and preprocessing, including handling missing values and merging datasets.</li>
            <li>Scikit-learn — Machine learning library used for clustering (KMeans), classification models (Logistic Regression, LinearSVC), and model evaluation.</li>
            <li>Natural Language Processing (NLP) techniques — TF-IDF vectorization for text feature extraction from job titles and skill descriptions.</li>
            <li>Regex — Pattern matching and text cleaning during preprocessing.</li>
            <li>Jupyter Notebooks — Development environment for iterative data exploration and visualization.</li>
            <li>Matplotlib and Seaborn — Data visualization libraries for charts and geographic plots.</li>
            <li>Geospatial Libraries (e.g., GeoPandas, Folium) — Mapping and state-level geographic analysis.</li>
            <li>Web Scraping (JavaScript) — Used for initial sentiment data collection from Reddit and Twitter.</li>
            <li>GridSearchCV — Hyperparameter tuning for improving model performance.</li>
          </ul>
        </div>

        <div className="project-detail__box">
          <h3>What I Learned</h3>
          <ul>
            <li>How to effectively handle and preprocess large, real-world datasets with significant inconsistencies and missing data, applying techniques such as multi-level sampling and text cleaning.</li>
            <li>The importance of feature engineering and weighting (e.g., assigning higher weights to job titles vs. skills) to improve clustering accuracy when categorizing job postings.</li>
            <li>Practical experience implementing unsupervised learning techniques (KMeans clustering) to uncover hidden groupings within job market data, achieving over 90% cluster accuracy through manual validation.</li>
            <li>Challenges and limitations of building classification models for predicting income from text data, especially in the presence of ambiguous skill terms and overlapping occupational categories.</li>
            <li>Insights into geospatial data analysis, enabling visualization of job trends and skill demands by state, which provided valuable regional perspectives often overlooked in national-level analyses.</li>
            <li>The potential and pitfalls of using social media sentiment analysis to gauge public opinion on employment issues, highlighting the influence of data bias and the need for careful data source selection.</li>
            <li>The critical role of cross-disciplinary skills including data science, natural language processing, and geospatial analysis to solve complex, real-world problems.</li>
            <li>The importance of iterative experimentation and parameter tuning in machine learning workflows to optimize model performance under hardware and time constraints.</li>
          </ul>
        </div>
      </div>

      <a href="https://github.com/yourusername/project-repo" className="btn" target="_blank" rel="noopener noreferrer">
        View GitHub Repository
      </a>
    </section>
  );
};

export default JobGeospatialTrends;

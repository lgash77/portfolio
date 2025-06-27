import React from 'react';
import { useNavigate } from 'react-router-dom';
import './project-detail.css';
import StrokeIcon from "../../../assets/StrokeIcon.svg";
// import PraxisIcon from "../../assets/FitnessIcon.svg"


const StrokeLogisticsReport = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <section className="project-detail container section">
      <button onClick={handleBackClick} className="back-button">
        ← Back to Home
      </button>

      <h2 className="section__title">Stroke Logistics Report</h2>

      <div className="project-detail__image-wrapper">
        <img src={StrokeIcon} alt="Project Title Here" className="project-detail__img" />
      </div>

      <div className="project-detail__boxes">
        <div className="project-detail__box">
          <h3>Project Description</h3>
          <p>
            This project focused on developing a logistic regression model to predict the likelihood of stroke occurrence using the 
            "healthcare-dataset-stroke-data.csv" dataset from Kaggle. The dataset contained 5110 patient records with features such 
            as age, marital status, gender, and medical history. The main goal was to explore relationships between stroke occurrences 
            and variables like age, heart disease, and marital status. The model was trained, evaluated, and then broken down further by 
            gender, age group, and marital status to assess prediction accuracy across subpopulations.
          </p>
        </div>

        <div className="project-detail__box">
          <h3>Tools Used</h3>
          <p>Python Libraries</p>
          <ul>
            <li>Pandas (data wrangling)</li>
            <li>Numpy (numerical operations)</li>
            <li>Matplotlib and Seaborn (visualizations, including heatmaps of confusion matrices)</li>
            <li>Scikit-learn (logistic regression, classification report, and model evaluation)</li>
          </ul>
          <p>Jupyter Notebook (for development and analysis)</p>
        </div>

        <div className="project-detail__box">
          <h3>What I Learned</h3>
          <ul>
            <li>How to prepare real-world health data by cleaning null values, converting categorical variables, and selecting relevant features.</li>
            <li>Implemented logistic regression and evaluated its performance using metrics like precision, recall, and F1-score.</li>
            <li>Achieved an overall model accuracy of 94.9%, with a perfect recall of 1.00, showing the model’s effectiveness at identifying true stroke cases.</li>
            <li>Built and analyzed confusion matrices across subgroups (male/female, younger/older, married/unmarried) to evaluate how prediction performance changes by demographic.</li>
            <li>Understood the importance of minimizing false positives and false negatives in medical predictions, especially when dealing with sensitive conditions like strokes.</li>
            <li>Gained hands-on experience in model fairness by analyzing performance across different population segments.</li>
          </ul>
        </div>
      </div>

      <a href="https://github.com/yourusername/project-repo" className="btn" target="_blank" rel="noopener noreferrer">
        View GitHub Repository
      </a>
    </section>
  );
};

export default StrokeLogisticsReport;

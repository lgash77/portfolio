import React from 'react';
import { useNavigate } from 'react-router-dom';
import './project-detail.css';
// Keep the same placeholder image import path for now
import DegreeIcon from '../../../assets/money.svg';

const DegreesPaybackAnalysis = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <section className="project-detail container section">
      <button onClick={handleBackClick} className="back-button">
        ← Back to Home
      </button>

      <h2 className="section__title">Analysis on the Degrees that Payback</h2>

      <div className="project-detail__image-wrapper">
        <img src={DegreeIcon} alt="Project Title Here" className="project-detail__img" />
      </div>

      <div className="project-detail__boxes">
        <div className="project-detail__box">
          <h3>Project Description</h3>
          <p>
            In this collaborative analysis, our team of three explored how school type and region impact the starting salaries of 
            college graduates. Motivated by our own academic futures, we set out to identify whether choosing a particular kind of 
            college such as engineering, state, liberal arts, party, or Ivy League could significantly affect post-graduation earning potential.<br />

            <br />
            We gathered salary data segmented by school type and region from the Wall Street Journal and framed our investigation around the 
            question: Does the type of college a student attends influence their starting salary?<br />


            <br />
            To answer this, we formulated hypotheses and applied statistical testing. We used Shapiro-Wilk tests to assess normality and Wilcoxon 
            rank-sum tests to evaluate salary differences between groups. Our analysis revealed statistically significant disparities in starting 
            median salaries. For example, engineering schools showed a much higher salary range compared to state schools, with p-values as low 
            as 0.0000000005946, reinforcing the presence of a meaningful relationship.<br />



            <br />
            Visual tools such as boxplots and QQnorm plots helped us illustrate the salary distributions and validate assumptions. We ultimately 
            rejected the null hypothesis, concluding that both school type and region are influential factors that merit serious consideration 
            when choosing a university.

 


          </p>
        </div>

        <div className="project-detail__box">
          <h3>Tools Used</h3>
          <ul>
            <li>R for statistical testing (Wilcoxon, Shapiro-Wilk)</li>
            <li>Excel for initial data cleaning and formatting</li>
            <li>PowerPoint/Google Slides for presenting visualizations and insights</li>
            <li>Wall Street Journal datasets on college salaries by type and region</li>
          </ul>
        </div>

        <div className="project-detail__box">
          <h3>What I Learned</h3>
          <p>
            Working as a team, I strengthened my skills in collaborative data analysis and hypothesis testing. I gained hands-on experience 
            interpreting p-values and selecting appropriate non-parametric tests for non-normal data. This project deepened my understanding 
            of how to validate assumptions and draw evidence-based conclusions. Most importantly, I learned how to use data to inform real-world 
            decisions about education and career planning.
          </p>
        </div>
      </div>

      <a href="https://github.com/yourusername/project-repo" className="btn" target="_blank" rel="noopener noreferrer">
        View GitHub Repository
      </a>
    </section>
  );
};

export default DegreesPaybackAnalysis;

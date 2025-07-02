import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-lg.png";
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                {/* Image */}
                <img src={Image} alt="Leoul avatar" className="about__img" />

                {/* Content Data Column */}
                <div className="about__data grid">
                    

                    
                    {/* Description */}
                    <div className="about__info">
                        <p className="about__description">
                            I'm a results-driven data professional with a strong foundation in Python, SQL, and data architecture, 
                            currently pursuing a Master’s in Data Analytics. I have hands-on experience in data cleaning, transformation, 
                            and exploratory analysis, with a proven ability to develop dashboards and visualizations using tools 
                            like Tableau, Power BI, and Excel. Skilled in designing and querying relational databases (MySQL, PostgreSQL), 
                            I also apply statistical and machine learning techniques to uncover insights and support data-driven 
                            decisions. My approach blends analytical rigor with collaborative problem-solving, making me well-suited 
                            for roles in data analysis, data science, and database development.

                        </p>
                    </div>

                    {/* Skill Header */}
                    <h3 className="skills__heading">
                        💡 Hover over each skill group to view technologies and experience
                    </h3>

                    {/* Skill Groups */}
                    <div className="about__skills grid-centered">
                        <div className="skill-group skill-data-ai">
                            <span className="skill-group__title">Data & AI</span>
                            <div className="skill-group__tooltip">
                                <p>Python – 6 Years</p>
                                <p>PySpark – 3 Years</p>
                                <p>TensorFlow – 2 Years</p>
                                <p>Scikit-learn – 3 Years</p>
                            </div>
                        </div>

                        <div className="skill-group skill-analytics">
                            <span className="skill-group__title">Analytics & Viz</span>
                            <div className="skill-group__tooltip">
                                <p>Excel – 8 Years</p>
                                <p>Tableau – 2 Years</p>
                                <p>Power BI – 1 Year</p>
                                <p>IBM Cognos – 1 Year</p>
                            </div>
                        </div>

                        <div className="skill-group skill-backend">
                            <span className="skill-group__title">Backend & Query</span>
                            <div className="skill-group__tooltip">
                                <p>SQL – 4 Years</p>
                                <p>PostgreSQL – 3 Years</p>
                                <p>MySQL – 3 Years</p>
                                <p>Flask – 1 Year</p>
                            </div>
                        </div>

                        <div className="skill-group skill-frontend">
                            <span className="skill-group__title">Frontend & UI</span>
                            <div className="skill-group__tooltip">
                                <p>HTML – 3 Years</p>
                                <p>JavaScript – 2 Years</p>
                                <p>Figma – 2 Years</p>
                                <p>React (including JSX) – 1.5 Years</p>
                                <p>Adobe Suite – 1 Year</p>
                            </div>
                        </div>

                        <div className="skill-group skill-systems">
                            <span className="skill-group__title">Systems</span>
                            <div className="skill-group__tooltip">
                                <p>Troubleshooting – 3 Years</p>
                                <p>WordPress – 1 Year</p>
                                <p>Windows</p>
                                <p>MacOS</p>
                                <p>Linux</p>
                                <p>Git</p>
                            </div>
                        </div>
                    </div>

                    {/* Resume Button */}
                    <div className="about__resume-button">
                        <a href="/LGFiles\Resume.pdf" download className="btn">
                            📄 Download Resume
                        </a>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
};


export default About;

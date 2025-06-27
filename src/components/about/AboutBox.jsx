import React from 'react';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-screen-desktop"></i>

                <div>
                    <h3 className="about title">+10,000</h3>
                    <span className="about_subtitle">Lines of Code Debugged</span>
                </div>
            </div>



            <div className="about__box">
                <i className="about__icon icon-graph"></i>

                <div>
                    <h3 className="about title">17</h3>
                    <span className="about_subtitle">Dashboards Built</span>
                </div>
            </div>



            <div className="about__box">
                <i className="about__icon icon-energy"></i>

                <div>
                    <h3 className="about title">25+</h3>
                    <span className="about_subtitle">Technologies Mastered</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>

                <div>
                    <h3 className="about title">Countless</h3>
                    <span className="about_subtitle">Explained Tech to Humans</span>
                </div>
            </div>


        </div>

    );
};

export default AboutBox;
import React from 'react';
import "./resume.css";
import Data from './Data';
import Card from './Card';

function Resume() {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Resume</h2>

            <div className="resume__container grid">
                {/* Education Timeline */}
                <div className="timeline grid">
                    <h3 className="timeline__header">Education</h3>
                    {Data.map((val, id) => {
                        if (val.category === "education") {
                            return (
                                <Card
                                    key={id}
                                    icon={val.icon}
                                    title={val.title}
                                    year={val.year}
                                    desc={val.desc}
                                />
                            );
                        }
                        return null;
                    })}
                </div>

                {/* Experience Timeline */}
                <div className="timeline grid">
                    <h3 className="timeline__header">Experience</h3>
                    {Data.map((val, index) => {
                        if (val.category === "experience") {
                            return (
                                <Card
                                    key={index}
                                    icon={val.icon}
                                    title={val.title}
                                    year={val.year}
                                    desc={val.desc}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    );
}

export default Resume;

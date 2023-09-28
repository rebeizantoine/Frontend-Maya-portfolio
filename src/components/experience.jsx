import React from 'react';
import '../App.css';

const Experience = () => {
    return (

        <div className="experience" id="experience">

            <h1>EXPERIENCE</h1>

            <div className="experiences-container">
                <div className="experience-details">
                    <p className="experience-date">Nov 2022-June 2023</p>
                    <p className="experience-description">Codi - Tech <br />Full Stack Web Developer Intern</p>
                </div>
                <div className="experience-details">
                    <p className="experience-date">April 2022 -June 2022</p>
                    <p className="experience-description">Scoope of design <br />Data Analyst</p>
                </div>
                <div className="experience-details">
                    <p className="experience-date">Sep 2021-June 2022</p>
                    <p className="experience-description">LAS school <br />Mathematics Teacher</p>
                </div>
            </div>
        </div>
    );
}

export default Experience
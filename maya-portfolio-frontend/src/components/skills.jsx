import React, { useState, useEffect } from 'react';
import '../homepage.css';

const Skills = () => {

    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/skills`);
                const data = await response.json();
                if (data.data.length > 0) {
                    setSkillsData(data.data);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);


    return (
        <div className="skills" id="skills">
            <h1>SKILLS</h1>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div className="skill" key={skill._id}>
                        <img className="skill-icon" src={skill.image} alt={skill.name} />
                        <span className="alt-text-skill">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills; 
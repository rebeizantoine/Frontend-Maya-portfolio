import React, { useState, useEffect } from 'react';
import '../App.css';
import react from './skill-icons/react.png';
import node from './skill-icons/node.png';
import figma from './skill-icons/figma.png';
import github from './skill-icons/github.png';
import git from './skill-icons/git.png';
import mysql from './skill-icons/mysql.png';
import php from './skill-icons/php.png';
import postman from './skill-icons/postman.png';
import html from './skill-icons/html.png';
import mongodb from './skill-icons/mongodb.png';
import javascript2 from './skill-icons/javascript2.png';
import laravel from './skill-icons/laravel.png';
import css from './skill-icons/css.png';
import next from './skill-icons/next.png';

const Skills = () => {


    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5000/api/skills');
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
import React from 'react';
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
    return (
        <div className="skills" id="skills">
            <h1>SKILLS</h1>
            <div className="skills-container">
                <div className="skill">
                    <img className="skill-icon" src={react} alt="React" />
                    <span className="alt-text-skill">React</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={node} alt="Node" />
                    <span className="alt-text-skill">Node</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={css} alt="CSS" />
                    <span className="alt-text-skill">CSS</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={html} alt="HTML" />
                    <span className="alt-text-skill">HTML</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={javascript2} alt="JavaScript" />
                    <span className="alt-text-skill">JavaScript</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={react} alt="React Native" />
                    <span className="alt-text-skill">React Native</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={laravel} alt="Laravel" />
                    <span className="alt-text-skill">Laravel</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={figma} alt="Figma" />
                    <span className="alt-text-skill">Figma</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={github} alt="GitHub" />
                    <span className="alt-text-skill">GitHub</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={git} alt="Git" />
                    <span className="alt-text-skill">Git</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={next} alt="Next" />
                    <span className="alt-text-skill">Next</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={mongodb} alt="MongoDB" />
                    <span className="alt-text-skill">MongoDB</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={mysql} alt="MySQL" />
                    <span className="alt-text-skill">MySQL</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={php} alt="PHP" />
                    <span className="alt-text-skill">PHP</span>
                </div>
                <div className="skill">
                    <img className="skill-icon" src={postman} alt="Postman" />
                    <span className="alt-text-skill">Postman</span>
                </div>
            </div>
        </div>
    );
}

export default Skills; 
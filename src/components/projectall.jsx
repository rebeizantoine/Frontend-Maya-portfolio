import React from 'react';
import { Link } from 'react-router-dom';
import index1 from './project1/index1';
import index2 from './project2/index2';
import index3 from './project3/index3'
import index4 from './project4/index4'
import index5 from './project5/index5'
import image1 from './project1/vitalBLood.png'
import image2 from './project2/stepUp.png'
import image3 from './project3/lms.png'
import image4 from './project4/portfolio.png'
import image5 from './project5/machghalna.png'

const Projectall = () => {
    return (
        <div class="projects" id="projects">
            <h1>PROJECTS</h1>

            <div class="projects-container">
                <div class="single-project">
                    <img class="project-picture" src={image1}
                        alt="type of website" />
                    <span class="alt-text-project">Type of website <br />View details</span>
                </div>
                <div class="single-project">
                    <img class="project-picture" src={image2} alt="E-commerce" />
                    <span class="alt-text-project">E-commerce <br />View details</span>
                </div>
                <div class="single-project">
                    <img class="project-picture" src={image3}
                        alt="Learning Managment System" />
                    <span class="alt-text-project">Learning Managment System <br />View details</span>
                </div>
                <div class="single-project">
                    <img class="project-picture" src={image4} alt="Portfolio" />
                    <span class="alt-text-project">Portfolio <br />View details</span>
                </div>
                <div class="single-project">
                    <img class="project-picture" src={image5}
                        alt="Type of project" />
                    <span class="alt-text-project">Type of project <br />View details</span>
                </div>
            </div>
        </div>
    );
};

export default Projectall;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from './project1/vitalBLood.png';
import image2 from './project2/stepUp.png';
import image3 from './project3/lms.png';
import image4 from './project4/portfolio.png';
import image5 from './project5/machghalna.png';

const Projectall = () => {
  useEffect(() => {
    const projectPictures = document.querySelectorAll('.project-picture');

    function checkScroll() {
      projectPictures.forEach((projectPicture) => {
        const distanceToTop = projectPicture.getBoundingClientRect().top; 
        const windowHeight = window.innerHeight;

        if (distanceToTop < windowHeight - 100) { 
          projectPicture.classList.add('appear');
        }
      });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll); 

    function throttle(func, wait) { 
      let timeout; 
      return function () { 
        const context = this; 
        const args = arguments; 
        if (!timeout) { 
          timeout = setTimeout(() => { 
            timeout = null; 
            func.apply(context, args);
          }, wait);
        }
      };
    }

    window.addEventListener('scroll', throttle(checkScroll, 100));

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('load', checkScroll);
      window.removeEventListener('scroll', throttle(checkScroll, 100));
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="projects" id="projects">
      <h1>PROJECTS</h1>

      <div className="projects-container">
        <Link to="/project1" target="_blank">
          <div className="single-project">
            <img className="project-picture" src={image1} alt="type of website" />
            <span className="alt-text-project">Type of website <br />View details</span>
          </div>
        </Link>
        <Link to="/project2" target="_blank">
          <div className="single-project">
            <img className="project-picture" src={image2} alt="E-commerce" />
            <span className="alt-text-project">E-commerce <br />View details</span>
          </div>
        </Link>
        <Link to="/project3" target="_blank">
          <div className="single-project">
            <img className="project-picture" src={image3} alt="Learning Management System" />
            <span className="alt-text-project">Learning Management System <br />View details</span>
          </div>
        </Link>
        <Link to="/project4" target="_blank">
          <div className="single-project">
            <img className="project-picture" src={image4} alt="Portfolio" />
            <span className="alt-text-project">Portfolio <br />View details</span>
          </div>
        </Link>
        <Link to="/project5" target="_blank">
          <div className="single-project">
            <img className="project-picture" src={image5} alt="Type of project" />
            <span className="alt-text-project">Type of project <br />View details</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projectall;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projectall = () => {
  const [projectsData, setProjectsData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        if (data.data.length > 0) {
          setProjectsData(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  }, []);

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
        {projectsData.map((project, index) => (
          <Link to={`/project${index + 1}`} target="_blank" key={project._id}>
            <div className="single-project">
              <img className="project-picture" src={project.mainPicture} alt={project.title} />
              <span className="alt-text-project">{project.title} <br />View details</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projectall;
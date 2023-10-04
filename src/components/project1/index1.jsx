import React, { useState, useEffect } from 'react';
import './index1.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleImageSlider from "react-simple-image-slider";

const Index1 = ({ projectsData }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const sliderImages = [];

    useEffect(() => {
        if (!isHovered && sliderImages.length > 0) {
            // Automatically advance to the next slide
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
            }, 3000); // Change image every 3 seconds

            return () => {
                // Clear the interval when the component unmounts or when the mouse enters the slider
                clearInterval(interval);
            };
        }
    }, [isHovered, sliderImages]);

    if (!projectsData || projectsData.length === 0) {
        return <div>No project data available</div>;
    }

    const project = projectsData[0];

    console.log("projectsData:", projectsData);

    sliderImages.push(
        project.mainPicture,
        project.pic2,
        project.pic3,
        project.pic4
    );

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cursorStyle = isHovered ? 'pointer' : 'auto';
    console.log("projectsData in Index1:", projectsData);
    return (
        <div>
            <div className="bloodproject">
                <div className="gradient-background">
                    <div className="topside">
                        <h1>{project.title}</h1>
                        <h3>{project.subtitle}</h3>
                    </div>
                    <div className="custom-slider">
                        <div className="slider-container">
                            <img
                                src={sliderImages[currentImageIndex]}
                                alt="Slider Image"
                                style={{ cursor: cursorStyle }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </div>
                    </div>
                    <div className="image2">
                        <img src={project.mobile_pic} alt="" />
                    </div>
                    <div className="links-single">
                        <a href={project.deployed} target="_blank">DEPLOYED LINK</a>
                        <a href={project.video_link} target="_blank">VIDEO DEMO</a>
                    </div>
                    <div className="textblood">
                        <p>
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index1;

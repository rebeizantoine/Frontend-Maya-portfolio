import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './index1.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Index1 = () => {

    const location = useLocation();
    const { data } = location.state;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const sliderImages = [];

    useEffect(() => {
        if (!isHovered && sliderImages.length > 0) {
            // Automatically advance to the next slide
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
            }, 3000); 

            return () => {
                // Clear the interval when the component unmounts or when the mouse enters the slider
                clearInterval(interval);
            };
        }
    }, [isHovered, sliderImages]);

    if (!data || data.length === 0) {
        return <div>No project data available</div>;
    }

    sliderImages.push(
        data[0].mainPicture,
        data[0].pic2,
        data[0].pic3,
        data[0].pic4
    );

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cursorStyle = isHovered ? 'pointer' : 'auto';
    
    return (
        <div>
            <div className="project">
                <div className="gradient-background">
                    <div className="topside">
                        <h1>{data[0].title}</h1>
                        <h3>{data[0].subtitle}</h3>
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
                    <div className="image1">
                        <img src={data[0].mobile_pic} alt="Picture" />
                    </div>
                    <div className="links-single">
                        <a href={data[0].deployed_link} target="_blank">DEPLOYED LINK</a>
                        <a href={data[0].video_link} target="_blank">VIDEO DEMO</a>
                    </div>
                    <div className="text">
                        <p>
                            {data[0].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index1;

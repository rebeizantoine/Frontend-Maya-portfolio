
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './index2.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../Header';
import Footer from '../footer';

const Index2 = () => {

    const location = useLocation();
    const { data } = location.state;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const sliderImages = [];

    useEffect(() => {
        if (!isHovered) {
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

    if (!data || data.length === 0) {
        return <div>No project data available</div>;
    }

    sliderImages.push(
        data[1].mainPicture,
        data[1].pic2,
        data[1].pic3,
        data[1].pic4);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cursorStyle = isHovered ? 'pointer' : 'auto';
    return (
        <div> <Header />
            <div className="project">
                <div className="gradient-background">
                    <div className="topside">
                        <h1>{data[1].title}</h1>
                        <h3>{data[1].subtitle}</h3>
                    </div>
                    <div className="custom-slider">
                        <div className="slider-container">
                            <img
                                src={sliderImages[currentImageIndex]}
                                alt="Slider Image"
                                style={{ cursor: cursorStyle, }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </div>
                    </div>

                    <div className="image1">
                        <img src={data[1].mobile_pic} alt="Picture" />
                    </div>
                    <div className="links-single">
                        <a href={data[1].deployed_link} target="_blank">DEPLOYED LINK</a>
                        <a href={data[1].video_link} target="_blank">VIDEO DEMO</a>
                    </div>
                    <div className="text">
                        <p>
                            {data[1].description}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index2
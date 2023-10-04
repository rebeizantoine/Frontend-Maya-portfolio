import React, { useState, useEffect } from 'react';
import './index4.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleImageSlider from "react-simple-image-slider";

import image41 from './portfolio.png'
import image42 from './skills.png'
import image43 from './experience.png'
import image44 from './aboutme.png'
import image45 from './Capture4.png'

const Index4 = () => {
    const sliderImages = [
        image41,
        image42,
        image43,
        image44,
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cursorStyle = isHovered ? 'pointer' : 'auto';

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
    }, [isHovered]);
    return (
        <div><div class="portfolioclientproject ">
            <div class="gradient-background">
                <div class="topside">
                    <h1>PORTFOLIO FOR A CLIENT </h1>
                    <h3>Portfoilio website built with MERN Stack</h3>
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

                <div class="image2"><img src={image45} alt="" /></div>

                <div class="links-single">
                    <a href="https://team6-frontend-fake-client.netlify.app/" target="_blank">DEPLOYED LINK</a>
                    <a href="https://drive.google.com/file/d/1ZsNs2fpIsYqQhqL3S2g-bK30hHnpEGVB/view" target="_blank">VIDEO DEMO</a>
                </div>
                <div class="textportfolioclient">
                    <p>Created a Personal Portfolio utilizing the MERN Stack (ReactJS, NodeJS, ExpressJS, MongoDB),
                        incorporating a dashboard and JWT authentication to enable effortless content editing by the
                        administrator.
                    </p>
                </div>

            </div>
        </div></div>
    )
}

export default Index4
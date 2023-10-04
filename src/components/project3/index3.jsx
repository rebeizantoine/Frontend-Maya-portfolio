import React, { useState, useEffect } from 'react';
import './index3.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleImageSlider from "react-simple-image-slider";

import image31 from './lms.png'
import image32 from './courses.png'
import image33 from './attendance.png'
import image34 from './report.png'
import image35 from './Capture3.png'



const Index3 = () => {
    const sliderImages = [
        image31,
        image32,
        image33,
        image34,
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
        <div> <div class="LMSproject ">
            <div class="gradient-background">
                <div class="topside">
                    <h1>LEARNING MANAGEMENT SYSTEM</h1>
                    <h3>LMS website built with LAMP Stack</h3>
                </div>
                <div>
                    <div className="custom-slider">
                        <div className="slider-container">
                            <img
                                src={sliderImages[currentImageIndex]}
                                alt="Slider Image"
                                style={{
                                    cursor: cursorStyle,
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </div>
                    </div>





                    <div class="links-single">
                        <a href="https://ecom.khankanko.com/" target="_blank">Deployed Link</a>
                        <a href="https://drive.google.com/file/d/1ZsNs2fpIsYqQhqL3S2g-bK30hHnpEGVB/view" target="_blank">Video
                            Demo</a>
                    </div>
                    <div class="textlms">
                        <p>Introducing a comprehensive Learning Management System app developed using ReactJS and React Native
                            for the frontend, paired with Laravel (PHP) for the backend. This system offers robust
                            authentication and authorization features, along with a flexible dashboard catering to diverse user
                            roles and their respective privileges. The user roles encompass 'admin' and 'super admin', each
                            empowered with distinct rights. The system seamlessly integrates classes, courses, teachers, and
                            students. This entails assigning teachers to specific courses and classes, enrolling students in
                            designated grade sections, and simplifying attendance management for targeted sections. The latter
                            includes generating daily reports to monitor attendance trends effectively.
                        </p>
                    </div>



                </div>
            </div></div>
        </div>
    )
}

export default Index3
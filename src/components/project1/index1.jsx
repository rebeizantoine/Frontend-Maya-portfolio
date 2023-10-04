import React, { useState, useEffect } from 'react';

import './index1.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image11 from './vitalBLood.png';
import image12 from './feed.png';
import image13 from './signup.png';
import image14 from './volunteers.png';
import image15 from './Capture.png';
import SimpleImageSlider from "react-simple-image-slider";

const Index1 = () => {
    const sliderImages = [
        image11,
        image12,
        image13,
        image14,
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
        <div>
            <div className="bloodproject">
                <div className="gradient-background">
                    <div className="topside">
                        <h1>VITAL BLOOD</h1>
                        <h3>Blood Donation website built with MERN Stack</h3>
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
                    <div className="image2">
                        <img src={image15} alt="" />
                    </div>
                    <div className="links-single">
                        <a href="https://vitalblood.netlify.app" target="_blank">DEPLOYED LINK</a>
                        <a href="https://drive.google.com/file/d/19u-6SfINc-7pVzHPuLbMj3E4v5iYoBot/view?usp=drive_link"
                            target="_blank"
                        >VIDEO DEMO</a>
                    </div>
                    <div className="textblood">
                        <p>
                            Vital Blood is a blood donation website built with MERN Stack.
                            Users can request blood donations by submitting a form. Once
                            submitted, the system automatically sends out emails and
                            notifications to potential donors. To facilitate the donation
                            process, I have implemented a "Feed" page where donors can browse
                            and find requests. They can then express their willingness to
                            donate and patiently wait for acceptance or rejection from the
                            requester. This seamless communication is made possible through
                            the user profile feature, which requires users to log in and manage
                            their donation journey. As well, the website includes
                            authentication and authorization where the user should sign in or
                            sign up to make a request, donation, accept, or reject from the
                            user's profile.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index1;

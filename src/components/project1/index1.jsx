import React, { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import './index1.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image11 from './vitalBLood.png';
import image12 from './feed.png';
import image13 from './signup.png';
import image14 from './volunteers.png';
import image15 from './Capture.png';

const Index1 = () => {
    const sliderImages = [
        {
            url: image11,
            link: image11,
        },
        {
            url: image12,
            link: image12,
        },
        {
            url: image13,
            link: image13,
        },
        {
            url: image14,
            link: image14,
        },
    ];

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true); // Set the hover state to true
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // Set the hover state to false
    };

    const cursorStyle = isHovered ? 'pointer' : 'auto'; // Change cursor style when hovered

    return (
        <div>
            <div className="bloodproject">
                <div className="gradient-background">
                    <div className="topside">
                        <h1>VITAL BLOOD</h1>
                        <h3>Blood Donation website built with MERN Stack</h3>
                    </div>
                    <div>
                        <SimpleImageSlider
                            className="custom-slider"
                            width={900}
                            height={475}
                            images={sliderImages}
                            showNavs={true}
                            style={{
                                marginLeft: '660px',
                                cursor: cursorStyle, // Apply cursor style
                            }}
                            autoPlay={!isHovered} // Stop autoplay when hovered
                            autoPlayDuration={4000}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>

                    <div className="image2">
                        <img src={image15} alt="" />
                    </div>
                    <div className="links-single">
                        <a href="https://vitalblood.netlify.app" target="_blank">
                            Deployed Link
                        </a>
                        <a
                            href="https://drive.google.com/file/d/19u-6SfINc-7pVzHPuLbMj3E4v5iYoBot/view?usp=drive_link"
                            target="_blank"
                        >
                            Video Demo
                        </a>
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

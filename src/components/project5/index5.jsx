import React, { useState, useEffect } from 'react';
import './index5.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleImageSlider from "react-simple-image-slider";
import image51 from './machghalna.png'
import image52 from './machghalnaabout.png'
import image53 from './categories.png'
import image54 from './contactmachghalna.png'


const Index5 = () => {
    const sliderImages = [
        image51,
        image52,
        image53,
        image54,
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
        <div><div class="machghalnaproject ">
            <div class="gradient-background">
                <div class="topside">
                    <h1>MACHGHALNA</h1>
                    <h3>Atelier website built with Wordpress</h3>
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

                <div class="links-single">
                    <a href="https://group12.codi-wordpress.com/b09-group12/" target="_blank">DEPLOYED LINK</a>
                    <a href="https://drive.google.com/file/d/10sVv5kkZk4Vy4mZ9HnlfuaV9BQ8GFhqW/view" target="_blank">VIDEO DEMO</a>
                </div>
                <div class="textmachghalna">
                    <p>"Machghalna" is an atelier website created for our client, showcasing her designs and dresses. The
                        website is built with WordPress and consists of various sections including contact, categories
                        (shop), and an about me page.
                    </p>
                </div>
            </div>
        </div></div>
    )
}

export default Index5
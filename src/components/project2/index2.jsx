
import React, { useState, useEffect } from 'react';
import './index2.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image21 from './stepUp.png'
import image22 from './cart.png'
import image23 from './dashboard.png'
import image24 from './login.png'
import image25 from './Capture2.png'

const Index2 = () => {
    const sliderImages = [
        image21,
        image22,
        image23,
        image24,
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
        <div> <div className="ecommerceproject">
            <div className="gradient-background">
                <div className="topside">
                    <h1>STEPUP</h1>
                    <h3>E-commerce website built with MERN Stack </h3>
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

                <div className="image2"><img src={image25} alt="" /></div>

                <div className="links-single">
                    <a href="https://ecom.khankanko.com/" target="_blank">DEPLOYED LINK</a>
                    <a href="https://drive.google.com/file/d/1ZsNs2fpIsYqQhqL3S2g-bK30hHnpEGVB/view" target="_blank">VIDEO DEMO</a>
                </div>
                <div className="textcommerce">
                    <p>StepUp is a dynamic e-commerce website developed using the MERN stack. It offers a diverse selection
                        of categories, each housing a wide range of products with various sizes, colors, and quantities.
                        Customers can easily browse and search for their preferred shoes, adding them to their cart. To
                        complete the order, a simple registration process is required. The admin, accessible through
                        authorized login, manages the platform. This includes overseeing orders, updating product details,
                        and enhancing site descriptions. StepUp ensures a user-friendly shopping experience and efficient
                        order management, making it a seamless hub for online shopping.
                    </p>
                </div>



            </div>
        </div></div>
    )
}

export default Index2
import React from 'react';
import '../App.css'
import nobg from './logos/portrait_Maya_nobg.png'
import bg from './logos/portrait_Maya.jpeg'

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <p className="bubble">HELLO</p>
                <p className="hero-text">
                    I am <span className="span-name">Maya Atiah</span>
                    <br />
                    a Full Stack Web Developer
                </p>
                <button className="download-cv">DOWNLOAD CV</button>
            </div>
            <img
                className="hero-portrait"
                src={nobg}
                alt="Maya Atiah"
            />
        </div>
    );
}

export default Hero;

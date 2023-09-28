import React, { useState } from 'react';
import toplogo from './logos/logo.png'



function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    // Define a function to toggle the menu
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <div className="header">
            <img className="logo-maya" src={toplogo} alt="Logo" />

            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="burger-menu" onClick={toggleMenu}>&#9776;</div>
            <ul className="menu-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Header;

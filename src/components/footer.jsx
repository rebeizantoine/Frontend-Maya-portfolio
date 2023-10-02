import React from 'react';
import '../App.css';
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'
import mail from './icons/mail.png'
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <nav className="footer-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#experience">Experience</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="footer-icons-container">
                <a href="mailto:maya.atiah.99@gmail.com"><img className="footer-icon" src={mail} alt="Email" /></a>
                <a href="https://github.com/maya-atiah"><img className="footer-icon" src={github} alt="Git Hub" /></a>
                <a href="https://www.linkedin.com/in/maya-atiah/"><img className="footer-icon" src={linkedin} alt="Linked in" /></a>
            </div>

            <span className="copyright">© 2023 All rights reserved. </span>
        </div>
    );
}

export default Footer;
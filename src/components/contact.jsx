import React from 'react'
import '../App.css'
import bg from './logos/portrait_Maya.jpeg'
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'
import mail from './icons/mail.png'


const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h1>CONTACT ME</h1>

            <div className="contact-container">
                <img className="contact-portrait" src={bg} alt="Maya Atiah" />
                <form className="contact-form">
                    <div className="input-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="text" id="phone-number" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <label htmlFor="message">Message</label>
                    <input className="input-message" type="text" id="message" required />
                    <button className="contact-submit" type="submit">SUBMIT</button>
                </form>

                <div className="contact-icons-container">
                    <a href="mailto:maya.atiah.99@gmail.com"><img className="contact-icon" src={mail} alt="Email" /></a>
                    <a href="https://github.com/maya-atiah"><img className="contact-icon" src={github} alt="Git Hub" /></a>
                    <a href="https://www.linkedin.com/in/maya-atiah/"><img className="contact-icon" src={linkedin} alt="Linked in" /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact

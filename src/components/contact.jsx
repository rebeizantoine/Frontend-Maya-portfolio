import React, { useState } from 'react';
import '../App.css';
import bg from './logos/portrait_Maya.jpeg';
import github from './icons/github.png';
import linkedin from './icons/linkedin.png';
import mail from './icons/mail.png';
import { useForm } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm('xwkdwwor');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        handleSubmit(e);
    };

    return (
        <div className="contact" id="contact">
            <h1>CONTACT ME</h1>

            <div className="contact-container">
            <img className="contact-portrait" src={bg} alt="Maya Atiah" />
                <form className="contact-form" onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                        />
                    </div>
                    {state.succeeded ? (
                        <p className='contact-success'>Thank you for contacting me!</p>
                    ) : (
                        <button className="contact-submit" type="submit">
                            SUBMIT
                        </button>
                    )}
                </form>

                <div className="contact-icons-container">
                    <a href="mailto:maya.atiah.99@gmail.com">
                        <img className="contact-icon" src={mail} alt="Email" />
                    </a>
                    <a href="https://github.com/maya-atiah">
                        <img className="contact-icon" src={github} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/maya-atiah/">
                        <img className="contact-icon" src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;

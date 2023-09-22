import React from 'react';
import '../../HTML/vitalblood.css';

function VitalBlood() {
    return (
        <div className="bloodproject">
            <div className="gradient-background">
                <div className="topside">
                    <h1>VITAL BLOOD</h1>
                    <h3>Blood Donation website built with MERN Stack</h3>
                </div>
                <div className="image-slider">
                    <a href="vitalbloodimages/vitalBLood.png" target="_blank" rel="noopener noreferrer">
                        <img className="slider" src="vitalbloodimages/vitalBLood.png" alt="Image 1" />
                    </a>
                    <a href="vitalbloodimages/feed.png" target="_blank" rel="noopener noreferrer">
                        <img className="slider" src="vitalbloodimages/feed.png" alt="Image 2" />
                    </a>
                    <a href="vitalbloodimages/signup.png" target="_blank" rel="noopener noreferrer">
                        <img className="slider" src="vitalbloodimages/signup.png" alt="Image 3" />
                    </a>
                    <a href="vitalbloodimages/volunteers.png" target="_blank" rel="noopener noreferrer">
                        <img className="slider" src="vitalbloodimages/volunteers.png" alt="Image 4" />
                    </a>
                </div>
                <div className="image2">
                    <img src="vitalbloodimages/Capture.PNG" alt="" />
                </div>
                <div className="links-single">
                    <a href="https://vitalblood.netlify.app/" target="_blank" rel="noopener noreferrer">
                        Deployed Link
                    </a>
                    <a
                        href="https://drive.google.com/file/d/19u-6SfINc-7pVzHPuLbMj3E4v5iYoBot/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Video Demo
                    </a>
                </div>
                <div className="textblood">
                    <p>
                        Vital Blood is a blood donation website built with MERN Stack. Users can request blood donations by
                        submitting a form. Once submitted, the system automatically sends out emails and notifications to
                        potential donors. To facilitate the donation process, I have implemented a "Feed" page where donors can
                        browse and find requests. They can then express their willingness to donate and patiently wait for
                        acceptance or rejection from the requester. This seamless communication is made possible through the user
                        profile feature, which requires users to log in and manage their donation journey. As well, the website
                        includes authentication and authorization where the user should sign in or sign up to make a request,
                        donation, accept or reject from the user's profile.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VitalBlood;

import React from 'react'
import './index1.css'


const index1 = () => {
    return (
        <div> <div class="bloodproject">
            <div class="gradient-background">
                <div class="topside">
                    <h1>VITAL BLOOD</h1>
                    <h3>Blood Donation website built with MERN Stack</h3>
                </div>
                <div class="image-slider">
                    <a href="vitalBLood.png" target="_blank">
                        <img class="slider" src="vitalBLood.png" alt="Image 1" />
                    </a>
                    <a href="feed.png" target="_blank">
                        <img class="slider" src="feed.png" alt="Image 2" />
                    </a>
                    <a href="signup.png" target="_blank">
                        <img class="slider" src="signup.png" alt="Image 3" />
                    </a>
                    <a href="volunteers.png" target="_blank">
                        <img class="slider" src="volunteers.png" alt="Image 4" />
                    </a>


                </div>



                <div class="image2"><img src="Capture.PNG" alt="" /></div>

                <div class="links-single">
                    <a href="https://vitalblood.netlify.app/" target="_blank">Deployed Link</a>
                    <a href="https://drive.google.com/file/d/19u-6SfINc-7pVzHPuLbMj3E4v5iYoBot/view?usp=drive_link"
                        target="_blank">Video Demo</a>
                </div>
                <div class="textblood">
                    <p>Vital Blood is a blood donation website built with MERN Stack. Users can request blood donations by
                        submitting a form. Once submitted, the system automatically sends out emails and notifications to
                        potential donors. To facilitate the donation process, I have implemented a "Feed" page where donors
                        can
                        browse and find requests. They can then express their willingness to donate and patiently wait for
                        acceptance or rejection from the requester. This seamless communication is made possible through the
                        user profile feature, which requires users to log in and manage their donation journey. As well the
                        website includes authentication, and authorization where the user should sign in or sign up to make
                        a
                        request, donation, accept or reject from the user's profile.
                    </p>
                </div>



            </div>
        </div></div>
    )
}

export default index1
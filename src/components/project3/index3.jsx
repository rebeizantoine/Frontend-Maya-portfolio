import React from 'react'
import './index3.css'

const index3 = () => {
    return (
        <div> <div class="LMSproject ">
            <div class="gradient-background">
                <div class="topside">
                    <h1>LEARNING MANAGEMENT SYSTEM</h1>
                    <h3>LMS website built with LAMP Stack</h3>
                </div>
                <div class="image-slider">
                    <a href="lms.png" target="_blank">
                        <img class="slider" src="lms.png" alt="Image 1" />
                    </a>
                    <a href="courses.png" target="_blank">
                        <img class="slider" src="courses.png" alt="Image 2" />
                    </a>
                    <a href="attendance.png" target="_blank">
                        <img class="slider" src="attendance.png" alt="Image 3" />
                    </a>
                    <a href="report.png" target="_blank">
                        <img class="slider" src="report.png" alt="Image 4" />
                    </a>


                </div>



                <div class="image2"><img src="Capture333.PNG" alt="" /></div>

                <div class="links-single">
                    <a href="https://ecom.khankanko.com/" target="_blank">Deployed Link</a>
                    <a href="https://drive.google.com/file/d/1ZsNs2fpIsYqQhqL3S2g-bK30hHnpEGVB/view" target="_blank">Video
                        Demo</a>
                </div>
                <div class="textlms">
                    <p>Introducing a comprehensive Learning Management System app developed using ReactJS and React Native
                        for the frontend, paired with Laravel (PHP) for the backend. This system offers robust
                        authentication and authorization features, along with a flexible dashboard catering to diverse user
                        roles and their respective privileges. The user roles encompass 'admin' and 'super admin', each
                        empowered with distinct rights. The system seamlessly integrates classes, courses, teachers, and
                        students. This entails assigning teachers to specific courses and classes, enrolling students in
                        designated grade sections, and simplifying attendance management for targeted sections. The latter
                        includes generating daily reports to monitor attendance trends effectively.
                    </p>
                </div>



            </div>
        </div></div>
    )
}

export default index3
import React from 'react'
import './index4.css'
import SimpleImageSlider from "react-simple-image-slider";

import image41 from './portfolio.png'
import image42 from './skills.png'
import image43 from './experience.png'
import image44 from './aboutme.png'
import image45 from './Capture4.png'

const index4 = () => {
    const sliderImages = [
        {
            url: image41,
        },
        {
            url: image42,
        },
        {
            url: image43,
        },
        {
            url: image44,
        },
    ];
    return (
        <div><div class="portfolioclientproject ">
            <div class="gradient-background">
                <div class="topside">
                    <h1>PORTFOLIO FOR A CLIENT </h1>
                    <h3>Portfoilio website built with MERN Stack</h3>
                </div>
                <div>
                    <SimpleImageSlider
                        className="custom-slider"
                        width={900}
                        height={475}
                        images={sliderImages}
                        showNavs={true}
                        style={{

                            marginLeft: '660px',


                        }}
                        autoPlay={true}
                        autoPlayDuration={4000}

                    />
                </div>



                <div class="image2"><img src={image45} alt="" /></div>

                <div class="links-single">
                    <a href="https://team6-frontend-fake-client.netlify.app/" target="_blank">Deployed Link</a>
                    <a href="https://drive.google.com/file/d/1ZsNs2fpIsYqQhqL3S2g-bK30hHnpEGVB/view" target="_blank">Video
                        Demo</a>
                </div>
                <div class="textportfolioclient">
                    <p>Created a Personal Portfolio utilizing the MERN Stack (ReactJS, NodeJS, ExpressJS, MongoDB),
                        incorporating a dashboard and JWT authentication to enable effortless content editing by the
                        administrator.
                    </p>
                </div>



            </div>
        </div></div>
    )
}

export default index4
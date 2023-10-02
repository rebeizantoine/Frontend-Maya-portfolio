import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import './index5.css'
import image51 from './machghalna.png'
import image52 from './machghalnaabout.png'
import image53 from './categories.png'
import image54 from './contactmachghalna.png'


const index5 = () => {
    const sliderImages = [
        {
            url: image51,
        },
        {
            url: image52,
        },
        {
            url: image53,
        },
        {
            url: image54,
        },
    ];
    return (
        <div><div class="machghalnaproject ">
            <div class="gradient-background">
                <div class="topside">
                    <h1>MACHGHALNA</h1>
                    <h3>Atlier website built with Wordpress</h3>
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





                <div class="links-single">
                    <a href="https://group12.codi-wordpress.com/b09-group12/" target="_blank">Deployed Link</a>
                    <a href="https://drive.google.com/file/d/10sVv5kkZk4Vy4mZ9HnlfuaV9BQ8GFhqW/view" target="_blank">Video
                        Demo</a>
                </div>
                <div class="textmachghalna">
                    <p>"Machghalna" is an atelier website created for our client, showcasing her designs and dresses. The
                        website is built with WordPress and consists of various sections including contact, categories
                        (shop), and an about me page.


                    </p>
                </div>



            </div>
        </div></div>
    )
}

export default index5
import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import './index2.css'
import image21 from './stepUp.png'
import image22 from './cart.png'
import image23 from './dashboard.png'
import image24 from './login.png'
import image25 from './Capture 2.png'

const index2 = () => {
    const sliderImages = [
        {
            url: image21,
        },
        {
            url: image22,
        },
        {
            url: image23,
        },
        {
            url: image24,
        },
    ];


    return (
        <div> <div className="ecommerceproject">
            <div className="gradient-background">
                <div className="topside">
                    <h1>STEPUP</h1>
                    <h3>E-commerce website built with MERN Stack </h3>
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




                <div className="image2"><img src={image25} alt="" /></div>

                <div className="links-single">
                    <a href="https://ecom.khankanko.com/" target="_blank">Deployed Link</a>
                    <a href="https://drive.google.com/file/d/1ZsNs2fpIsYqQhqL3S2g-bK30hHnpEGVB/view" target="_blank">Video
                        Demo</a>
                </div>
                <div className="textcommerce">
                    <p>StepUp is a dynamic e-commerce website developed using the MERN stack. It offers a diverse selection
                        of categories, each housing a wide range of products with various sizes, colors, and quantities.
                        Customers can easily browse and search for their preferred shoes, adding them to their cart. To
                        complete the order, a simple registration process is required. The admin, accessible through
                        authorized login, manages the platform. This includes overseeing orders, updating product details,
                        and enhancing site descriptions. StepUp ensures a user-friendly shopping experience and efficient
                        order management, making it a seamless hub for online shopping.
                    </p>
                </div>



            </div>
        </div></div>
    )
}

export default index2
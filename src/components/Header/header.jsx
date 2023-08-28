import React from "react";
import "./Header.css";
 import Navbar from "../Navbar/navbar";
import images from "../../constants/images";
// import videos from "../../constants/videos";
 import video1 from "../assets/videos/video1.mp4";

const Header = () => (
    // <div className="header" style = {{
    //     background: `url(${images.header_bg}) center/cover no-repeat`
    // }}>
   <div className="header">
    <Navbar />
    <div className="header-content">
            <video className="video-backgrd" src={video1} autoPlay loop muted id="video"></video>

            <div className="container content">
                <div className="row">
                
                    <div className="col-md-12 info txt-center">
                        <h1 className=" header__title color-white">Tea time.</h1>
                        <p className="color-white slogan ">Sip, Savor, and Share the Moment: Embrace the Tranquility of Tea Time</p>
                        
                    </div>
                </div>
            </div>
    </div>
       
    </div>
)

export default Header;
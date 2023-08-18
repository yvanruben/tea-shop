import React from "react";
import "./Header.css";
 import Navbar from "../Navbar/navbar";
import images from "../../constants/images";

const Header = () => (
    <div className="header" style = {{
        background: `url(${images.header_bg}) center/cover no-repeat`
    }}>
        <Navbar />

        <div className="container">
            <div className="row">
               
                <div className="col-md-12 info txt-center">
                    <h1 className=" header__title color-white">Tea time.</h1>
                    <p className="color-white slogan ">Sip, Savor, and Share the Moment: Embrace the Tranquility of Tea Time</p>
                    
                </div>
            </div>
        </div>
    </div>
)

export default Header;
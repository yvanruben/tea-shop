import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer black-backgrd">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <h5>Le Salon de thé</h5>
                        <p className="para__text">&copy; 2023 Dev. Point. All rights reserved</p>
                    </div>

                    <div className="footer__content--item">
                        <a href = "mailto:someone@gmail.com">cakelovermauritius@gmail.com</a><br></br>
                        <a>5976-5151</a>
                    </div>

                    <div className="footer__content--item hide-sm">
                        {/* <h3 className="footer__title">Projects</h3>
                        <ul className="footer__links">
                            <li><a href = "#">About</a></li>
                            <li><a href = "#">Services</a></li>
                            <li><a href = "#">Career</a></li>
                        </ul> */}
                    </div>

                    <div className="footer__content--item hide-sm">
                        {/* <h3 className="footer__title">News</h3>
                        <ul className="footer__links">
                            <li><a href = "#">Events</a></li>
                            <li><a href = "#">Contact</a></li>
                            <li><a href = "#">Legals</a></li>
                        </ul> */}
                    </div>

                    <div className="footer__content--item">
                        <h5>Social LInks</h5>
                        <ul className="footer__links">
                            <li><a href = "#">Facebook</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
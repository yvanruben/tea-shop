import React, {useState} from "react";
import images from "../../constants/images";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import{Link} from 'react-router-dom';



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar menu-section">
            <div className="container">
                <div className="brand__and__toggler flex">
                    <Link to = "/home" alt = "" className="navbar__brand">
                        <img src = {images.logo} alt = "site logo" />
                    </Link>
                    <button type = "button" className="navbar__open--btn text__light" onClick={() => setToggleMenu(true)}>
                        <FaBars size = {26} />
                    </button>
                </div>

                <div className="navbar__collapse">
                    <ul className="navbar__nav">
					<div className="nav__item">
                             <li ><Link to="/home">HOME</Link></li> 
						</div>
						<div className="nav__item">
                             <li ><Link to="/about">ABOUT</Link></li> 
						</div>

						<div className="nav__item">
                             <li><Link to="/contact">CONTACT</Link></li> 
						</div>

						{/* <div className="nav__item">
                             <li><Link to="/gallery">GALLERY</Link></li> 
						</div> */}
                      
                        
                        
                    </ul>
                </div>

                {toggleMenu && (
                    <div className="navbar__smallscreen">
                        <button type = "button" className="navbar__close--btn text__light" onClick={() => setToggleMenu(false)}>
                            <FaTimes size = {32} />
                        </button>
                        <ul className="navbar__nav--smallscreen text__light">
						<div className="nav__item">
                             <li ><Link to="/home">HOME</Link></li> 
						</div>
						<div className="nav__item">
                             <li ><Link to="/about">ABOUT</Link></li> 
						</div>

						<div className="nav__item">
                             <li><Link to="/contact">CONTACT</Link></li> 
						</div>
                            

							
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
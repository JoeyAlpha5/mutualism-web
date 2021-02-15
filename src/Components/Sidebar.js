import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { IoChevronBackOutline, IoLogoLinkedin, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoMail} from 'react-icons/io5';
import logolg from '../images/logo/mutualism_logo_large.png';
import './ElementStyles/Hamburger.css';


function Sidebar() {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {setActive(!isActive)}

    return (
        <div id="sidebar" className={isActive ? "sidebar-shown" : "collapsed"}>
            <div className="sidebar-nav">
                <div id="menu-icon" className={isActive ? "hide" : ""} onClick={handleToggle}>
                    <div className="btn not-active">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="social-links" className={isActive ? "icons-hidden" : "icons-shown"}>
                    <IoLogoLinkedin className="social-lnk nav-item" onClick={()=>window.open("https://www.linkedin.com/company/mutualismsa/")}/>
                    <IoLogoFacebook className="social-lnk nav-item" onClick={()=>window.open("https://www.facebook.com/MutualismSA")}/>
                    <a href="mailto:info@mutualism.co.za"><IoMail className="social-lnk nav-item" /></a>
                    {/* <IoLogoInstagram className="social-lnk nav-item"/>
                    <IoLogoTwitter className="social-lnk nav-item"/> */}
                </div>
                <div id="sidebar-elements" className={isActive ? "" : "hide"} >
                    <div id="minimize" onClick={handleToggle}>
                        <div className="back-icon"><IoChevronBackOutline/></div>
                    </div>
                    <div id="sidenav-options">
                        <div className="link-items">
                            <div className="side-nav">
                                <img src={logolg} width={100} className="mobile-logo mobile-link"/>
                                <li className="side-nav-item nav-item mobile-link" onClick={handleToggle}><Link to="/home">Home</Link></li>
                                <li className="side-nav-item nav-item mobile-link" onClick={handleToggle}><Link to="/about">About</Link></li>
                                <li className="side-nav-item nav-item mobile-link" onClick={handleToggle}><Link to="/contact">Contact</Link></li>
                                {/* <li className="side-nav-item nav-item">Our Model</li>
                                <li className="side-nav-item nav-item">Services</li>
                                <li className="side-nav-item nav-item">Applications</li> */}
                                <p>
                                Mutualism is a South African financing firm dedicated to supporting entrepreneurs and<br className="desktop-break"/> small businesses through unrivaled financing rates alongside tailored partner consultation.
                                </p>
                            </div>
                            <div id="quick-contacts">
                                <br/>
                                <p className="get-in-touch">get in touch</p>
                                <p><a href="mailto:info@mutualism.co.za">info@mutualism.co.za</a></p>
                                {/* <p>+27 123 456 78</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
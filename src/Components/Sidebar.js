import React,{useState} from 'react';
import { IoChevronBackOutline, IoLogoLinkedin, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter} from 'react-icons/io5';
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
                <div id="social-links">
                    <IoLogoLinkedin className="social-lnk nav-item"/>
                    <IoLogoFacebook className="social-lnk nav-item"/>
                    <IoLogoInstagram className="social-lnk nav-item"/>
                    <IoLogoTwitter className="social-lnk nav-item"/>
                </div>
                <div id="sidebar-elements" className={isActive ? "" : "hide"} >
                    <div id="minimize" onClick={handleToggle}>
                        <div className="back-icon"><IoChevronBackOutline/></div>
                    </div>
                    <div id="sidenav-options">
                        <div className="link-items">
                            <div className="side-nav">
                                <li className="side-nav-item nav-item">Partners</li>
                                <li className="side-nav-item nav-item">Our Model</li>
                                <li className="side-nav-item nav-item">Services</li>
                                <li className="side-nav-item nav-item">Applications</li>
                            </div>
                            <div id="quick-contacts">
                                <p>info@mutual.co.za</p>
                                <p>+27 123 456 78</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
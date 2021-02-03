import React from 'react';
import logo from '../images/logo/mutualism_logo_sm.png';
import Account from './Account';
import { Link } from "react-router-dom";

function Menu(){
    return(
        <div className="top-menubar">
            <div className="top-menu-items">
                <div className="mutualism-logo nav-item"><img src={logo} className="logo" alt="company logo"/></div>
                <div className="home-item nav-item"><Link to="/home">Home</Link></div>
                <div className="about-item nav-item"><Link to="/about">About</Link></div>
                <div className="contact-item nav-item"><Link to="/contact">Contact</Link></div>
                <Account/>
            </div>
        </div>
    );
}

export default Menu;
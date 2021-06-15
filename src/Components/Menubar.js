import React from 'react';
import logo from '../images/logo/mutualism-logo-white-no-text.svg';
import Account from './Account';
import { Link } from "react-router-dom";

function Menu(){
    return(
        <div className="top-menubar">
            <div className="top-menu-items">
                <div className="mutualism-logo"><Link to="/"><img src={logo} className="logo" alt="company logo"/></Link></div>
                <div className="home-item nav-item"><Link to="/">Home</Link></div>
                <div className="about-item nav-item"><Link to="/about">About</Link></div>
                <div className="contact-item nav-item"><Link to="/contact">Contact</Link></div>
                <Account/>
            </div>
        </div>
    );
}

export default Menu;
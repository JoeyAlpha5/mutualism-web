import React from 'react';
import logo from '../images/logo/mutualism_logo_sm.png';
import Account from './Account';

function Menu(){
    return(
        <div className="top-menubar">
            <div className="top-menu-items">
                <div className="mutualism-logo nav-item"><img src={logo} className="logo" placeholder="company logo"/></div>
                <div className="home-item nav-item">Home</div>
                <div className="about-item nav-item">About</div>
                <div className="contact-item nav-item">Contact</div>
                <Account/>
            </div>
        </div>
    );
}

export default Menu;
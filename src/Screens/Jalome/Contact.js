import React from 'react';
import {SiInstagram} from 'react-icons/si'
import {IoIosArrowRoundForward} from "react-icons/io";
import img001 from '../../images/Contact/1.png';
import img002 from '../../images/Contact/2.png';
import img003 from '../../images/Contact/3.png';
import img004 from '../../images/Contact/4.png';
import img005 from '../../images/Contact/5.png';
import img006 from '../../images/Contact/6.png';
import img007 from '../../images/Contact/7.png';
import img008 from '../../images/Contact/8.png';

const Contact = ()=>{
    return(
        <div className="main-body-col-1">
            <div className="mid-content about-mid-content">
                <h1 className="home-heading contact-about-heading animate__animated animate__fadeInUp" style={{color: "#46A16E"}}>Contact Us.</h1>
                <p className="body-text about_contact_p">
                    We’re empowering businesses through a new financing and <br className="desktop-break"/>
                    consulting strategy which brings successes to the small business <br className="desktop-break"/>
                    owners of South Africa. <br className="desktop-break"/>
                </p>
                <p className="body-text about_contact_p">
                    Discover what’s possible with community centered investment. <br className="desktop-break"/>
                </p>
                <h3 className="animate__animated animate__fadeInUp">Come see us.</h3>
                <div className="follow-theboxshoplifestyle animate__animated animate__fadeInUp">
                    <SiInstagram className="theboxshoplifestyle-instagram-label"/><div className="body-text about_contact_p theboxshoplifestyle-instagram-label">theboxshoplifestyle</div><div className="body-text about_contact_p theboxshoplifestyle-instagram insta-follow" onClick={()=>window.open("https://www.instagram.com/theboxshoplifestyle/?hl=en")}>Follow</div>
                </div>
                <div className="gallery animate__animated animate__fadeInDown">
                    <img src={img001} alt="gallery-item" className=".col-12 .col-md-6 .col-lg-4"/>
                    <img src={img002} alt="gallery-item" className=".col-12 .col-md-6 .col-lg-4"/>
                    <img src={img003} alt="gallery-item" className=".col-12 .col-md-6 .col-lg-4"/>
                    <img src={img004} alt="gallery-item" className=".col-12 .col-md-6 .col-lg-4"/>
                    <img src={img005} alt="gallery-item" className=".col-12 .col-md-6 .col-lg-4"/>
                    <img src={img006} alt="gallery-item" className=".col-12 .col-md-6 .col-lg-4"/>
                    <img src={img007} alt="gallery-item" className=".col-12 .col-md-6 .col-lg-4"/>
                    <img src={img008} alt="gallery-item" className=".col-12 .col-md-6 .col-lg-4"/>
                </div>
            </div>
        </div>
    )
}

function ContactForm(){

    return(
        <div className="side-content">
            <form action="" id="contact-form">
                <input type="text" id="fullName" className="formElement fullName" name="fullName" placeholder="Full name*" />
                <div className="contact-details">
                    <input type="email" id="email" className="formElement email" name="email" placeholder="Email*"/>
                    <input type="tel" id="email" className="formElement phone" name="phone" placeholder="Phone*"/>
                </div>
                <input type="text" id="subject" className="formElement subject" name="subject" placeholder="Subject*" />
                <textarea name="message" className="formElement message" id="message" form="contact-form"/>
                <button type="submit" form="contact-form" className="submit"><IoIosArrowRoundForward style={{fontSize:"2rem"}}/> Submit</button>
            </form>
            <div className="_canvas">
                <iframe title="Mutualism Location" width="100%" height="100%" id="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7306894141416!2d27.901096014767898!3d-26.237938771717218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a74869298cb7%3A0xa16106dc004dc86f!2s7166%20Vilakazi%20St%2C%20Orlando%20West%2C%20Soweto%2C%201804!5e0!3m2!1sen!2sza!4v1612825902319!5m2!1sen!2sza"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
            </div>
        </div>
    );
}
export {Contact as ContactMain, ContactForm as ContactSide}
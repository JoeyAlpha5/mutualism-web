import React from 'react';
import {SiInstagram} from 'react-icons/si'
import {IoIosArrowRoundForward} from "react-icons/io";
import img001 from '../../images/Contact/ID127817476_318500945791669_91@2x.png';

const Contact = ()=>{
    return(
        <div className="main-body-col-1">
            <div className="mid-content">
                <h1 className="caption animate__animated animate__fadeInUp" style={{color: "#46A16E"}}>Contact Us.</h1>
                <p className="body-text animate__animated animate__fadeInUp">
                    We’re empowering businesses through a new financing and <br/>
                    consulting strategy which brings successes to the small business <br/>
                    owners of South Africa. <br/>
                </p>
                <p className="body-text animate__animated animate__fadeInDown">
                    Discover what’s possible with community centered investment. <br/>
                </p>
                <h3 className="animate__animated animate__fadeInUp">Come see us.</h3>
                <div className="follow-theboxshoplifestyle animate__animated animate__fadeInUp">
                    <SiInstagram className="theboxshoplifestyle-instagram-label"/><div className="body-text theboxshoplifestyle-instagram-label">theboxshoplifestyle</div><div className="body-text theboxshoplifestyle-instagram">Follow</div>
                </div>
                <div className="gallery animate__animated animate__fadeInDown">
                    <img src={img001} alt="gallery-item" className="grid-item" width="100%" height="auto"/>
                    <img src={img001} alt="gallery-item" className="grid-item" width="100%" height="auto"/>
                    <img src={img001} alt="gallery-item" className="grid-item" width="100%" height="auto"/>
                    <img src={img001} alt="gallery-item" className="grid-item" width="100%" height="auto"/>
                    <img src={img001} alt="gallery-item" className="grid-item" width="100%" height="auto"/>
                    <img src={img001} alt="gallery-item" className="grid-item" width="100%" height="auto"/>
                    <img src={img001} alt="gallery-item" className="grid-item" width="100%" height="auto"/>
                    <img src={img001} alt="gallery-item" className="grid-item" width="100%" height="auto"/>
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
                <textarea name="message" className="formElement message" id="message" form="contact-form">Enter text here...</textarea>
                <button type="submit" form="contact-form" className="submit"><IoIosArrowRoundForward style={{fontSize:"2rem"}}/> Submit</button>
            </form>
            <div className="mb-60">
                <div className="_canvas">
                    <iframe title="Mutualism Location" width="107%" height="350" id="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12041.29829324266!2d28.028700246762575!3d-26.19995057185104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1612395369371!5m2!1sen!2sza"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                </div>
            </div>
        </div>
    );
}
export {Contact as ContactMain, ContactForm as ContactSide}
import React, {useState} from 'react';
import {SiInstagram} from 'react-icons/si'
import {IoIosArrowRoundForward} from "react-icons/io";
import Popup from 'reactjs-popup';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import Loader from 'react-loader-spinner';
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
                <div className="_canvas">
                    <iframe title="Mutualism Location" width="100%" height="100%" id="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7306894141416!2d27.901096014767898!3d-26.237938771717218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a74869298cb7%3A0xa16106dc004dc86f!2s7166%20Vilakazi%20St%2C%20Orlando%20West%2C%20Soweto%2C%201804!5e0!3m2!1sen!2sza!4v1612825902319!5m2!1sen!2sza"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                </div>
            </div>
        </div>
    )
}

function ContactForm(){
    const [Name,setName] = useState("");
    const [LastName,setLastName] = useState("");
    const [Email,setEmail] = useState("");
    const [Phone,setPhone] = useState("");
    const [Subject,setSubject] = useState("");
    const [Message,setMessage] = useState("");
    const [overlayText,setOverText] = useState("");
    const [formValid, setFormValid] = useState(false)

    // validate and send message
    const sendMessage = (e)=>{
        // prevent the page from reloading when submitting the form
        e.preventDefault();
        if(Name == ""){
            setOverText("Please enter your first name");
        }
        else if(LastName == ""){
            setOverText("Please enter your last name");
        }
        else if(Email == ""){
            setOverText("Please enter your email address");
        }
        else if(Phone == ""){
            setOverText("Please enter your phone number");
        }
        else if(Subject == ""){
            setOverText("Please select a reason for your inquiry");
        }
        else if(Message == ""){
            setOverText("Please enter a message");
        }
        else if(formValid == false){
            setOverText("Please confirm you're not a robot");
        }else{
            setOverText("");
            emailjs.sendForm('service_3kqkehw', 'template_9zak0xy', e.target, 'user_uORlriQ29CU6yAQeCL11S')
            .then((result) => {
                // console.log(result.text);
                setOverText("Message sent, the team will be in touch soon.");
                clearForm();
            }, (error) => {
                // console.log(error.text);
                setOverText("Unable to send message, please try again.");

            });
        }

    }

    const clearForm = ()=>{
        setName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
        setFormValid("");
    }

    // update recaptcha
    const onRecaptchaChange = (value)=>{
        console.log(value);
        console.log(typeof(value));
        console.log(value == "")
        if(value == ""){
            setFormValid(false);
        }else{
            setFormValid(true);
        }
    }

    return(
        <div className="side-content">
            <form action="?" id="contact-form" onSubmit={sendMessage}>
                <input value={Name} onChange={(val)=>{setName(val.target.value)}} type="text" id="fullName" className="formElement fullName" name="fullName" placeholder="First name*"/>
                <input value={LastName} onChange={(val)=>{setLastName(val.target.value)}} type="text" id="fullName" className="formElement fullName" name="lastName" placeholder="Last name*"/>
                <input value={Email} onChange={(val)=>{setEmail(val.target.value)}} type="email" id="email" className="formElement email" name="email" placeholder="Email*"/>
                <input value={Phone} onChange={(val)=>{setPhone(val.target.value)}} type="tel" id="email" className="formElement phone" name="phone" placeholder="Phone*"/>
                <select value={Subject} onChange={(val)=>{setSubject(val.target.value)}} id="subject" className="formElement subject" name="subject">
                    <option disabled>Reason for Inquiry</option>
                    <option>Financing</option>
                    <option>Join Our Team</option>
                    <option>Invest in SMMEs</option>
                    <option>Partnership</option>
                    <option>General Inquiry</option>
                    <option>Other</option>
                </select>
                {/* <input type="text" id="subject" className="formElement subject" name="subject" placeholder="Subject*" /> */}
                <textarea value={Message} onChange={(val)=>{setMessage(val.target.value)}} name="message" className="formElement message" id="message" form="contact-form" placeholder="Message*"/>
                <ReCAPTCHA
                    sitekey="6LdSVlEaAAAAAGHJ-lrPRKC411-z5rXbdlbMVdWN"
                    onChange={onRecaptchaChange}
                />
                <Popup className="form-submission-loader" modal trigger={<button type="submit" form="contact-form" className={formValid == true? "submit": "submit disabled"}><IoIosArrowRoundForward style={{fontSize:"2rem"}}/> Submit</button>}>
                    {overlayText == "" ? <Loader type="ThreeDots" color="#1C3319" height={100} width={100}/>:<p>{overlayText}</p>}
                </Popup>
            </form>
        </div>
    );
}
export {Contact as ContactMain, ContactForm as ContactSide}
import React, {useState} from 'react';
import Sidebar from "../../../Components/Sidebar";
import Menu from '../../../Components/Menubar';
import {IoIosArrowRoundForward} from "react-icons/io";
import Popup from 'reactjs-popup';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from 'react-loader-spinner';

const NewContact = ()=>{
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
        if(Name.trim() == ""){
            setOverText("Please enter your first name");
        }
        else if(LastName.trim() == ""){
            setOverText("Please enter your last name");
        }
        else if(Email.trim() == ""){
            setOverText("Please enter your email address");
        }
        else if(Phone.trim() == ""){
            setOverText("Please enter your phone number");
        }
        else if(Subject.trim() == ""){
            setOverText("Please select a reason for your inquiry");
        }
        else if(Message.trim() == ""){
            setOverText("Please enter a message");
        }
        else if(formValid == false){
            setOverText("Please confirm you're not a robot");
        }else{
            setOverText("");
            const apiUrl = `https://mutualism-test.herokuapp.com/api/contactForm`;
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `email=${Email.trim()}&name=${Name.trim()}&last_name=${LastName.trim()}&mobile=${Phone}&message=${Message}`
            }
            // 
            fetch(apiUrl, options)
            .then(res =>res.json())
            .then(re=>{
                setOverText("Message sent, the team will be in touch soon.");
            })
            .catch((err) => {
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
        // console.log(value);
        // console.log(typeof(value));
        // console.log(value == "")
        if(value == ""){
            setFormValid(false);
        }else{
            setFormValid(true);
        }
    }
    return(

        <>
            <Sidebar/>
            {/* menu */}
            <div className="NewAbtTopSec" id="NewAbtTopSec">
                <div className="container newAbtMenu">
                    <div id="homepageMenu">
                        <Menu/>
                    </div>
                </div>
            </div>

            {/* this the code for the top gray area with the text 'Contact us.' */}
            <div className="NewAbtMidSec">
                <div className="container newAbt">
                    <h1>Contact us.</h1>
                    <p>
                        Contact us using the contact form below.<br/>
                        A member from our team will reach out to you. 
                    </p>
                </div>
            </div>


            <div className="izandla">
                <div className="container izandlacont">
                    <div className="row izandla-row">
                            <div className="col-12 col-xl-6">
                                <h1 className="home-heading contact-about-heading  animate__animated animate__fadeInDown" style={{color:'white'}}>
                                    Contact <br/>
                                    Us.
                                </h1><br/>
                                <p className="body-text about_contact_p">
                                    We’re empowering businesses through a new financing and <br className="desktop-break"/>
                                    consulting strategy which brings successes to the small business <br className="desktop-break"/>
                                    owners of South Africa. <br className="desktop-break"/>
                                </p>
                                <p className="body-text about_contact_p">
                                    Discover what’s possible with community centered investment. <br className="desktop-break"/>
                                </p>
                                <h3 className="animate__animated animate__fadeInUp">Come see us.</h3>

                            </div>
                            <div className="col-12 col-xl-6">
                                <form action="?" id="contact-form" onSubmit={sendMessage}>
                                    <input value={Name} onChange={(val)=>{setName(val.target.value)}} type="text" id="fullName" className="formElement fullName contactPageInput" name="fullName" placeholder="First name*"/>
                                    <input value={LastName} onChange={(val)=>{setLastName(val.target.value)}} type="text" id="fullName" className="formElement fullName contactPageInput" name="lastName" placeholder="Last name*"/>
                                    <input value={Email} onChange={(val)=>{setEmail(val.target.value)}} type="email" id="email" className="formElement email contactPageInput" name="email" placeholder="Email*"/>
                                    <input value={Phone} onChange={(val)=>{setPhone(val.target.value)}} type="tel" id="email" className="formElement phone contactPageInput" name="phone" placeholder="Phone*"/>
                                    <select value={Subject} onChange={(val)=>{setSubject(val.target.value)}} id="subject" className="formElement subject contactPageInput" name="subject">
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
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="_canvas">
                    <iframe title="Mutualism Location" width="100%" height="100%" id="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5610527437793!2d28.04165681502878!3d-26.14585138346385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950dcd57eac3bf%3A0x2c4556de75b244a5!2sWeWork%20The%20Link%20-%20Coworking%20%26%20Office%20Space!5e0!3m2!1sen!2sza!4v1619086368347!5m2!1sen!2sza"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                </div>
            </div>
        </>
    )
}
export default NewContact
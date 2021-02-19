import React, {useState} from 'react';
import graphic from '../../images/About/graphic.svg';
import pathA from '../../images/About/Path 194.svg';
import pathB from '../../images/About/Path 195.svg';
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from '../../images/logo/mutualism-logo-white-no-text.svg';
import {Link} from "react-router-dom";
import Space from "../../Components/Jalome/Space";
import ReCAPTCHA from "react-google-recaptcha";
// import {useMailchimp, Status} from 'hooks';
import Button from '../../Components/Jalome/Button';
import Popup from 'reactjs-popup';


const About = ()=>{
    const [subscriber, setSubscriber] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: ""
    });

    const [formValid, setFormValid] = useState(false);
    // const {subscribe, status, error, value} = useMailchimp(apiUrl);

    //set input values
    const handleChange = event => {
        setSubscriber({
            ...subscriber,
            [event.target.name]: event.target.value
        })
    }

    //Toggle submit button attribute
    const toggleButtonEnabled = () => document
        .getElementById("newsletter-submit")
        .toggleAttribute("disabled");

    // update recaptcha
    const onRecaptchaChange = (value)=>{
        // console.log((value)? true: false)
        if(value){
            setFormValid(true);
            toggleButtonEnabled();
        }
    }

    // Validate the submission
    const validateSubmission = (e) =>{
        e.preventDefault();
        if (!subscriber.firstName.trim()) {
            setFormValid(false, ()=>console.log(formValid));
        }
        if (!subscriber.lastName.trim()){
            setFormValid(false, ()=>console.log(formValid));
        }
        if (!(subscriber.email.trim() || subscriber.confirmEmail.trim())){
            setFormValid(false, ()=>console.log(formValid));
        }
        if (formValid){
            if (!(subscriber.email.trim() === subscriber.confirmEmail.trim())){
                toggleButtonEnabled();
            }else{
                const subscribed = {
                    members:[
                        {
                            email_address: subscriber.email.trim(),
                            status: "subscribed",
                            merge_fields:{
                                FNAME: subscriber.firstName.trim(),
                                LNAME: subscriber.lastName.trim(),
                            }
                        }
                    ]
                };

                //Configurations
                const data = JSON.stringify(subscribed);
                const api_server = "us4";
                const list_id = "9bf9510a43";
                const api_key = "86463a1d5e5dc1657a4e7d1ac5907b62-us4";
                const apiUrl = `https://${api_server}.api.mailchimp.com/3.0/lists/${list_id}/members`;
                const options = {
                    method: "POST",
                    // mode: "no-cors",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `auth ${api_key}`
                        // "Authorization": "Basic " + btoa(`tomdesigns:${api_key}`
                    },
                    body: data
                }

                //API fetch method for mailchimp
                fetch(apiUrl, options)
                    .then(res => {console.log(res);
                    return res.text();})
                    .then(output => {
                        // output ? JSON.parse(output): {}
                        console.log(JSON.parse(output));
                    }).then((response) => {
                    console.info('fetch()', response);
                    alert("Success! You have been added to the mailing list.");
                    return response;})
                    .catch(err => console.log(err));
            }
        }else{
            toggleButtonEnabled();
        }
    };

    return(
        <div className="main-body-col-1">
            <div className="mid-content about-mid-content">
                <h1 className="home-heading contact-about-heading  animate__animated animate__fadeInDown" style={{color: "#46A16E"}}>
                    Izandla <br/>
                    Ziyagezana
                </h1>
                <p className="body-text about_contact_p">
                    At Mutualism, we believe that the key to a successful <br className="desktop-break"/>
                    partnership is a mutually beneficial relationship built <br className="desktop-break"/>
                    on mutual respect. Izandla Ziyagezana – One hand washes <br className="desktop-break"/>
                    another. A successful partnership requires dedication on <br className="desktop-break"/>
                    both sides and we will be as dedicated to your business as <br className="desktop-break"/>
                    we are to our own. <br className="desktop-break"/>
                </p>
            </div>

            <div className="path">
                    <div className="mid-content about-mid-content">
                    <img src={graphic} className="graphic image animate__animated animate__fadeInUp" alt="graphic" />
                    <br/><br/>
                    <p className="body-text about_contact_p">
                        “Give a man a fish, and he’ll eat for a day. Teach a man <br className="desktop-break"/>
                        to fish, and he’ll eat for a lifetime. What they didn’t say is, <br className="desktop-break"/>
                        “And it would be nice if you gave him a damn fishing rod.” <br className="desktop-break"/>
                        — This quote is from Trevor Noah’s (Legendary South African) <br className="desktop-break"/>
                        Born a Criminal… and it so accurately reflects our business <br className="desktop-break"/>
                        model because, beyond providing educating resources we provide <br className="desktop-break"/>
                        the physical asset to conduct and carry your own business. <br className="desktop-break"/>
                        We give you the fishing rod. <br className="desktop-break"/>
                    </p>
                    <h1 className="home-heading contact-about-heading here-to-help-you-grow" style={{color:"white"}}>
                        Here To  <br/>
                        Help You  <br/>
                        Grow <br/>
                    </h1>
                    <p className="body-text about_contact_p">
                        Mutualism is scaling with the goal to develop hundreds of SMMEs <br className="desktop-break"/>
                        across South Africa in the next 6 months. We are accepting applications <br className="desktop-break"/>
                        for financing soon — so please join our newsletter to stay in the loop. <br className="desktop-break"/>
                    </p>
                    <h2>Applications coming soon.</h2>
                    <Popup className="home-modal" id="subscribe-modal" trigger={<button className="animate__animated animate__fadeInUp"><IoIosArrowRoundForward size={30} style={{marginRight:10}}/>Learn more</button>} modal>
                        <div className="modal-Text">
                            <p className="modal-text-heading">Join our mailing list:</p>
                            <form action="?" id="newsletter-form" onSubmit={validateSubmission}>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={subscriber.firstName}
                                    onChange={handleChange}
                                    id="newsletter-firstname"
                                    className="formElement"
                                    placeholder="First Name"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={subscriber.lastName}
                                    onChange={handleChange}
                                    id="newsletter-lastname"
                                    className="formElement"
                                    placeholder="Last Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={subscriber.email}
                                    onChange={handleChange}
                                    id="newsletter-email"
                                    className="formElement"
                                    placeholder="Email Address"
                                    required
                                />
                                <input
                                    type="email"
                                    name="confirmEmail"
                                    value={subscriber.confirmEmail}
                                    onChange={handleChange}
                                    id="newsletter-email-confirm"
                                    className="formElement"
                                    placeholder="Confirm Email Address"
                                    required
                                />
                                <ReCAPTCHA
                                    sitekey="6LdSVlEaAAAAAGHJ-lrPRKC411-z5rXbdlbMVdWN"
                                    onChange={onRecaptchaChange}
                                />
                                <input type="submit"
                                       value="Submit"
                                       id="newsletter-submit"
                                       className="action-button"
                                       disabled
                                />
                                <br/>
                            </form>
                        </div>
                    </Popup>
                </div>
            </div>
            <div className="overlay-section-elements mid-content about-mid-content">
                <br/>
                <br/>
                <br/>
                <img src={logo} className="graphic logo-lg" alt="mutualism logo" style={{
                    "width": "40%",
                    "height": "auto"
                }}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="home-heading contact-about-heading" style={{color: "#46A16E"}}>Logo Explained</h1>
                <p className="body-text about_contact_p">
                    The rhino and the oxpecker symbolize the symbiotic relationship <br className="desktop-break"/>
                    of Mutualism —two parties coming together for the benefit of each<br className="desktop-break"/>
                    other. We strive to use an innovative financing model to support <br className="desktop-break"/>
                    people without access to traditional funding. Two unlikely partners <br className="desktop-break"/>
                    forming a strong relationship and supporting each other. <br className="desktop-break"/>
                </p>
                <h2 className="caption" style={{color: "#46A16E"}}>
                    “One hand washes another”
                </h2>
                <p className="body-text about_contact_p">
                    At Mutualism, we strive to be the teacher as well as the fishing<br className="desktop-break"/>
                    rod. We aim to help guide our entrepreneurs in their journeys, while <br className="desktop-break"/>
                    providing the necessary resources for them to be successful. <br className="desktop-break"/>
                </p>
                <Space/>
            </div>
        </div>
    )
}
function AboutInfo(){
    return(
        <div className="side-content">
            <p className="body-text about_contact_p">
                Mutualism was founded to appease the many social and 
                economic issues that have become so prevalent in 
                South Africa due to the recent atrocities of Apartheid. 
                Unfortunately, the repercussions of Apartheid are very 
                much prevalent today; South Africa has deeply rooted 
                issues with wealth disparity, cyclical poverty, and an 
                unequal financing system. <br/>
            </p>
            <p className="body-text about_contact_p">
                Our team works collaboratively to ensure that our business 
                partners are successful. We combine a variety of experience 
                and expertise in business strategy, finance, marketing, and 
                relationship-building to push our partners forward. 
            </p>
            <h5>Business Consulting</h5>
            <p className="body-text about_contact_p">
                We are a socially-minded financing firm designed to enhance 
                sustainable, locally owned businesses. 
            </p>
            <h5>Financing Opportunity</h5>
            <p className="body-text about_contact_p">
                We bridge the gap in funding  opportunities for Township-based 
                South Africans. 
            </p>
            <h5>Hands on Support</h5>
            <p className="body-text about_contact_p">
                We offer tailored support to offer guidance in areas of our partners’ 
                choosing. 
            </p>
            {/* <Link to="/contact" className="nav-item" style={{fontSize:"2rem", fontWeight:"lighter"}}><IoIosArrowRoundForward class="newsletter-arrow"/>Get in touch</Link> */}
        </div>
    );
}

export {About as AboutMain, AboutInfo as AboutSide};
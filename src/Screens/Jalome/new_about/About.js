import React, {useState, useEffect} from "react";
import Loader from "react-loader-spinner";
import Sidebar from "../../../Components/Sidebar";
import Menu from "../../../Components/Menubar";
import graphic from "../../../images/About/IzandlaGraphic-black-bg.svg";
import logo from "../../../images/logo/mutualism-logo-white-no-text.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import Popup from "reactjs-popup";
import ReCAPTCHA from "react-google-recaptcha";



const NewAbout = ()=>{

    useEffect(()=>{
        // change top bar when user scrolls
        document.addEventListener('scroll',()=>{
            var header = document.getElementById("NewAbtTopSec");
            if(header != null){
                if(window.scrollY > 10){
                    header.style.background = "#131313";
                    header.style.boxShadow = "0 1px 3px rgb(0 0 0 / 34%)";
                }else if(window.scrollY < 10){
                    header.style.background = null;
                    header.style.boxShadow = null;
                }
            }
        })
    },[])

    const [subscriber, setSubscriber] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: ""
    });

    //Validate form method
    const [formValid, setFormValid] = useState(false);
    // const {subscribe, status, error, value} = useMailchimp(apiUrl);

    // states for submission error and validation checks
    const [submissionComplete, setSubmissionComplete] = useState(false);
    const [submissionError, setSubmissionError] = useState("");

    // state for form status
    const [formStatus, setFormStatus] = useState("");

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
        if(value === "" || value === null){
            setFormValid(false);
            toggleButtonEnabled();
            // console.log(formValid);
        }else{
            setFormValid(true);
            toggleButtonEnabled();
            // console.log(formValid);
        }
    }

    const clearForm = () => {
        setSubscriber({
            firstName: "",
            lastName: "",
            email: "",
            confirmEmail: ""
        });
    }

    const resetForm = () => {
        // ensure the form is clear
        setFormStatus("");
        setSubmissionError("");
        setSubmissionComplete(false);
        setFormValid(false);
        clearForm();
    }

    const loading = ()=> {
        if(formStatus === ""){
            setFormStatus(<Loader type="Grid" color="#212529" height={20} width={20}/>);
        }
    }

    // Validate the submission
    const validateSubmission = (e) =>{
        e.preventDefault();
        loading();
        let message;
        if (!(subscriber.email.trim() === subscriber.confirmEmail.trim())) {
            // setFormValid(false);
            setSubmissionComplete(false);
            message = "Please fill in all the fields and make sure your email matches.";
            // setSubmissionError(message);
            setFormStatus(<div className="alert alert-danger" role="alert">{message}</div>);
            console.log(submissionError);
        }else{
            //Configurations
            const apiUrl = `https://mutualism-test.herokuapp.com/api/mailchimp`;
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `email=${subscriber.email.trim()}&name=${subscriber.firstName.trim()}&last_name=${subscriber.lastName.trim()}`
            }
            //API fetch method for mailchimp
            fetch(apiUrl, options)
                .then(res =>res.json())
                .then(re=>{
                    setSubmissionComplete(true);
                    setSubmissionError("");
                    message = "Thank you for your details, we'll be in touch.";
                    setFormStatus(<div className="alert alert-success" role="alert">{message}</div>);
                    clearForm();
                    // console.log(re);
                })
                .catch(err => {
                    setSubmissionError(err.message);
                    message = "Unsuccessful, please try again later. If the error persists contact site admin."
                    setFormStatus(<div className="alert alert-danger" role="alert">{message}</div>);
                });
        }
    };
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

            {/* this the code for the top gray area with the text 'About us.' */}
            <div className="NewAbtMidSec">
                <div className="container newAbt">
                    <h1>About us.</h1>
                    <p>
                        A new financing and consulting strategy bringing<br/>
                        power to the small business owners of South Africa.
                    </p>
                </div>
            </div>


            <div className="izandla">
                <div className="container izandlacont">
                    <div className="row izandla-row">
                        <div className="col-12 col-xl-6">
                            <h1 className="home-heading contact-about-heading  animate__animated animate__fadeInDown" style={{color:'white'}}>
                                Izandla <br/>
                                Ziyagezana
                            </h1><br/>
                            <img src={graphic} className="graphic image animate__animated animate__fadeInUp" alt="graphic" />
                        </div>
                        <div className="col-12 col-xl-6">
                            <p className="body-text about_contact_p">
                                At Mutualism, we believe that the key to a successful 
                                partnership is a mutually beneficial relationship built 
                                on mutual respect. Izandla Ziyagezana – One hand washes 
                                another. A successful partnership requires dedication on 
                                both sides and we will be as dedicated to your business as 
                                we are to our own. 
                            </p>
                            <p className="body-text about_contact_p">
                                At Mutualism, we strive to be the teacher as well as the fishing
                                rod. We aim to help guide our entrepreneurs in their journeys, while 
                                providing the necessary resources for them to be successful. 
                            </p>
                            <p className="body-text about_contact_p">
                                Mutualism is scaling with the goal to develop hundreds of SMMEs
                                across South Africa in the next 6 months. We are accepting applications
                                for financing soon — so please join our newsletter to stay in the loop.
                            </p>

                            <h2 style={{color: "#46A16E"}}>Sign up for our newsletter.</h2>
                            {/* mailing list pop up */}
                            <Popup className="home-modal form-modal-newsletter" id="subscribe-modal" onOpen={resetForm} trigger={<button className="animate__animated animate__fadeInUp"><IoIosArrowRoundForward size={30} style={{marginRight:10}}/>Stay informed.</button>} modal>
                                <div className="modal-Text">
                                    <p className="modal-text-heading" style={{fontWeight:'bold'}}>Join our mailing list:</p>
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
                                        <br/>
                                        <span style={(formStatus==="")?{display:"none"}:{textAlign:"center"}}>
                                            {formStatus}
                                        </span>
                                        <br/>
                                    </form>
                                </div>
                            </Popup>
                        </div>
                    </div>

                    <br/><br/>
                    <div className="row izandla-row">
                        <div className="col-12 col-xl-6">
                            <h1 className="home-heading contact-about-heading" style={{color: "#fff"}}>Logo Explained</h1>
                            <img src={logo} className="graphic logo-lg" alt="mutualism logo" style={{
                                "width": "40%",
                                "height": "auto"
                            }}/>
                        </div>
                        <div className="col-12 col-xl-6">
                            <p className="body-text about_contact_p">
                                The rhino and the oxpecker symbolize the symbiotic relationship 
                                of Mutualism —two parties coming together for the benefit of each
                                other. We strive to use an innovative financing model to support 
                                people without access to traditional funding. Two unlikely partners 
                                forming a strong relationship and supporting each other. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="secondHalf">
                <div className="container izandlacont">
                    <div className="row izandla-row">
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
                    </div>
                    <div className="row izandla-row">
                        <div className="col-12 col-xl-4 about-bottom">
                            <h5>Business Consulting</h5>
                            <p className="body-text about_contact_p">
                                We are a socially-minded financing firm designed to enhance 
                                sustainable, locally owned businesses. 
                            </p>
                        </div>
                        <div className="col-12 col-xl-4 about-bottom">
                            <h5>Financing Opportunity</h5>
                            <p className="body-text about_contact_p">
                                We bridge the gap in funding  opportunities for Township-based 
                                South Africans. 
                            </p>
                        </div>
                        <div className="col-12 col-xl-4 about-bottom">
                            <h5>Hands on Support</h5>
                            <p className="body-text about_contact_p">
                                We offer tailored support to offer guidance in areas of our partners’ 
                                choosing. 
                            </p>
                        </div>
                        <div className="col-12 col-xl-4"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewAbout
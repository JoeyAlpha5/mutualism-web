import React, {useState, useEffect} from "react";
import Loader from "react-loader-spinner";
import Sidebar from "../../../Components/Sidebar";
import Menu from "../../../Components/Menubar";
import Space from "../../../Components/Jalome/Space";
import graphic from "../../../images/About/IzandlaGraphic-black-bg.svg";
import logo from "../../../images/logo/mutualism-logo-white-no-text.svg";
import what from "../../../images/About/what-we-do.svg";
import why from "../../../images/About/why-de-do-it.svg";
import how from "../../../images/About/how-we-do-it.svg";
import Jonas from "../../../images/About/JonasZibiya-blackbg.svg";
import Luyanda from "../../../images/About/Luyanda-Nyembezi-blackbg.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import Popup from "reactjs-popup";
import ReCAPTCHA from "react-google-recaptcha";
import Slider from "react-slick";



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

    const settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        swipeToSlide: true,
        arrows: false
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

                            {/*<h2 style={{color: "#46A16E"}}>Sign up for our newsletter.</h2>*/}
                            {/*/!* mailing list pop up *!/*/}
                            {/*<Popup className="home-modal form-modal-newsletter" id="subscribe-modal" onOpen={resetForm} trigger={<button className="animate__animated animate__fadeInUp"><IoIosArrowRoundForward size={30} style={{marginRight:10}}/>Stay informed.</button>} modal>*/}
                            {/*    <div className="modal-Text">*/}
                            {/*        <p className="modal-text-heading" style={{fontWeight:'bold'}}>Join our mailing list:</p>*/}
                            {/*        <form action="?" id="newsletter-form" onSubmit={validateSubmission}>*/}
                            {/*            <input*/}
                            {/*                type="text"*/}
                            {/*                name="firstName"*/}
                            {/*                value={subscriber.firstName}*/}
                            {/*                onChange={handleChange}*/}
                            {/*                id="newsletter-firstname"*/}
                            {/*                className="formElement"*/}
                            {/*                placeholder="First Name"*/}
                            {/*                required*/}
                            {/*            />*/}
                            {/*            <input*/}
                            {/*                type="text"*/}
                            {/*                name="lastName"*/}
                            {/*                value={subscriber.lastName}*/}
                            {/*                onChange={handleChange}*/}
                            {/*                id="newsletter-lastname"*/}
                            {/*                className="formElement"*/}
                            {/*                placeholder="Last Name"*/}
                            {/*                required*/}
                            {/*            />*/}
                            {/*            <input*/}
                            {/*                type="email"*/}
                            {/*                name="email"*/}
                            {/*                value={subscriber.email}*/}
                            {/*                onChange={handleChange}*/}
                            {/*                id="newsletter-email"*/}
                            {/*                className="formElement"*/}
                            {/*                placeholder="Email Address"*/}
                            {/*                required*/}
                            {/*            />*/}
                            {/*            <input*/}
                            {/*                type="email"*/}
                            {/*                name="confirmEmail"*/}
                            {/*                value={subscriber.confirmEmail}*/}
                            {/*                onChange={handleChange}*/}
                            {/*                id="newsletter-email-confirm"*/}
                            {/*                className="formElement"*/}
                            {/*                placeholder="Confirm Email Address"*/}
                            {/*                required*/}
                            {/*            />*/}
                            {/*            <ReCAPTCHA*/}
                            {/*                sitekey="6LdSVlEaAAAAAGHJ-lrPRKC411-z5rXbdlbMVdWN"*/}
                            {/*                onChange={onRecaptchaChange}*/}
                            {/*            />*/}
                            {/*            <input type="submit"*/}
                            {/*                value="Submit"*/}
                            {/*                id="newsletter-submit"*/}
                            {/*                className="action-button"*/}
                            {/*                disabled*/}
                            {/*            />*/}
                            {/*            <br/>*/}
                            {/*            <br/>*/}
                            {/*            <span style={(formStatus==="")?{display:"none"}:{textAlign:"center"}}>*/}
                            {/*                {formStatus}*/}
                            {/*            </span>*/}
                            {/*            <br/>*/}
                            {/*        </form>*/}
                            {/*    </div>*/}
                            {/*</Popup>*/}
                        </div>
                    </div>
                    <Space/>
                    <div className="row izandla-row mobile-reverse-direction">
                        <div className="col-12 col-xl-6">
                            <h1 className="home-heading contact-about-heading" style={{color: "#fff"}}>Logo Explained</h1>
                            <p className="body-text about_contact_p">
                                The rhino and the oxpecker symbolize the symbiotic
                                relationship of Mutualism —two parties coming together
                                for the benefit of each other. We strive to use an innovative
                                financing model to support people without access to
                                traditional funding. Two unlikely partners forming a strong
                                relationship and supporting each other.
                            </p>
                        </div>
                        <div className="col-12 col-xl-6">
                            <img src={logo} className="graphic logo-lg" alt="mutualism logo" style={{
                                "width": "75%",
                                "height": "auto",
                            }}/>
                        </div>
                    </div>
                    <Space/>
                    <div className="row izandla-row">
                        <div className="col-12 col-xl-6">
                            <img src={what} className="graphic logo-lg" alt="mutualism logo" style={{
                                "width": "75%",
                                "height": "auto"
                            }}/>
                        </div>
                        <div className="col-12 col-xl-6">
                            <h1 className="home-heading contact-about-heading" style={{color: "#fff"}}>What We Do?</h1>
                            <p className="body-text about_contact_p">
                                Mutualism specializes in the development of Township SMMEs through
                                financing and consulting services.
                            </p>
                            <p className="body-text about_contact_p">
                                We keep ownership local so that money circulates within the township
                                economy and the community develops sustainably. Our hands-on consulting
                                services are used to help the business find consistent and long-lasting
                                growth.
                            </p>
                        </div>
                    </div>
                    <Space/>
                    <div className="row izandla-row mobile-reverse-direction">
                        <div className="col-12 col-xl-6">
                            <h1 className="home-heading contact-about-heading" style={{color: "#fff"}}>Why We
                                Do It?</h1>
                            <p className="body-text about_contact_p">
                                Townships (or Kasi’s) are communities that are the result of
                                racial atrocities from colonial rule and apartheid. South Africa
                                still has deeply engrained systemic flaws. The broken financing
                                system has left the Township entrepreneur and business
                                unsupported.
                            </p>
                            <p className="body-text about_contact_p">
                                We help support these entrepreneurs because we at Mutualism
                                hold the firm belief that great ideas and people are everywhere.
                            </p>
                        </div>
                        <div className="col-12 col-xl-6">
                            <img src={why} className="graphic logo-lg" alt="mutualism logo" style={{
                                "width": "75%",
                                "height": "auto"
                            }}/>
                        </div>
                    </div>
                    <Space/>
                    <div className="row izandla-row">
                        <div className="col-12 col-xl-6">
                            <img src={how} className="graphic logo-lg" alt="mutualism logo" style={{
                                "width": "75%",
                                "height": "auto"
                            }}/>
                        </div>
                        <div className="col-12 col-xl-6">
                            <h1 className="home-heading contact-about-heading" style={{color: "#fff"}}>How We
                                Do It?</h1>
                            <p className="body-text about_contact_p">
                                We support through a unique investing strategy called “Asset-Backed
                                Investing”.
                            </p>
                            <p className="body-text about_contact_p">
                                We provide essential assets for our partners to use as a stepping stone
                                for success.
                            </p>
                            <p className="body-text about_contact_p">
                                The asset we provide will be paid in monthly installments over a tailored
                                period of time. After the repayment period, the entrepreneur owns the asset
                                and 100% of their company. We then offer our consulting services to help
                                keep growth consistent.
                            </p>
                        </div>
                    </div>
                    <Space/>
                    <div style={{marginBottom: "50px"}}>
                        <h1 className="home-heading contact-about-heading" style={{color: "#fff"}}>Testimonials</h1>
                    </div>
                    <div className="row izandla-row">
                        <div className="testimonials-section">
                            <Slider {...settings}>
                                <div>
                                    <div className="row about-testimonials">
                                        <div className="col-sm-12 col-md-6 col-xl-4">
                                            <div className="testimonial-profile-pic-wrapper">
                                                <img src={Luyanda} alt="Luyanda" className="testimonial-profile-pic"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-xl-8">
                                            <h5>Luyanda Nyembezi</h5><br/>
                                            <p>Supa Klin Detergents</p>
                                            <p>Asset Purchased: Mixing Machine</p>
                                            <p>Asset Value: R42 000</p>
                                            <p>All Supa Klin Detergents' employees are from the local
                                                community and were unemployed before Luyanda started his
                                                business in the township.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row about-testimonials">
                                        <div className="col-sm-12 col-md-6 col-xl-4">
                                            <div className="testimonial-profile-pic-wrapper">
                                                <img src={Jonas} alt="Jonas" className="testimonial-profile-pic"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-xl-8">
                                            <h5>Business Consulting</h5><br/>
                                            <p>CEO & Founder</p>
                                            <p>House of Branding - 2020</p>
                                            <p>"I managed to secure asset funding from Mutualism, and
                                                we managed to get a new printing machine delivered to us,
                                                and now my business is actually growing."</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <Space/>
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
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewAbout
import React from 'react';
import Sidebar from "../../../Components/Sidebar";
import Menu from '../../../Components/Menubar';
import graphic from '../../../images/About/graphic.svg';
import logo from '../../../images/logo/mutualism-logo-white-no-text.svg';
import { IoIosArrowRoundForward } from "react-icons/io";


const NewAbout = ()=>{
    return(
        <>
            <Sidebar/>
            {/* menu */}
            <div className="NewAbtTopSec">
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
                                “Give a man a fish, and he’ll eat for a day. Teach a man 
                                to fish, and he’ll eat for a lifetime. What they didn’t say is, 
                                “And it would be nice if you gave him a damn fishing rod.” 
                                — This quote is from Trevor Noah’s (Legendary South African) 
                                Born a Criminal… and it so accurately reflects our business 
                                model because, beyond providing educating resources we provide 
                                the physical asset to conduct and carry your own business. 
                                We give you the fishing rod. 
                            </p>
                            <p className="body-text about_contact_p">
                                Mutualism is scaling with the goal to develop hundreds of SMMEs
                                across South Africa in the next 6 months. We are accepting applications
                                for financing soon — so please join our newsletter to stay in the loop.
                            </p>

                            <h2 style={{color: "#46A16E"}}>Applications coming soon.</h2>
                            <button className="animate__animated animate__fadeInUp"><IoIosArrowRoundForward size={30} style={{marginRight:10}}/>Learn more</button>
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
                            <h2 className="caption" style={{color: "#46A16E"}}>
                                “One hand washes another”
                            </h2>
                            <p className="body-text about_contact_p">
                                At Mutualism, we strive to be the teacher as well as the fishing<br className="desktop-break"/>
                                rod. We aim to help guide our entrepreneurs in their journeys, while <br className="desktop-break"/>
                                providing the necessary resources for them to be successful. <br className="desktop-break"/>
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
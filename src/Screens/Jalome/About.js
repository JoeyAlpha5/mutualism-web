import React from 'react';
import graphic from '../../images/About/graphic.svg';
import pathA from '../../images/About/Path 194.svg';
import pathB from '../../images/About/Path 195.svg';
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from '../../images/logo/mutualism-logo-white-no-text.svg';
import {Link} from "react-router-dom";
import Space from "../../Components/Jalome/Space";
import Button from '../../Components/Jalome/Button';
import Popup from 'reactjs-popup';


const About = ()=>{
    return(
        <div className="main-body-col-1">
            <div className="mid-content about-mid-content">
                <h1 className="home-heading contact-about-heading  animate__animated animate__fadeInDown" style={{color: "#46A16E"}}>
                    Izandla <br/>
                    Ziyagezana
                </h1>
                {/*<h2 className="caption animate__animated animate__fadeInDown" style={{color: "#46A16E"}}>*/}
                {/*    “One hand washes another”*/}
                {/*</h2>*/}
                {/*<p className="body-text">*/}
                {/*    This proverb reflects our business model in short: <br className="desktop-break"/>*/}
                {/*    “Give a man a fish, and you’ll feed him for a day. <br className="desktop-break"/>*/}
                {/*    Teach a man to fish, and you’ve fed him for a lifetime.” <br className="desktop-break"/>*/}
                {/*    Mutualism strives to educate partners through hands <br className="desktop-break"/>*/}
                {/*    on learning, and many other resources. We want to <br className="desktop-break"/>*/}
                {/*    pass on business acumen so thousands of small <br className="desktop-break"/>*/}
                {/*    business owners can flourish. <br/>*/}
                {/*</p>*/}
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
                    {/*<p className="body-text">*/}
                    {/*    Mutualism is a socially-minded financing firm designed to <br className="desktop-break"/>*/}
                    {/*    support township based entrepreneurs and small businesses <br className="desktop-break"/>*/}
                    {/*    with the goal of enhancing sustainable, locally owned businesses. <br className="desktop-break"/>*/}
                    {/*</p>*/}
                    {/*<p className="body-text">*/}
                    {/*    Get to know our firm’s team that is dedicated to supporting entrepreneurs  <br className="desktop-break"/>*/}
                    {/*    and small businesses. <br className="desktop-break"/>*/}
                    {/*</p>*/}
                    <h2>Applications coming soon.</h2>
                    <Popup className="home-modal" trigger={<button className="animate__animated animate__fadeInUp"><IoIosArrowRoundForward size={30} style={{marginRight:10}}/>Learn more</button>} modal>
                        <div className="modal-Text">
                            <p className="modal-text-heading">Join our mailing list:</p>
                            <form action="" id="" onSubmit="">
                                <input type="email" name="email" id="newsletter-email" className="formElement" placeholder="Email Address"/>
                                <input type="email" name="confirmEmail" id="newsletter-email" className="formElement" placeholder="Confirm Email Address"/>
                                <input type="submit" value="Submit" className="action-button" /><br/>
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
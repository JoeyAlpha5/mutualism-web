import React from 'react';
import graphic from '../../images/About/graphic.svg';
import pathA from '../../images/About/Path 194.svg';
import pathB from '../../images/About/Path 195.svg';
import { IoIosArrowRoundForward } from "react-icons/io";
import logolg from '../../images/logo/mutualism_logo_large.png';
import {Link} from "react-router-dom";
import Space from "../../Components/Jalome/Space";
import Button from '../../Components/Jalome/Button';


const About = ()=>{
    return(
        <div className="main-body-col-1">
            <div className="mid-content about-mid-content">
                <h1 className="home-heading contact-about-heading  animate__animated animate__fadeInDown" style={{color: "#46A16E"}}>
                    Izandla <br/>
                    Ziyagezana
                </h1>
                <h2 className="caption animate__animated animate__fadeInDown" style={{color: "#46A16E"}}>
                    “One hand washes another”
                </h2>
                <p className="body-text">
                    This proverb reflects our business model in short: <br/>
                    “Give a man a fish, and you’ll feed him for a day. <br/>
                    Teach a man to fish, and you’ve fed him for a lifetime.” <br/>
                    Mutualism strives to educate partners through hands <br/>
                    on learning, and many other resources. We want to <br/>
                    pass on business acumen so thousands of small <br/>
                    business owners can flourish. <br/>
                </p>
            </div>

            <div className="path">
                    <div className="mid-content about-mid-content">
                    <img src={graphic} className="graphic image animate__animated animate__fadeInUp" alt="graphic" />
                    <br/><br/>
                    <p className="body-text">
                        “Give a man a fish, and he’ll eat for a day. Teach a man <br/>
                        to fish, and he’ll eat for a lifetime. What they didn’t say is, <br/>
                        “And it would be nice if you gave him a damn fishing rod.” <br/>
                        — This quote is from Trevor Noah’s (Legendary South African) <br/>
                        Born a Criminal… and it so accurately reflects our business <br/>
                        model because, beyond providing educating resources we provide <br/>
                        the physical asset to conduct and carry your own business. <br/>
                        We give you the fishing rod. <br/>
                    </p>
                    <h1 className="home-heading contact-about-heading here-to-help-you-grow" style={{color:"white"}}>
                        Here To  <br/>
                        Help You  <br/>
                        Grow <br/>
                    </h1>
                    <p className="body-text">
                        Mutualism is a socially-minded financing firm designed to <br/>
                        support township based entrepreneurs and small businesses <br/>
                        with the goal of enhancing sustainable, locally owned businesses. <br/>
                    </p>
                    <p className="body-text">
                        Get to know our firm’s team that is dedicated to supporting entrepreneurs  <br/>
                        and small businesses. <br/>
                    </p>
                    <h2>Applications coming soon.</h2>
                    <Button text="Learn more"/>
                </div>
            </div>
            <div className="overlay-section-elements mid-content about-mid-content">
                <br/>
                <br/>
                <br/>
                <img src={logolg} className="graphic logo-lg" alt="mutualism logo"/>
                <h1 className="home-heading contact-about-heading" style={{color: "#46A16E"}}>Logo Explained</h1>
                <p className="body-text">
                    Our logo is a rhino and an oxpecker — this symbolizes the <br/>
                    symbiotic relationship of mutualism, where two different <br/>
                    parties benefit with each other. <br/>
                </p>
                <Space/>
            </div>
        </div>
    )
}
function AboutInfo(){
    return(
        <div className="side-content">
            <p className="body-text">
                Mutualism was founded to appease the many social and <br/>
                economic issues that have become so prevalent in <br/>
                South Africa due to the recent atrocities of Apartheid. <br/>
                Unfortunately, the repercussions of Apartheid are very <br/>
                much prevalent today; South Africa has deeply rooted <br/>
                issues with wealth disparity, cyclical poverty, and an <br/>
                unequal financing system. <br/>
            </p>
            <p className="body-text">
                Our team works collaboratively to ensure that our business <br/>
                partners are successful. We combine a variety of experience <br/>
                and expertise in business strategy, finance, marketing, and <br/>
                relationship-building to push our partners forward. <br/>
            </p>
            <h5>Business Consulting</h5>
            <p className="body-text">
                We are a socially-minded financing firm designed to enhance <br/>
                sustainable, locally owned businesses. <br/>
            </p>
            <h5>Financing Opportunity</h5>
            <p className="body-text">
                We bridge the gap in funding  opportunities for Township-based <br/>
                South Africans. <br/>
            </p>
            <h5>Hands on Support</h5>
            <p className="body-text">
                We offer tailored support to offer guidance in areas of our partners’ <br/>
                choosing. <br/>
            </p>
            {/* <Link to="/contact" className="nav-item" style={{fontSize:"2rem", fontWeight:"lighter"}}><IoIosArrowRoundForward class="newsletter-arrow"/>Get in touch</Link> */}
        </div>
    );
}

export {About as AboutMain, AboutInfo as AboutSide};
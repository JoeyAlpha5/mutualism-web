import React from 'react';
import graphic from '../../images/About/graphic.svg';
import pathA from '../../images/About/Path 194.svg';
import pathB from '../../images/About/Path 195.svg';
import { IoIosArrowRoundForward } from "react-icons/io";
import logolg from '../../images/logo/mutualism_logo.png';
import {Link} from "react-router-dom";

const About = ()=>{
    return(
        <div className="main-body-col-1">
            <div className="mid-content">
                <h1 className="caption" style={{color: "#46A16E"}}>Izandla Ziyagezana</h1>
                <h2 className="caption" style={{color: "#46A16E"}}>“One hand washes another”</h2>
                <p className="body-text">This proverb reflects our business model in short:
                    “Give a man a fish, and you’ll feed him for a day.
                    Teach a man to fish, and you’ve fed him for a lifetime.”
                    Mutualism strives to educate partners through hands
                    on learning, and many other resources. We want to
                    pass on business acumen so thousands of small
                    business owners can flourish. </p>
                <div className="overlay-section-main">
                    <div className="overlay-section-elements">
                        <img src={graphic} className="graphic image" alt="graphic" />
                        <p className="body-text">“Give a man a fish, and he’ll eat for a day. Teach a man
                            to fish, and he’ll eat for a lifetime. What they didn’t say is,
                            “And it would be nice if you gave him a damn fishing rod.”
                            — This quote is from Trevor Noah’s (Legendary South African)
                            Born a Criminal… and it so accurately reflects our business
                            model because, beyond providing educating resources we provide
                            the physical asset to conduct and carry your own business.
                            We give you the fishing rod. </p>
                        <h1 className="caption">Here To Help You Grow</h1>
                        <p className="body-text">Mutualism is a socially-minded financing firm designed to
                            support township based entrepreneurs and small businesses
                            with the goal of enhancing sustainable, locally owned businesses.</p>
                        <p className="body-text">Get to know our firm’s team that is dedicated to supporting entrepreneurs
                            and small businesses. </p>
                        <h2 className="caption">Applications coming soon.</h2>
                        <button className="newsletter"><IoIosArrowRoundForward className="newsletter-arrow"/>Join Newsletter</button><br/>
                    </div>
                    <img src={pathA} className="graphic shape" alt="graphic shape"/>
                    <img src={pathB} className="graphic shape" alt="graphic shape"/>
                </div>
                <img src={logolg} className="graphic logo-lg" alt="mutualism logo"/>
                <h1 className="caption" style={{color: "#46A16E"}}>Logo Explained</h1>
                <p className="body-text">Our logo is a rhino and an oxpecker — this symbolizes the
                    symbiotic relationship of mutualism, where two different
                    parties benefit with each other.</p>
            </div>
        </div>
    )
}
function AboutInfo(){
    return(
        <div className="side-content">
            <p className="body-text">Mutualism was founded to appease the many social and
                economic issues that have become so prevalent in
                South Africa due to the recent atrocities of Apartheid.
                Unfortunately, the repercussions of Apartheid are very
                much prevalent today; South Africa has deeply rooted
                issues with wealth disparity, cyclical poverty, and an
                unequal financing system.</p>
            <p className="body-text">Our team works collaboratively to ensure that our business
                partners are successful. We combine a variety of experience
                and expertise in business strategy, finance, marketing, and
                relationship-building to push our partners forward.</p>
            <h3>Business Consulting</h3>
            <p className="body-text">We are a socially-minded financing firm designed to enhance
                sustainable, locally owned businesses.</p>
            <h3>Financing Opportunity</h3>
            <p className="body-text">We bridge the gap in funding  opportunities for Township-based
                South Africans</p>
            <h3>Hands on Support</h3>
            <p className="body-text">We offer tailored support to offer guidance in areas of our partners’
                choosing.</p>
            <Link to="/contact" className="nav-item" style={{fontSize:"2rem", fontWeight:"lighter"}}><IoIosArrowRoundForward class="newsletter-arrow"/>Get in touch</Link>
        </div>
    );
}

export {About as AboutMain, AboutInfo as AboutSide};
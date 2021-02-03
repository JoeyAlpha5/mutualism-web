import React from 'react';
import graphic from '../../images/About/graphic.svg';
import pathA from '../../images/About/Path 194.svg';
import pathB from '../../images/About/Path 195.svg';
import { IoIosArrowRoundForward } from "react-icons/io";
import logolg from '../../images/logo/mutualism_logo.png';

const About = ()=>{
    return(
        <div className="main-body-col-1">
            <div className="mid-content">
                <h1 className="caption">Izandla Ziyagezana</h1>
                <h2 className="caption">“One hand washes another”</h2>
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
                <h1 className="caption">Logo Explained</h1>
                <p className="body-text">Our logo is a rhino and an oxpecker — this symbolizes the
                    symbiotic relationship of mutualism, where two different
                    parties benefit with each other.</p>
            </div>
        </div>
    )
}
export default About
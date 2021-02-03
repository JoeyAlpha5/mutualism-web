import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

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

export default AboutInfo;
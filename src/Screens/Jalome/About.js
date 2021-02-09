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
                    both sides and wewill be as dedicated to your business as <br className="desktop-break"/>
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
                            <p className="modal-text-heading">What We Do:</p>
                            <p className="modal-text-info">
                                Mutualism specializes in the development of Township SMMEs through financing<br className="desktop-break"/>
                                and consulting services. We keep ownership local so that money circulates within<br className="desktop-break"/>
                                the township economy and the community develops sustainably. Our hands-on <br className="desktop-break"/>
                                consulting services are used to help the business find consistent and <br className="desktop-break"/>
                                long-lasting growth.<br className="desktop-break"/>
                            </p>

                            <p className="modal-text-heading">Why We Do:</p>
                            <p className="modal-text-info">
                                Townships (or Kasi’s) are communities that are the result of racial atrocities from<br className="desktop-break"/>
                                colonial rule and apartheid. South Africa still has deeply engrained systemic flaws.<br className="desktop-break"/>
                                The broken financing system has left the Township entrepreneur and business <br className="desktop-break"/>
                                unsupported. We help support these entrepreneurs because we at mutualism hold <br className="desktop-break"/>
                                the firm belief that great ideas and people are everywhere.<br className="desktop-break"/>
                            </p>

                            <p className="modal-text-heading">How We Do It:</p>
                            <p className="modal-text-info">
                                We support through a unique investing strategy called “Asset-Backed Investing”. <br className="desktop-break"/>
                                We provide essential assets for our partners to use as a steppingstone for success.<br className="desktop-break"/>
                                The asset we provide will be paid in monthly installments over a tailored period<br className="desktop-break"/>
                                of time. After the repayment period, the entrepreneur owns the asset and 100% of<br className="desktop-break"/>
                                their company. We then offer our consulting services to help keep growth <br className="desktop-break"/>
                                consistent.<br className="desktop-break"/>
                            </p>

                            <p className="modal-text-heading">How You Can Get Involved:</p>
                            <p className="modal-text-info">
                                We are always looking for great ideas and great people. Tell your friends about<br className="desktop-break"/>
                                Mutualism and shop at your local small businesses. If you are an entrepreneur,<br className="desktop-break"/>
                                join our newsletter and look out for the next round of funding. We look forward<br className="desktop-break"/>
                                to hearing from you.<br className="desktop-break"/>
                            </p>
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
                    other. We strive to use an innovative financing model to support<br className="desktop-break"/>
                    people without access to traditional funding. Two unlikely partners<br className="desktop-break"/>
                    forming a strong relationship and supporting each other. <br className="desktop-break"/>
                </p>
                <h2 className="caption" style={{color: "#46A16E"}}>
                    “One hand washes another”
                </h2>
                <p className="body-text about_contact_p">
                    At Mutualism, we strive to be the teacher as well as the fishing<br className="desktop-break"/>
                    rod. We aim to help guide our entrepreneurs in their journeys, while<br className="desktop-break"/>
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
                Mutualism was founded to appease the many social and <br className="desktop-break"/>
                economic issues that have become so prevalent in <br className="desktop-break"/>
                South Africa due to the recent atrocities of Apartheid. <br className="desktop-break"/>
                Unfortunately, the repercussions of Apartheid are very <br className="desktop-break"/>
                much prevalent today; South Africa has deeply rooted <br className="desktop-break"/>
                issues with wealth disparity, cyclical poverty, and an <br className="desktop-break"/>
                unequal financing system. <br/>
            </p>
            <p className="body-text about_contact_p">
                Our team works collaboratively to ensure that our business <br className="desktop-break"/>
                partners are successful. We combine a variety of experience <br className="desktop-break"/>
                and expertise in business strategy, finance, marketing, and <br className="desktop-break"/>
                relationship-building to push our partners forward. <br className="desktop-break"/>
            </p>
            <h5>Business Consulting</h5>
            <p className="body-text about_contact_p">
                We are a socially-minded financing firm designed to enhance <br className="desktop-break"/>
                sustainable, locally owned businesses. <br className="desktop-break"/>
            </p>
            <h5>Financing Opportunity</h5>
            <p className="body-text about_contact_p">
                We bridge the gap in funding  opportunities for Township-based <br className="desktop-break"/>
                South Africans. <br className="desktop-break"/>
            </p>
            <h5>Hands on Support</h5>
            <p className="body-text about_contact_p">
                We offer tailored support to offer guidance in areas of our partners’ <br className="desktop-break"/>
                choosing. <br className="desktop-break"/>
            </p>
            {/* <Link to="/contact" className="nav-item" style={{fontSize:"2rem", fontWeight:"lighter"}}><IoIosArrowRoundForward class="newsletter-arrow"/>Get in touch</Link> */}
        </div>
    );
}

export {About as AboutMain, AboutInfo as AboutSide};
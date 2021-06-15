/*This module is no longer needed, being kept as backup. The elements are now rendered in Home component*/
import React from 'react';
import HomeBottom  from '../Components/Jalome/HomeBottom';
import Popup from 'reactjs-popup';
import Space from '../Components/Jalome/Space';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";


function Main(props){
    return(
        <div className="main-body-col-1" id={props.page == "home"? "main-homepage-content":""}>
            <div className="mid-content home-mid-content">
                <h1 className="main_heading home-heading animate__animated animate__fadeInDown">
                    Empowering<br/>
                    South Africa's<br/>
                    Entrepreneurs.
                </h1>
                <p className="main_text animate__animated animate__fadeInUp">
                    A new financing and consulting strategy bringing<br className="desktop-break"/> 
                    power to the small business owners of South Africa. 
                </p>
                
                {/* apply now button takes you to the application */}
                <button onClick={()=>window.open('https://app.mutualism.co.za/')} className="animate__animated animate__fadeInUp"><IoIosArrowRoundForward size={30} style={{marginRight:10}}/>Apply now</button>
                
                {/* <Popup className="home-modal" trigger={<button className="animate__animated animate__fadeInUp"><IoIosArrowRoundForward size={30} style={{marginRight:10}}/>Learn more</button>} modal closeOnDocumentClick>

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
                                The asset we provide will be paid in monthly installments over a tailored period <br className="desktop-break"/>
                                of time. After the repayment period, the entrepreneur owns the asset and 100% of <br className="desktop-break"/>
                                their company. We then offer our consulting services to help keep growth <br className="desktop-break"/>
                                consistent.<br className="desktop-break"/>
                            </p>

                            <p className="modal-text-heading">How You Can Get Involved:</p>
                            <p className="modal-text-info">
                                We are always looking for great ideas and great people. Tell your friends about <br className="desktop-break"/>
                                Mutualism and shop at your local small businesses. If you are an entrepreneur, <br className="desktop-break"/>
                                join our newsletter and look out for the next round of funding. We look forward <br className="desktop-break"/>
                                to hearing from you.<br className="desktop-break"/>
                            </p>
                    </div>

                </Popup> */}
                
                <Space/>
                <h1 className="home-heading">
                    Providing<br/>
                    For Mzansi's<br/>
                    Business<br/>
                    Owners.
                </h1>
                <p className="main_text ">
                    Providing for costumers across a Variety Of South African Cities. <br className="desktop-break"/>
                    Mutualism’s new model to launch and grow entrepreneurship in South Africa.
                </p>
                <ul className="">
                    <li className="stats-list"><div>1</div><p>50% Female partners</p></li>
                    <li className="stats-list"><div>2</div><p>R75 000 average investment size</p></li>
                    <li className="stats-list"><div>3</div><p>23 Months average repayment period</p></li>
                    <li className="stats-list"><div>4</div><p>21 yrs/old - Youngest partner</p></li>
                </ul>
                <Space/>
                <h1 className="home-heading ">
                    Izandla<br/>
                    Ziyagezana
                </h1>
                <h3 className="">
                    “One hand washes another”
                </h3>
                <Link to="/about"><button className="animate__animated animate__fadeInUp"><IoIosArrowRoundForward size={30} style={{marginRight:10}}/>Learn more</button></Link>
                {/* <p className="main_text ">
                    This tagline adopts what epitomizes Mutualism in a form of an<br className="desktop-break"/>
                    African proverb. This expresses the idea that mutual cooperation can<br className="desktop-break"/>
                    help both parties. The campaign comms logo symbol will be mainly<br className="desktop-break"/>
                    driven by an image of an oxpecker ,which metaphorically reflects a<br className="desktop-break"/>
                    symbiotic relationship between an investor and a supported smme.<br className="desktop-break"/>
                </p> */}
            </div>
            <HomeBottom/>
        </div>
    );
}
export default Main
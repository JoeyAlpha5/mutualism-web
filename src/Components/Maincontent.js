/*This module is no longer needed, being kept as backup. The elements are now rendered in Home component*/
import React from 'react';
import HomeBottom  from '../Components/Jalome/HomeBottom';
import Popup from 'reactjs-popup';
import Space from '../Components/Jalome/Space';
import { IoIosArrowRoundForward } from "react-icons/io";

function Main(props){
    return(
        <div className="main-body-col-1" id={props.page == "home"? "main-homepage-content":""}>
            <div className="mid-content">
                <h1 className="main_heading home-heading animate__animated animate__fadeInDown">
                    Empowering<br/>
                    South Africa's<br/>
                    Entrepreneurs.
                </h1>
                <p className="main_text animate__animated animate__fadeInUp">
                    A new financing and consulting strategy bringing<br/> 
                    power to the small business owners of South Africa. 
                </p>
                
                
                <Popup className="home-modal" trigger={<button className="animate__animated animate__fadeInUp"><IoIosArrowRoundForward size={30} style={{marginRight:10}}/>Learn more</button>} modal closeOnDocumentClick>
                    <div className="modal-heading">
                        <p className="overlay-text">A new modal</p>
                        <h4>How We Help Businesses Thrive</h4>
                    </div>

                    <div className="modal-Text">
                        <p class="modal-text-heading">Capital Investment</p>
                        <p className="modal-text-info">
                            We provide capital in the form of assets essential to the business operation.<br/> 
                            These assets belong to Mutualism until the business can pay back the principal. <br/>
                            Once the assets are paid back, ownership of the assets are transferred to the<br/> investee.
                        </p>

                        <p class="modal-text-heading">Empowering Ownership</p>
                        <p className="modal-text-info">
                            Once the assets are paid back, ownership of the asset is transferred to the<br/> investee.
                            Mutualism’s model of “asset-backed investment” mitigates risk for<br/> our partners.
                        </p>

                        <p class="modal-text-heading">Business Consulting</p>
                        <p className="modal-text-info">
                            Our hands-on consulting ensures that we properly equip our partners with skills<br/>  for years of
                            success. We approach consulting through an integrated approach that<br/> addresses a business 
                            needs to drive sustainability, community engagement,<br/> product quality, marketing and sales.
                        </p>

                        <p class="modal-text-heading">Continued Support</p>
                        <p className="modal-text-info">
                            Mutualism builds relationships with its partners to ensure long-term success.<br/> Our mission to
                            foster community growth guides our strategy. We provide ongoing<br/> support for partners to
                            improve business operations and efficiency.
                        </p>
                    </div>

                </Popup>
                
                <Space/>
                <h1 className="home-heading">
                    Providing<br/>
                    For Mzansi's<br/>
                    Business<br/>
                    Owners.
                </h1>
                <p className="main_text ">
                    Providing for thousands of costumers across a Variety Of South African Cities.<br/>
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
                <p className="main_text ">
                    This tagline adopts what epitomizes Mutualism in a form of an<br/>
                    African proverb. This expresses the idea that mutual cooperation can<br/>
                    help both parties. The campaign comms logo symbol will be mainly<br/>
                    driven by an image of an oxpecker ,which metaphorically reflects a<br/>
                    symbiotic relationship between an investor and a supported smme.<br/>
                </p>
            </div>
            <HomeBottom/>
        </div>
    );
}
export default Main
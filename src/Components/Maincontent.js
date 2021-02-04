/*This module is no longer needed, being kept as backup. The elements are now rendered in Home component*/
import React from 'react';
import Button from '../Components/Jalome/Button';
import HomeBottom  from '../Components/Jalome/HomeBottom';
import Space from '../Components/Jalome/Space';
function Main(props){
    return(
        <div className="main-body-col-1" id={props.page == "home"? "main-homepage-content":""}>
            <div className="mid-content">
                <h1 className="home-heading animate__animated animate__fadeInDown top">
                    Empowering<br/>
                    South Africa's<br/>
                    Entrepreneurs.
                </h1>
                <p className="main_text animate__animated animate__fadeInUp">
                    A new financing and consulting strategy bringing<br/> 
                    power to the small business owners of South Africa. 
                </p>
                <Button className="action-button" text={"Learn more"}/>
                <Space/>
                <h1 className="home-heading ">
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
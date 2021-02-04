import React from 'react';
import Sidebar from "../../Components/Sidebar";
import Menu from "../../Components/Menubar";
import {Link} from "react-router-dom";
import {IoIosArrowRoundForward} from "react-icons/io";

const Home = ()=>{
    return (
        <div className="main">
            <div className="overlay">
                <div className="container outter-container">
                    <div className="container">
                        <Sidebar/>
                        <div className="main-body-col-1" id="main-homepage-content">
                            <div className="mid-content">
                                {/*All Content for the Mainpanel of the home page can be placed here*/}
                                test
                            </div>
                        </div>
                        <div className="main-body-col-2" id="main-homepage-content">
                            <Menu/>
                            <div className="side-content">
                                {/*All content for the sidepanel of the home page can be placed here*/}
                                Side Content
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
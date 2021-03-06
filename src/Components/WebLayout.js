import React, {useEffect} from 'react';
import Sidebar from "./Sidebar";
import {ContactMain, ContactSide} from '../Screens/Jalome/Contact';
import {AboutMain, AboutSide} from "../Screens/Jalome/About";
import Home from "../Screens/Jalome/Home";
import Menu from "./Menubar";

function WebLayout(props) {

    const renderContent = ()=>{
        console.log(props.page);
        if(props.page === "contact"){
            return (
                <div className="shader">
                    <div className="container">
                        <Sidebar/>
                        <div className="content-area">
                            <ContactMain/>
                            <div className="main-body-col-2">
                                <Menu/>
                                <ContactSide/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else if(props.page === "about"){
            return (
                <div className="shader">
                    <div className="container">
                        <Sidebar/>
                        <div className="content-area">
                            <AboutMain/>
                            <div className="main-body-col-2">
                                <Menu/>
                                <AboutSide/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else{
            return <Home page={"home"}/>
        }
    }

    return (
        <div className={
            (props.page === "about" || props.page === "contact")
                ? "background-img" : ""
        }>
            {renderContent()}
        </div>
    );
}

export default WebLayout;
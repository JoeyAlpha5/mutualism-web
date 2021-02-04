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
                <div className="container">
                    <Sidebar/>
                    <ContactMain/>
                    <div className="main-body-col-2">
                        <Menu/>
                        <ContactSide/>
                    </div>
                </div>
            );
        }else if(props.page === "about"){
            return (
                <div className="container">
                    <Sidebar/>
                    <AboutMain/>
                    <div className="main-body-col-2">
                        <Menu/>
                        <AboutSide/>
                    </div>
                </div>
            );
        }else{
            return <Home page={"home"}/>
        }
    }

    return (
        <div>
            {renderContent()}
        </div>
    );
}

export default WebLayout;
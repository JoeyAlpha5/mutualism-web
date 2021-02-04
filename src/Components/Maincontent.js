/*This module is no longer needed, being kept as backup. The elements are now rendered in Home component*/
import React from 'react';
import Sidebar from "./Sidebar";
import {AboutMain, AboutSide} from "../Screens/Jalome/About";
import Menu from "./Menubar";
import {Link} from "react-router-dom";
import {IoIosArrowRoundForward} from "react-icons/io";

function Main(props){
    return(
        <div className="container">
            <Sidebar/>
            <div className="main-body-col-1" id={props.page === "home"? "main-homepage-content":""}>
                <div className="mid-content">
                    test
                </div>
            </div>
            <div className="main-body-col-2" id={props.page === "home"? "main-homepage-content":""}>
                <Menu/>

            </div>
        </div>
    );
}

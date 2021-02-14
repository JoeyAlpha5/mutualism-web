/*This module is no longer needed, just kept as backup. The elements and components are now all rendered on WebLayout*/

import React from 'react';
import Menu from './Menubar';
import AboutInfo from "./AboutSection";
import {ContactSide as ContactForm} from "../Screens/Jalome/Contact";

function SidePanel(props){
    // const renderSideContent = () => {
    //     if (props.page === "about"){
    //         return <AboutInfo/>
    //     }else if(props.page === "contact"){
    //         return <ContactForm/>
    //     }else{
    //         return(
    //             <div className="side-content">
    //                 <div className="pageSection"></div>
    //                 <div className="pageSection"></div>
    //                 <div className="pageSection"></div>
    //             </div>
    //         )
    //     }
    // }
    return(
        <div className="main-body-col-2" id={props.page === "home"? "main-homepage-content":""}>
           <Menu/>
            {/* {renderSideContent()} */}
            {/* <div className="side-content home-side-content">
                <div className="HomePageSection active"></div>
                <div className="HomePageSection"></div>
                <div className="HomePageSection"></div>
            </div> */}
        </div>
    );
}
export default SidePanel
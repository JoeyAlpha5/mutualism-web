/*This module is no longer needed, just kept as backup. The elements and components are now all rendered on WebLayout*/

import React from 'react';
import Menu from './Menubar';
import {AboutInfo as AboutSection} from "./AboutSection";
import {ContactSide as ContactForm} from "../Screens/Jalome/Contact";

function SidePanel(props){
    const renderSideContent = () => {
        if (props.page === "about"){
            return <AboutSection/>
        }else if(props.page === "contact"){
            return <ContactForm/>
        }else{
            return(
                <div className="side-content">
                    This is test
                </div>
            )
        }
    }
    return(
        <div className="main-body-col-2" id={props.page === "home"? "main-homepage-content":""}>
           <Menu/>
            {renderSideContent()}
        </div>
    );
}


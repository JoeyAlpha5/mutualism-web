import React from 'react';
import Menu from './Menubar';
import AboutSection from "./AboutSection";
import ContactForm from "./ContactForm";

function SidePanel(props){
    const renderSideContent = () => {
        if (props.page === "about"){
            return <AboutSection/>
        }else if(props.page === "contact"){
            return <ContactForm/>
        }
    }
    return(
        <div className="main-body-col-2">
           <Menu/>
            {renderSideContent()}
        </div>
    );
}

export default SidePanel;
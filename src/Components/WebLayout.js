import React, {useEffect} from 'react';
import Sidebar from "./Sidebar";
import Main from "./Maincontent";
import SidePanel from "./SideContent";
import Contact from '../Screens/Jalome/Contact';
import About from '../Screens/Jalome/About';

function WebLayout(props) {

    const renderMainContent = ()=>{
        console.log(props.page);
        if(props.page === "contact"){
            return <Contact/>
        }else{
            return <About/>
        }
    }

    return (
        <div className="container">
            <Sidebar/>
            {renderMainContent()}
            <SidePanel page={props.page}/>
        </div>
    );
}

export default WebLayout;
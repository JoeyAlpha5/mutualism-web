import React from 'react';
import Popup from 'reactjs-popup';
import { VscAccount } from "react-icons/vsc";
import './ElementStyles/AccountMenu.css';

function Account(){
    const style = {
        marginTop: "-0.5rem",
        marginLeft: "1rem",
        marginRight: "1.5rem",
        fontSize: "1.5rem"
    };
    return(
        
        <div onClick={()=>window.open('https://mutualism.co.za/portal-testing-env/#/')} className="menu-item account-item nav-item" style={style}><VscAccount/></div>
    );
}

export default Account;


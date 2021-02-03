import React from 'react';
import Popup from 'reactjs-popup';
import { VscAccount } from "react-icons/vsc";
import './ElementStyles/AccountMenu.css';

function Account(){
    const style = {
        marginTop: "-1.5rem",
        marginLeft: "1rem",
        marginRight: "1.5rem",
        fontSize: "2.5rem"
    };
    return(
        <Popup
            trigger={<div className="menu-item account-item nav-item" style={style}><VscAccount/></div>}
            position="bottom center"
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: '1rem', border: 'none' }}

        >
            <div className="menu popup-content">
                <div className="submenu-item"> Partner</div>
                <div className="submenu-item"> Consultant</div>
                <div className="submenu-item"> Client</div>
            </div>
        </Popup>
    );
}

export default Account;


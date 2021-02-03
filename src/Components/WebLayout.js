import React from 'react';
import Sidebar from "./Sidebar";
import Main from "./Maincontent";
import SidePanel from "./SideContent";

function WebLayout() {

    return (
        <div className="container">
            <Sidebar/>
            <Main/>
            <SidePanel/>
        </div>
    );
}

export default WebLayout;
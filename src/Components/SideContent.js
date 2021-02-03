import React from 'react';
import Menu from './Menubar';

function SidePanel(props){
    return(
        <div className="main-body-col-2" id={props.page == "home"? "main-homepage-content":""}>
           <Menu/>
           <div className="side-content">
                Test sidepane
           </div>
        </div>
    );
}

export default SidePanel;
import React from 'react';
import Menu from './Menubar';

function SidePanel(){
    return(
        <div className="main-body-col-2">
           <Menu/>
           <div className="side-content">
                Test sidepane
           </div>
        </div>
    );
}

export default SidePanel;
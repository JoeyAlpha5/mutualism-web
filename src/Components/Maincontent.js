import React from 'react';

function Main(props){
    return(
        <div className="main-body-col-1" id={props.page === "home"? "main-homepage-content":""}>
            <div className="mid-content">
                test
            </div>
        </div>
    );
}

export default Main;
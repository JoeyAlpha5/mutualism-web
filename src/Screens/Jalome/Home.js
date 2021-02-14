import React from 'react';
import Sidebar from "../../Components/Sidebar";
import Main from "../../Components/Maincontent";
import Menu from "../../Components/Menubar";


const Home = ()=>{

    return (
        <div className="main">
            <div className="overlay">
                <div className="container outter-container">
                    <Sidebar/>
                    <Main page={"home"}/>
                    <div id="homepageMenu">
                        <Menu/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
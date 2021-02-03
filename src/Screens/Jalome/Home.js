import React from 'react';
import Sidebar from "../../Components/Sidebar";
import Main from "../../Components/Maincontent";
import SidePanel from "../../Components/SideContent";

const Home = ()=>{
    return (
        <div className="main">
            <div className="overlay">
                <div className="container outter-container">
                    <Sidebar/>
                    <Main page={"home"}/>
                    <SidePanel page={"home"}/>
                </div>
            </div>
        </div>
    )
}
export default Home
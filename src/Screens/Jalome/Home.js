import React,{useEffect} from 'react';
import Sidebar from "../../Components/Sidebar";
import Main from "../../Components/Maincontent";
import Menu from "../../Components/Menubar";


const Home = ()=>{

    useEffect(()=>{
        // change page title
        document.title = "Welcome to Mutualism - Mutualism";
    },[])

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
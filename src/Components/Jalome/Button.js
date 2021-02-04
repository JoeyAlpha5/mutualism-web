import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
const button = (props)=>{
    return (
        <button className="animate__animated animate__fadeInUp"><IoIosArrowRoundForward size={30} style={{marginRight:10}}/>{props.text}</button>
    )
}
export default button;
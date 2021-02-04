import React from 'react';
import {SiInstagram} from 'react-icons/si'
const Contact = ()=>{
    return(
        <div className="main-body-col-1">
            <div className="mid-content">
                <h1 className="caption">Contact Us.</h1>
                <p className="body-text">We’re empowering businesses through a new financing and
                    consulting strategy which brings successes to the small business
                    owners of South Africa. </p>
                <p className="body-text">Discover what’s possible with community centered investment.</p>
                <h3>Come see us.</h3>
                <div className="follow-theboxshoplifestyle">
                    <SiInstagram className="theboxshoplifestyle-instagram"/><div className="body-text theboxshoplifestyle-instagram">theboxshoplifestyle</div><div className="body-text theboxshoplifestyle-instagram">Follow</div>
                </div>
            </div>
        </div>
    )
}
export default Contact
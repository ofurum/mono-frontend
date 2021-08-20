import React from 'react';
import momologo from '../../assets/icons/mono-logo.svg';
import arrow from '../../assets/icons/arrow-up.svg';
import "./header.scss"
const Header  = () => {

    return(
        <div className="mono-header">
           <div className="mono-title">
            <img src={momologo} alt="logo" className="logo"/>
            <h2 className="sub-title">mono</h2>
           </div>
           <div className="statement">
             <p>What is a Statement Page?</p>
             <img src={arrow} alt="icon" />
           </div>
        </div>
    )
}

export default Header;
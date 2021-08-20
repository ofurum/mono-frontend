import React from 'react';
import './background.scss';
import bacgroundImg from "../../assets/icons/background.svg"


const BackgroundImage = () => {

    return(
        <div className="background-image">
         <img src={bacgroundImg} alt="background" className="background" />
        </div>
    )
}

export default BackgroundImage
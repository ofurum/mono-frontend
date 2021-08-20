import React from 'react';
import './homepage.scss'
import Header from './header/header'
import Description from './description/index';
import Background from './backGround'
const HompePage = () => {
 
    return(
        <div className="home">
            <div className="body">
              <Header />
              <Description />
            </div>
            <Background />
        </div>
    )
}

export default HompePage;
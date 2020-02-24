import React from 'react';
import HeaderImage from './img/headerImg.jpg'

function Header() {

    return(
        <div className="container">
            <img className="headerImg" src={HeaderImage} alt="different color beers"/>
            <div className="centered">Welcome Friend</div>
        </div>
    )
}

export default Header;

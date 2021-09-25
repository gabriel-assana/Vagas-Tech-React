import './styles.css';

import React from 'react';

import logo from '../../assets/images/logo.png';

function Header() {
    return(  
    <div className="header">
        <div className="menu">
                <img src={logo} className="img-logo" alt="Logo-vagas-tech"></img>
        </div>
    </div>
       
    )
}


export default Header;
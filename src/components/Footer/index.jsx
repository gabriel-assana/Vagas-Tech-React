import './styles.css';

import React from 'react';

import logo from '../../assets/images/logo.png';

function Footer() {
    return(
    <div className="footer">
        <div className="Container">
                <img src={logo} class="img-logo-footer" alt="Logo-vagas-tech" width="15%"></img>
                <p>Copyright - Vagas Tech 2021 &copy;</p>
                <p>💻 Desenvolvido por Gabriel Vieira Assana - 2021</p>
        </div>
    </div>
    )
}

export default Footer;
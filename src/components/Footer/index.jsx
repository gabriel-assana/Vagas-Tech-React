import './styles.css';

import React from 'react';

import logo_DH from '../../assets/images/logo-DH.jpeg';
import logo from '../../assets/images/logo.png';

function Footer() {
    return(
    <div className="footer">
        <div className="Container">
            <div className="campost">
                <h1>Não perca nenhuma oportunidade!</h1>
                <p>Cadastre seu email para receber nossa newsletter!</p>

            </div>
            <div className="formulario-footer">
                <form className="form-email-footer">
                    <label for="Email">Email:</label>
                    <input type="email" name="email" className="email"></input>
                    <input type="button" value="Cadastrar" name="Cadastrar" id="botao"></input>
                </form>
            </div>
        </div>
        <article className="article-footer">
            <h3 className="atitulo">Um de nossos principais parceiros!</h3>
            <div className="backgroud-article">
                <a href="https://www.digitalhouse.com/br/"><img src={logo_DH}
                        alt="Imagem logotipo da Digital House" width="40%"></img></a>
            </div>
        </article>

        <div class="divlogo">

            <img src={logo} class="img-logo-footer" alt="Logo-vagas-tech" width="15%"></img>
            <p>Copyright - Vagas Tech 2020 &copy;</p>
        </div>
    </div>
    )
}

export default Footer;
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="icons-navbar">
                <div className="tel-header">
                    <img className="icon-contato" src="img/tel-icon.svg" alt="" />
                    <p>(11)0000-0000</p>
                </div>
                <div className="icons-header">
                    <img className="icon-contato" src="img/linkedin.svg" alt="" />
                    <img className="icon-contato" src="img/insta-icon.svg" alt="" />
                    <img className="icon-contato" src="img/whatsapp-icon.svg" alt="" />
                    <img className="icon-contato" src="img/mail-icon.svg" alt="" />
                </div>
            </div>

            <div className="navbar">
                <img src="../../../public/logo.png" alt="Logo" />

                <div className="nav-itens">
                    <ul className="list-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre Mim</a></li>
                        <li><a href="#">Localização</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                    <button className="btn-header">Agende uma consulta</button>
                </div>
            </div>
        </header>
    );
}

export default Header;

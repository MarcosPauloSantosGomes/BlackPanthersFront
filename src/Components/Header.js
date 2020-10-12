import React from 'react';
import './Header.css';
import Logo from './img/logo.png';
import LogoText from './img/logo-text.png';

export default () => {
    return (
        <header>
            <div className="logo--image">
                <a href="/">
                    <img src={Logo} />
                </a>
            </div>
            <div className="logo--text">
                <img src={LogoText} />
            </div>
            <div className="login">
                <a href="#">
                    <button className="login--button">Entrar</button>
                </a>
            </div>
        </header>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import Logo from '../img/logo.png';
import LogoText from '../img/logo-text.png';

import * as ROUTES from '../../constants/routes'

const Header = () => {
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
                <Link to={ROUTES.LOGIN}>
                    <button className="login--button">Entrar</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;

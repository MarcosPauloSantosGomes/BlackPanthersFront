import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes'

const Menu = () => {
    return (
        <nav class="menu">
	        <ul>
                <li><Link to={ROUTES.HOME}><a href="#" className="home">Home</a></Link></li>

                <li><a href="#">Masculino</a>
                    <ul>
                        <li><Link to={ROUTES.MR}><a href="#">Roupas</a></Link></li>
                        <li><Link to={ROUTES.MC}><a href="#">Calçados</a></Link></li>
                        <li><Link to={ROUTES.MA}><a href="#">Acessórios</a></Link></li>
                        <li><Link to={ROUTES.MRI}><a href="#">Roupas Íntimas</a></Link></li>
                    </ul>
                </li>
                <li><a href="#">Feminino</a>
                    <ul class="submenu">
                        <li><Link to={ROUTES.FR}><a href="#">Roupas</a></Link></li>
                        <li><Link to={ROUTES.FC}><a href="#">Calçados</a></Link></li>
                        <li><Link to={ROUTES.FA}><a href="#">Acessórios</a></Link></li>
                        <li><Link to={ROUTES.FRI}><a href="#">Roupas Íntimas</a></Link></li>
                    </ul>
                </li>
                <li><a href="#">Infantil</a>
                    <ul class="submenu">
                        <li><Link to={ROUTES.IR}><a href="#">Roupas</a></Link></li>
                        <li><Link to={ROUTES.IC}><a href="#">Calçados</a></Link></li>
                        <li><Link to={ROUTES.IA}><a href="#">Acessórios</a></Link></li>
                        <li><Link to={ROUTES.IRI}><a href="#">Roupas Íntimas</a></Link></li>
                    </ul>
                </li>
                <li><a href="#">Acessórios</a>
                    <ul class="submenu">
                        <li><Link to={ROUTES.AB}><a href="#">Bonés</a></Link></li>
                        <li><Link to={ROUTES.AC}><a href="#">Correntes</a></Link></li>
                        <li><Link to={ROUTES.AM}><a href="#">Mochilas</a></Link></li>
                        <li><Link to={ROUTES.AR}><a href="#">Relógios</a></Link>/</li>
                    </ul>
                </li>

                <li><Link to={ROUTES.SB}><a href="#" className="sobrenos"> Sobre Nós </a></Link></li>

            </ul>
        </nav>
    );
}

export default Menu;
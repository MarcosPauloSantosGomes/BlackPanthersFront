import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <nav class="menu">
	        <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Masculino</a>
                    <ul>
                        <li><a href="#">Roupas</a></li>
                        <li><a href="#">Calçados</a></li>
                        <li><a href="#">Acessórios</a></li>
                        <li><a href="#">Roupas Íntimas</a></li>
                    </ul>
                </li>
                <li><a href="#">Feminino</a>
                    <ul class="submenu">
                        <li><a href="#">Roupas</a></li>
                        <li><a href="#">Calçados</a></li>
                        <li><a href="#">Acessórios</a></li>
                        <li><a href="#">Roupas Íntimas</a></li>
                    </ul>
                </li>
                <li><a href="#">Infantil</a>
                    <ul class="submenu">
                        <li><a href="#">Roupas</a></li>
                        <li><a href="#">Calçados</a></li>
                        <li><a href="#">Acessórios</a></li>
                        <li><a href="#">Roupas Íntimas</a></li>
                    </ul>
                </li>
                <li><a href="#">Acessórios</a>
                    <ul class="submenu">
                        <li><a href="#">Roupas</a></li>
                        <li><a href="#">Calçados</a></li>
                        <li><a href="#">Acessórios</a></li>
                        <li><a href="#">Roupas Íntimas</a></li>
                    </ul>
                </li>
                <li><a href="#">Sobre Nós</a></li>
            </ul>
        </nav>
    );
}

export default Menu;

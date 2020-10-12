import React from 'react';
import './Menu.css';

export default () => {
    return (
        <div className="menu">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Maculino</a>
                    <ul className="dropdown">
                    <li><a href="">Acessórios</a></li>
                    <li><a href="">Bermudas</a></li>
                    <li><a href="">Calçados</a></li>
                    <li><a href="">Calças</a></li>
                    <li><a href="">Camisas</a></li>
                    <li><a href="">Camisetas</a></li>
                    <li><a href="">Moletom</a></li>
                    </ul>
                </li>
                <li><a href="">Feminino</a>
                <ul>
                    <li><a href="">Acessórios</a></li>
                    <li><a href="">Calçados</a></li>
                    <li><a href="">Calças</a></li>
                    <li><a href="">Camisas</a></li>
                    <li><a href="">Camisetas</a></li>
                    <li><a href="">Vestidos</a></li>
                    </ul>
                </li>
                <li><a href="">Infantil</a>
                <ul>
                    <li><a href="">Acessórios</a></li>
                    <li><a href="">Bermudas</a></li>
                    <li><a href="">Calçados</a></li>
                    <li><a href="">Calças</a></li>
                    <li><a href="">Camisas</a></li>
                    <li><a href="">Camisetas</a></li>
                    <li><a href="">Moletom</a></li>
                    <li><a href="">Vestidos</a></li>
                    </ul></li>
                <li><a href="">Acessórios</a>
                    <ul>
                        <li><a href="">Bonés</a></li>
                        <li><a href="">Brincos</a></li>
                        <li><a href="">Gargantilhas</a></li>
                        <li><a href="">Gravatas</a></li>
                        <li><a href="">Meias</a></li>
                        <li><a href="">Pulseiras</a></li>
                        <li><a href="">Relógios</a></li>
                    </ul>
                </li>
                <li><a href="">Sobre</a>
                    <ul><li><a href="">Empresa</a></li></ul>
                </li>
            </ul>
        </div>
    );
}
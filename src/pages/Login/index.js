import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import './Login.css'

const Login = () => {
    const [signIn, setSignIn] = useState(false)

    function handleClick() {
        setSignIn((anterior) => !anterior)
    }

    return (
        <body className={signIn ? 'sign-in-js' : 'sign-up-js'}>
        <div className="container">
            <div className="content first-content">
                <div className="first-column">
                    <h2 className="title title-primary">Bem-Vindo!</h2>
                    <p className="description description-primary">Para acessar sua conta</p>
                    <p className="description description-primary">por favor insira seus dados!</p>
                    <button onClick={handleClick} id="signin" className="btn btn-primary">Entrar</button>
                </div>    
                <div className="second-column">
                    <h2 className="title title-second">Criar Conta</h2>
                    <div className="social-media">
                        <ul className="list-social-media">
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <FontAwesomeIcon icon={["fab", "fa-facebook-f"]} />        
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-google-plus-g"></i>
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-linkedin-in"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <p className="description description-second">Ou use seu email para registro:</p>
                    <form className="form">
                        <label className="label-input" for="">
                            <i className="far fa-user icon-modify"></i>
                            <input type="text" placeholder="Nome" />
                        </label>
                        
                        <label className="label-input" for="">
                            <i className="far fa-envelope icon-modify"></i>
                            <input type="email" placeholder="Email" />
                        </label>
                        
                        <label className="label-input" for="">
                            <i className="fas fa-lock icon-modify"></i>
                            <input type="password" placeholder="Senha" />
                        </label>
                        
                        
                        <button className="btn btn-second">Cadastrar</button>        
                    </form>
                </div>
            </div>
            <div className="content second-content">
                <div className="first-column">
                    <h2 className="title title-primary">Olá, Amigo!</h2>
                    <p className="description description-primary">Entre com seus dados</p>
                    <p className="description description-primary">e comece sua jornada!</p>
                    <button onClick={handleClick} id="signup" className="btn btn-primary">Cadastrar</button>
                </div>
                <div className="second-column">
                    <h2 className="title title-second">Login</h2>
                    <div className="social-media">
                        <ul className="list-social-media">
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-facebook-f"></i>
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-google-plus-g"></i>
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-linkedin-in"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <p className="description description-second">Ou use sua conta:</p>
                    <form onSubmit={e => e.preventDefault()} className="form">
                    
                        <label className="label-input" for="">
                            <i className="far fa-envelope icon-modify"></i>
                            <input type="email" placeholder="Email" />
                        </label>
                    
                        <label className="label-input" for="">
                            <i className="fas fa-lock icon-modify"></i>
                            <input type="password" placeholder="Senha" />
                        </label>
                    
                        <a className="password" href="#">Esqueceu sua Senha?</a>
                        <button className="btn btn-second">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
        </body>
    )
}

export default Login

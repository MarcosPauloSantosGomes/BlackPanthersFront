import React, {addEventListener} from 'react'

import './Login.css'


const Login = () => {
    {/*var btnSignin = document.querySelector("#signin")
    var btnSignup = document.querySelector("#signup")
    var body = document.querySelector("body")


    btnSignin.addEventListener("click", function () {
        body.className="sign-in-js"
    })

    btnSignup.addEventListener("click", function () {
        body.className = "sign-up-js";
    })*/}
    return (
        <body>
        <div class="container">
            <div class="content first-content">
                <div class="first-column">
                    <h2 class="title title-primary">Bem-Vindo!</h2>
                    <p class="description description-primary">Para acessar sua conta</p>
                    <p class="description description-primary">por favor insira seus dados!</p>
                    <button id="signin" class="btn btn-primary">Entrar</button>
                </div>    
                <div class="second-column">
                    <h2 class="title title-second">Criar Conta</h2>
                    <div class="social-media">
                        <ul class="list-social-media">
                            <a class="link-social-media" href="#">
                                <li class="item-social-media">
                                    <i class="fab fa-facebook-f"></i>        
                                </li>
                            </a>
                            <a class="link-social-media" href="#">
                                <li class="item-social-media">
                                    <i class="fab fa-google-plus-g"></i>
                                </li>
                            </a>
                            <a class="link-social-media" href="#">
                                <li class="item-social-media">
                                    <i class="fab fa-linkedin-in"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <p class="description description-second">Ou use seu email para registro:</p>
                    <form class="form">
                        <label class="label-input" for="">
                            <i class="far fa-user icon-modify"></i>
                            <input type="text" placeholder="Nome" />
                        </label>
                        
                        <label class="label-input" for="">
                            <i class="far fa-envelope icon-modify"></i>
                            <input type="email" placeholder="Email" />
                        </label>
                        
                        <label class="label-input" for="">
                            <i class="fas fa-lock icon-modify"></i>
                            <input type="password" placeholder="Senha" />
                        </label>
                        
                        
                        <button class="btn btn-second">Cadastrar</button>        
                    </form>
                </div>
            </div>
            <div class="content second-content">
                <div class="first-column">
                    <h2 class="title title-primary">Olá, Amigo!</h2>
                    <p class="description description-primary">Enter your personal details</p>
                    <p class="description description-primary">and start journey with us</p>
                    <button id="signup" class="btn btn-primary">sign up</button>
                </div>
                <div class="second-column">
                    <h2 class="title title-second">sign in to developer</h2>
                    <div class="social-media">
                        <ul class="list-social-media">
                            <a class="link-social-media" href="#">
                                <li class="item-social-media">
                                    <i class="fab fa-facebook-f"></i>
                                </li>
                            </a>
                            <a class="link-social-media" href="#">
                                <li class="item-social-media">
                                    <i class="fab fa-google-plus-g"></i>
                                </li>
                            </a>
                            <a class="link-social-media" href="#">
                                <li class="item-social-media">
                                    <i class="fab fa-linkedin-in"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <p class="description description-second">Ou use sua conta:</p>
                    <form class="form">
                    
                        <label class="label-input" for="">
                            <i class="far fa-envelope icon-modify"></i>
                            <input type="email" placeholder="Email" />
                        </label>
                    
                        <label class="label-input" for="">
                            <i class="fas fa-lock icon-modify"></i>
                            <input type="password" placeholder="Senhn" />
                        </label>
                    
                        <a class="password" href="#">Esqueceu sua Senha?</a>
                        <button class="btn btn-second">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
        </body>
    )
}

export default Login

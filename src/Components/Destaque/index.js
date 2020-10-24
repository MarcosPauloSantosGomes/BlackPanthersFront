import React from 'react'

import './Destaque.css'

import Casaco from "./black.jpg"
import Bermuda from "./aqua.jpg"
import Jordan from "./jd02.jpg"
import Rfem from "./mk03.JPG"
import Rmas from "./zeus.jpg"

import $ from "jquery"

const Destaque = () => {
    {/*$("#zoom_05").elevateZoom({
        zoomType				: "inner",
        cursor: "crosshair"
      });*/}
    return (
        <div className="main">
            <div className="main-wrapper">
                <div className="main__row">
                    <div className="main__row__title">
                        <h3 className="dest">Eu sou Destaque</h3>
                    </div>
                    <div className="main__col">
                        <img src={Casaco} />
                        <h6 className="description">Tênis Nike papapa</h6>
                        <p className="price">R$ 3000,00</p>
                        <button className="pay">Comprar</button>
                    </div>
                    <div className="main__col">
                        <img src={Bermuda} />
                        <h6 className="description">Tênis Nike papapa</h6>
                        <p className="price">R$ 3000,00</p>
                        <button className="pay">Comprar</button>
                    </div>
                    <div className="main__col">
                        <img src={Jordan} />
                        <h6 className="description">Tênis Nike papapa</h6>
                        <p className="price">R$ 3000,00</p>
                        <button className="pay">Comprar</button>
                    </div>
                    <div className="main__col">
                        <img src={Rfem} />
                        <h6 className="description">Tênis Nike papapa</h6>
                        <p className="price">R$ 3000,00</p>
                        <button className="pay">Comprar</button>
                    </div>
                    <div className="main__col">
                        <img src={Rmas} />
                        <h6 className="description">Tênis Nike papapa</h6>
                        <p className="price">R$ 3000,00</p>
                        <button className="pay">Comprar</button>
                    </div>
                    <div className="main__col">
                        <img src="" />
                        <h6 className="description">Tênis Nike papapa</h6>
                        <p className="price">R$ 3000,00</p>
                        <button className="pay">Comprar</button>
                    </div>
                    <div className="main__col">
                        <img src="" />
                        <h6 className="description">Tênis Nike papapa</h6>
                        <p className="price">R$ 3000,00</p>
                        <button className="pay">Comprar</button>
                    </div>
                    <div className="main__col">
                        <img src="" />
                        <h6 className="description">Tênis Nike papapa</h6>
                        <p className="price">R$ 3000,00</p>
                        <button className="pay">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destaque
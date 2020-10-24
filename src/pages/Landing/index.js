import React from 'react';

import './Landing.css'

import Header from '../../Components/Header';
import Menu from '../../Components/Menu';
import Slider from '../../Components/Slider';
import Destaque from '../../Components/Destaque'

const Landing = () => {
    return (
        <div className="landing">
            <Header />
            <Menu />
            <Slider />
            <Destaque />
        </div>
    );
}

export default Landing

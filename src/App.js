import React from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';

export default () => {
  return (
    <div className="page">
      <Header />
      <Menu />
    </div>
  )
}
import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import './header.css';
import '../../App.css';

function Header(props){
    return(
        <div className="header">
            <div className="logoContainer">
                <Logo />
            </div>
            <div className="menuContainer">
                <Menu />
            </div>
        </div>
    )
}

export default Header;
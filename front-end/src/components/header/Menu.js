import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

function Menu() {

    return (
        <div className="menuContainer">
            <ul className="menuItems">
                <Link className="link" to="/goods"><li>goods</li></Link>
                <Link className="link" to="/info"><li>info</li></Link>
                <Link className="link" to="/login"><li>login</li></Link>
                <Link className="link" to="/register"><li>register</li></Link>
            </ul>
            <div className="menuIcon"><button><img className="menuIcon" src="/assets/graphics/icon3.png" /></button></div>
            <div className="mobileMenuContainer">
                <ul className="mobileMenuItems">
                    <MobileMenu />
                </ul>
            </div>
        </div>
    )
}

export default Menu;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Menu(props){
    return(
        <div className="menuContainer">
            <ul>
                <Link className="link" to="/goods"><li>goods</li></Link>
                <Link className="link" to="/info"><li>info</li></Link>
                <li><img className="menuIcon" src="/assets/graphics/icon3.png"/></li>
                <Link className="link" to="/login"><li>login</li></Link>
                <Link className="link" to="/register"><li>register</li></Link>
            </ul>
        </div>
    )
}

export default Menu;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Menu(props){
    return(
        <div className="menuContainer">
            <ul>
                <Link className="link" to="/goods"><li>goods</li></Link>
                <Link className="link" to="/info"><li>info</li></Link>
                <Link className="link" to="/loginreg"><li>login/register</li></Link>
            </ul>
        </div>
    )
}

export default Menu;
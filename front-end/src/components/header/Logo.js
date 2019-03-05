import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Logo(props){
    return(
        <div className="logoContainer">
            <Link to="/"><img className="logo" src="/assets/logo/enchanted_splatter_OffRegTrace_ed.png"/></Link>
        </div>
    )
}

export default Logo;
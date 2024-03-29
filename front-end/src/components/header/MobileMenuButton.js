import React, { Component } from "react";
import './header.css';
import '../../App.css';

class MobileMenuButton extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <button className="mobileMenuButton" 
                onMouseDown={this.props.handleMouseDown}></button>
        )
    }
}

export default MobileMenuButton;
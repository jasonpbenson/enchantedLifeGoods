import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './header.css';
import '../../App.css';

class MobileMenu extends Component {
    constructor(props) {
        super(props);
    }    
    render() {
        var visibility = "hide";
        if (this.props.menuVisibility) {
            visibility ="show";
        }
        return (
            <div id="slidingMenu" 
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <ul className="mobileMenuItems">
                    <li><Link className="mobileMenuLink" to="/goods">goods</Link></li>
                    <li><Link className="mobileMenuLink" to="/info">info</Link></li>
                    <li><Link className="mobileMenuLink" to="/login">login</Link></li>
                    <li><Link className="mobileMenuLink" to="/register">register</Link></li>
                </ul>
            </div>
        )
    }
}

export default MobileMenu;
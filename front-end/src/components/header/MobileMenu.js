import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './header.css';

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
                    <Link className="mobileMenuLink" to="/goods"><li>goods</li></Link>
                    <Link className="mobileMenuLink" to="/info"><li>info</li></Link>
                    <Link className="mobileMenuLink" to="/login"><li>login</li></Link>
                    <Link className="mobileMenuLink" to="/register"><li>register</li></Link>
                </ul>
            </div>
        )
    }
}

export default MobileMenu;
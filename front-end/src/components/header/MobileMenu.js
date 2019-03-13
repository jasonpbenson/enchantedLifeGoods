import React, { Component } from "react";
import { Link } from 'react-router-dom';

class mobileMenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    handleMouseDown(event) {
        this.toggleMenu();

        event.stop();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div>
                <div>
                    <p>Can you spot the item that doesn't belong?</p>
                    <ul>
                        <Link className="link" to="/goods"><li>goods</li></Link>
                        <Link className="link" to="/info"><li>info</li></Link>
                        <Link className="link" to="/login"><li>login</li></Link>
                        <Link className="link" to="/register"><li>register</li></Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default mobileMenu;
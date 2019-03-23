import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';

class Menu extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            visible: false
        };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(event) {
        this.toggleMenu();
        console.log("clicked");
        event.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }


    render(){
        console.log(this.props)
        let logRegNav = "";
        if(this.props.auth.email !== undefined){
            logRegNav = <span className="welcomeNav">Welcome, {this.props.auth.email}</span>
        }else{
            logRegNav = <span className="logRegNav">
            <Link to="/login">log in</Link> or <Link to="/register">register</Link>
        </span>
        }
    
        return (
            <div className="wrapper">
                <div className="menuContainer">
                    <div className="menuItems">
                        <Link className="link" to="/goods">goods</Link>
                        <Link className="link" to="/info">info</Link>
                    </div>
                    <div className="loginMenu">
                        {logRegNav}
                    </div>
                        <MobileMenuButton handleMouseDown={this.handleMouseDown}/>
                    <div className="mobileMenuContainer">
                        <MobileMenu handleMouseDown={this.handleMouseDown} 
                            menuVisibility={this.state.visible}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        cart: state.cart
    }
}

export default connect (mapStateToProps) (Menu);
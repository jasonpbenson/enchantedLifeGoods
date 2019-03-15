import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MobileMenu from './MobileMenu';

class Menu extends Component {
    constructor(){
        super();
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
                    <div className="menuIcon"><button><img className="menuIcon" src="/assets/graphics/icon3.png" /></button></div>
                    <div className="mobileMenuContainer">
                        <ul className="mobileMenuItems">
                            <MobileMenu />
                        </ul>
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
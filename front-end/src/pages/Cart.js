import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
import '../App.css';

class Cart extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="cartContainer">
                <div className="cartContents">
                    <div className="cartItems">
                        <ul></ul>
                    </div>
                    <div className="cartTotal"></div>
                </div>
                <div className="buttonContainer">
                    <button className="checkoutButton"><Link to="/checkout">checkout</Link></button>
                </div>
            </div>
        )
    }
}

export default Cart;
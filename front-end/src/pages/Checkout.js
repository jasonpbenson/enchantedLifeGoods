import React, { Component } from 'react';
import './checkout.css';
import '../App.css';

class Checkout extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="checkoutContainer">
                <div className="checkout">[checkout with stripe TBD]</div>
            </div>
        )
    }
}

export default Checkout;
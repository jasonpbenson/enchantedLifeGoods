import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ConfirmOrder from './ConfirmOrder';
import "../../../../App.css";
import "./confirmOrder.css";

class ThankYou extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="confirmOrderWrapper">
                <ConfirmOrder />
                <h1>thank you!</h1>
                <h3>you should receive a confirmation email shortly, 
                    if you have any questions please contact us 
                    at info@enchanted-life-goods.earthlove, 
                    jason + erin</h3>    
            </div>
        )
    }
}

export default ConfirmOrder;
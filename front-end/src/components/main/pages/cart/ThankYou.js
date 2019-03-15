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
                {/* <ConfirmOrder /> */}
                <div className="thankYouMessage">
                    <h1>thank you!</h1>
                    <img className="thankYouIcon" src="/assets/graphics/icon1.png" />
                    <h3>you should receive a confirmation email shortly,</h3>  
                    <h3>if you have any questions please contact us</h3>
                    <h3>at info@enchanted-life-goods.us,</h3>
                    <h3>jason + erin</h3>
                </div>
            </div>
        )
    }
}

export default ThankYou;
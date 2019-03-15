import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import confirmOrder from '../../../../actions/confirmOrderAction';
import "../../../../App.css";
import "./confirmOrder.css";

class ConfirmOrder extends Component{
    constructor(){
        super();
    }

    componentWillMount(){
        
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default ConfirmOrder;
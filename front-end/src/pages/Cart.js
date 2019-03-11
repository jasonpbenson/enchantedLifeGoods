import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getCart from '../actions/getCart';
import CartItem from '../utilities/CartItem';
import './cart.css';
import '../App.css';
import { bindActionCreators } from 'redux';

class Cart extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        if(this.props.auth.token === undefined){
            this.props.history.push('/login')
        }else{
            this.props.getCart(this.props.auth.token);
        }
    }

    render(){
        return(
            <div className="cartContainer">
                <div className="cartContents">
                    <div className="cartItems">
                        {/* <ul><CartItem /></ul> */}
                    </div>
                    <div className="cartTotal">{this.props.cart.totalPrice}</div>
                </div>
                <div className="cartButtonContainer">
                    <button className="checkoutButton"><Link to="/checkout">checkout</Link></button>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCart: getCart
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (Cart);
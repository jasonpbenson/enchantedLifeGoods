import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getCart from '../../../../actions/getCart';
import CartItem from './CartItem';
import './cart.css';
import "../../../../App.css";

class Cart extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(this.props.auth.token === undefined){
            this.props.history.push('/login')
        }else{
            console.log(this.props.getCart)
            this.props.getCart(this.props.auth.token);
        }
    }

    render(){
        if(!this.props.cart.totalItems){
            return(
                <div className="emptyCart">
                    <h3>cart empty</h3>
                    <img className="emptyCartIcon" src="/assets/graphics/icon4.png"/>
                    <h3><Link to="/goods">view goods</Link></h3>
                </div>
            )
        }else{
            var cartArray = this.props.cart.good.map((good, index)=> {
                return(
                    <CartItem key={index} good={good} />                
                )
                console.log(this.props.cart.good)
            })
        }
        return(
            <div className="cartContainer">
                <table className="cartTable">
                    <thead>
                        <tr>
                            <th>GOOD</th>
                            <th>PRICE</th>
                            <th>REMOVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartArray}
                    </tbody>
                </table>
                <h3>cart total: ${this.props.cart.totalPrice}</h3>
                <div className="checkoutButton">
                    <button>checkout</button>
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
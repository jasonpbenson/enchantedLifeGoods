import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getCart from '../../../../actions/getCart';
import confirmOrder from '../../../../actions/confirmOrderAction';
import CartItem from './CartItem';
import './cart.css';
import "../../../../App.css";
import UpdateAddress from './UpdateAddress';


class Cart extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        if(this.props.auth.token === undefined){
            this.props.history.push('/login')
        }else{
            console.log(this.props.getCart(this.props.auth.token))
            this.props.getCart(this.props.auth.token);
        }
    }

    render(){
        console.log(this.props);
        if(!this.props.cart.contents){
            return(
                <div className="emptyCart">
                    <h3>cart empty</h3>
                    <img className="emptyCartIcon" src="/assets/graphics/icon4.png"/>
                    <h3><Link to="/goods">view goods</Link></h3>
                </div>
            )
        }else{
            var cartArray = this.props.cart.contents.map((good, index)=> {
                return(
                    <CartItem key={index} good={good} />                
                )
            })
            return(
                <div className="cartContainer">
                    <UpdateAddress />
                    <div className="cartItemContainer">
                        {cartArray}
                    </div>
                    <div>
                        <h3 className="cartTotal">cart total $ {this.props.cart.total}</h3>
                    </div>
                    <div>
                        <Link to="/thankYou"><button className="checkoutButton">checkout</button></Link>
                    </div>
                </div>
            )
        }
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
        getCart: getCart,
        confirmOrder: confirmOrder
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (Cart);
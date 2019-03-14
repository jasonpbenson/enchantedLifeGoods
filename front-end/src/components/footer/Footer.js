import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./footer.css";
import "../../index.css";

class Footer extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.cart);
        return(
            <div className="footerContainer">
                <div className="userCart">
                    <Link className="link" to="/cart"><h2>cart</h2></Link>
                </div>
                <div className="accountInfo">
                    <Link className="link" to="/account"><h2>account</h2></Link>
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

export default connect (mapStateToProps) (Footer);
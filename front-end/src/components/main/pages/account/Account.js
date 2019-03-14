import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import getSales from '../../../../actions/getSales';
import "./account.css";
import "../../../../App.css";

class Account extends Component{
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(newProps){

    }
    
    componentDidMount(){
        if(this.props.auth.token === undefined){
            this.props.history.push('/login')
        }else{
            this.props.getSales(this.props.auth.token);
        }
    }

    render(){
        console.log(this.props);
        if(this.props.getSales.contents.length === 0){
            return(
                <div className="noSales">
                    <h3>no orders yet ...</h3>
                    <img className="noSalesIcon" src="/assets/graphics/icon4.png"/>
                    <h3><Link to="/goods">view goods</Link></h3>
                </div>
            )
        }else{
            var salesArray = this.props.sales.contents.map((sale, index)=> {
                return(
                    <salesItem key={index} sale={sale} />                
                )
            })
        return(
            <div className="accountContainer">
                {salesArray}
                <div className="userInfo">
                    <div className="userName">{this.state.auth.name}</div>
                    <div className="shippingAddress">
                        {this.state.auth.address1}
                        {this.state.auth.address2}
                        {this.state.auth.city}
                        {this.state.auth.state}
                        {this.state.auth.zip}
                        </div>
                    <div>
                        <button className="editButton" type='submit'>edit</button>
                    </div>
                </div>
            </div>
        )
        }   
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        cart: state.cart,
        sales: state.sales
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getSales: getSales,
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (Account);

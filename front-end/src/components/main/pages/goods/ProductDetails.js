import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateCart from '../../../../actions/updateCart';
import "../../../../App.css";
import './goods.css';

class ProductDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            good: {}
        }
    }

    componentDidMount(){
        const gid = this.props.match.params.id;
        const goodResponse = axios.get(`${window.apiHost}/goods/${gid}`);
        goodResponse.then((response)=> {
            const goodData = response.data[0];
            console.log(goodData);
            this.setState({
                good: goodData
            })
        }).catch((error)=> {
            if(error){throw error};
        })
    }

    componentWillReceiveProps(newProps){
        if(newProps.cart.length != this.props.cart.length){
            this.props.history.push('/?added=item')
        }
        console.log(newProps)
    }

    addToCart = (event)=> {
        const token = this.props.auth.token
        this.props.updateCart(token, this.state.good.id)
    }

    render(){
        let title = this.state.good.title;
        let description = this.state.good.description;
        let price = this.state.good.price
        return(
            <div className="productContainer">
                <div className="imageContainer">
                    <img src={`${window.apiHost}/images/db_images/${this.state.good.image1}`} />
                </div>
                <div className="infoContainer">
                    <h2 className="productTitle">"{title}"</h2>
                    <div className="descriptionContainer">
                        <p>{description}</p>
                    </div>
                    <div className="priceContainer">
                        <p>${price} usd</p>
                    </div>
                    <div className="buttonContainer">
                        <button onClick={this.addToCart} className="menuButton addToCartButton">add</button>
                        <button className="menuButton"><Link to="/goods">goods</Link></button>
                    </div>
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

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        updateCart: updateCart
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductDetails);

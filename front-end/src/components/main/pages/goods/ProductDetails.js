import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import updateCart from '../../../../actions/updateCart';
import "../../../../App.css";
import './goods.css';

class ProductDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            good: {},
            showAlert: false
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
        console.log("Getting new props!")
        if(newProps.cart.length != this.props.cart.length){
        }
        console.log(newProps)
    }

    addToCart = (event)=> {
        if(this.props.auth.token === undefined){
            this.props.history.push('/login')
        }else{
            const token = this.props.auth.token
            this.props.updateCart(token, this.state.good.id)
            this.setState({
                showAlert: true
            })
        }
    }

    componentWillUnmount(){
        console.log("bye bye")
    }

    render(){
        let title = this.state.good.title;
        let description = this.state.good.description;
        let price = this.state.good.price
        return(
            <div className="productContainer">
                <SweetAlert 
                    show={this.state.showAlert}
                    title="added to cart :)"
                    text={this.state.msg}
                    onConfirm={() =>{
                        console.log("closing");
                         this.setState({ showAlert: false })
                         this.props.history.push('/goods/?added=item')
                        }
                    }
                />
                <div className="imageContainer">
                    <img src={`${window.apiHost}/images/db_images/${this.state.good.image1}`} />
                </div>
                <div className="productInfoContainer">
                    <h2 className="productTitle">"{title}"</h2>
                    <div className="productDescriptionContainer">
                        <p>{description}</p>
                    </div>
                    <div className="priceContainer">
                        <p>${price} usd</p>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button onClick={this.addToCart} className="menuButton addToCartButton">add</button>
                    <button className="menuButton"><Link to="/goods">goods</Link></button>
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

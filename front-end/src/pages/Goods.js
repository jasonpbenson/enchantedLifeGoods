import React, { Component } from 'react';
import "../App.css";
import './goods.css';
import ProductOverview from './ProductOverview';
import ProductDetails from './ProductDetails';

class Goods extends Component{
    constructor(){
        super();
        // this.state = {
        //     product: {}
        }
    
    render(){
        return(
            <div className="goodsContainer">
                <div className="thumbMenu">
                    <div className="thumbMenuHeader">
                        <button className="menuButton">usables</button>
                        <button className="menuButton">wearables</button>
                    </div>
                    <ProductOverview />
                </div>
            </div>
        )
    }
}

export default Goods;
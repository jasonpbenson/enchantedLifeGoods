import React, { Component } from 'react';
import "../App.css";
import './pages.css';

class Goods extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="goodsContainer">
                <div className="thumbMenu">
                    <div className="thumbMenuHeader">
                        <h2>usables | wearables</h2>
                    </div>
                    <div className="thumbContainer">
                        <div className="item"><img src="/assets/graphics/sampleimg.png"/></div>
                        <div className="item"><img src="/assets/graphics/sampleimg.png"/></div>
                        <div className="item"><img src="/assets/graphics/sampleimg.png"/></div>
                        <div className="item"><img src="/assets/graphics/sampleimg.png"/></div>
                        <div className="item"><img src="/assets/graphics/sampleimg.png"/></div>
                        <div className="item"><img src="/assets/graphics/sampleimg.png"/></div>
                    </div>
                </div>
                <div className="productDetails">
                    <div className="closeButton"></div>
                    <div className="productTitle"><h2>diablo mug</h2></div>
                    <div className="productImage"><img src="/assets/graphics/sampleimg.png"/></div>
                    <div className="productDescription"></div>
                    <div className="addButton"></div>
                </div>
            </div>
        )
    }
}

export default Goods;
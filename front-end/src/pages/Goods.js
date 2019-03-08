import React, { Component } from 'react';
import "../App.css";
import './goods.css';
import ThumbsUsables from './ThumbsUsables';
import ThumbsWearables from './ThumbsWearables';

class Goods extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="goodsContainer">
                <div className="thumbMenu">
                    <div className="thumbMenuHeader">
                        <button className="menuButton">usables</button>
                        <button className="menuButton">wearables</button>
                    </div>
                    <ThumbsUsables />
                </div>
            </div>
        )
    }
}

export default Goods;
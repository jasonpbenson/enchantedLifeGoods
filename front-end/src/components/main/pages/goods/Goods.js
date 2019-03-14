import React, { Component } from 'react';
import "../../../../App.css"
import './goods.css';
import ProductOverview from './ProductOverview';

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
                    {/* <div className="thumbMenuHeader">
                        <button className="menuButton">ceramics</button>
                        <button className="menuButton">wearables</button>
                    </div> */}
                    <ProductOverview />
                </div>
            </div>
        )
    }
}

export default Goods;
import React, { Component } from 'react';
import ThumbnailCard from '../utilities/ThumbnailCard';
import axios from 'axios';
import "../App.css";
import './goods.css';

class ProductOverview extends Component{
    constructor(){
        super()
        this.state = {
            goods: []
        }
    }

    componentDidMount(){
        const goodsPromise = axios.get(`${window.apiHost}/goods`);
        goodsPromise.then((response)=> {
            const goods = response.data;
            this.setState({
                goods: goods
            })
        })
    }

    render(){
        const goodCards = this.state.goods.map((good, i)=> {
            return (<ThumbnailCard key={i} data={good} />)
        })

        return(
            <div className="thumbContainer">
                {goodCards}
            </div>
        )
    }

}

export default ProductOverview;

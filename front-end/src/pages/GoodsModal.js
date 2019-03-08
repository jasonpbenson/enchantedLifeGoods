import React from 'react';

function GoodsModal(props){
    return(
        <div className="productDetails">
            <div className="closeButton"></div>
            <div className="productTitle"><h2>[product title]</h2></div>
        <div className="productImage"><img src="/assets/graphics/sampleimg.png"/></div>
        <div className="productDescription">[product description]</div>
        <div>
            <button className="addToCartButton" type="submit">add to cart</button>
        </div>
        </div>
    )
}
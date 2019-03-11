import React from 'react';

function CartItem(props){
    const good = props.good;
    return(
        <div className="cartItem">
            <div className="itemPic">{good.goodImage}</div>
            <div className="itemTitle">{good.goodTitle}</div>
            <div className="itemPrice">{good.goodPrice}</div>
        </div>
    )
}

export default CartItem;
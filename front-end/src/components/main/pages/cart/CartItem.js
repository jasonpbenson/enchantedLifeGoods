import React from 'react';

function CartItem(props){
    const good = props.good;
    console.log(props)
    return(
        <div className="cartItem">
            <tr>
                <td>{good.goodName}</td>
                <td>{good.buyPrice}</td>
                <td><button className="removeButton">remove</button></td>
            </tr>
        </div>
    )
}

export default CartItem;
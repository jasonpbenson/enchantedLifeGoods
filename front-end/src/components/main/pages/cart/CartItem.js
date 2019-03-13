import React from 'react';
import './cart.css';

function CartItem(props){
    const good = props.good;
    console.log(props)
    return(
        <table className="cartTable">
            <tr>
            <td><img className="item" src={`${window.apiHost}/images/db_images/${good.image1}`} /></td>
            <td>
                {good.title}
                ${good.price}usd
            </td>
            <td><button className="removeButton">x</button></td>
            </tr>
        </table>
    )
}

export default CartItem;
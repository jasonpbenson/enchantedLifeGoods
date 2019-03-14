import React from 'react';
import './account.css';

function CartItem(props){
    const sale = props.sale;
    console.log(props)
    return(
        <table className="cartTable">
            <tr>
            <td><img className="item" src={`${window.apiHost}/images/db_images/${sale.image1}`} /></td>
            <td>
                {sale.title}
            </td>
            </tr>
        </table>
    )
}

export default CartItem;
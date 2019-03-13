import React from 'react';
import "./account.css";
import "../../../../App.css";

function Account(props){
    return(
        <div className="accountContainer">
            <div className="userInfo">
                <div className="userName"><h3>name</h3></div>
                <div className="shippingAddress"><h3>shipping address</h3></div>
                <div>
                    <button className="editButton" type='submit'>edit</button>
                </div>
            </div>
            <div className="userOrders">
                <h2>no orders yet ...</h2>
            </div>
        </div>
    )
}

export default Account;
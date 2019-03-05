import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";
import "../../index.css";

function Footer(props){
    return(
        <div className="footerContainer">
            <div className="userCart">
                <Link className="link" to="/cart"><h2>cart</h2></Link>
            </div>
            <div className="accountInfo">
                <Link className="link" to="/account"><h2>account</h2></Link>
            </div>
        </div>
    )
}

export default Footer;
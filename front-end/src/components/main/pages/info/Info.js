import React from 'react';
import './info.css';
import "../../../../App.css";

function Info(props){
    return(
        <div className="infoContainer">
            <div className="imageBackdrop">
                <img className="infoIcon" src="/assets/graphics/background.png" />
            </div>
            <h3>info@enchanted-life-goods.us</h3>
        </div>
    )
}

export default Info;
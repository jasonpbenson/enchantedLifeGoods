import React from 'react'
import { Link } from 'react-router-dom';

function ThumbnailCard(props){
    console.log(props)

    return(
        <Link to={`/goods/${props.data.id}`}>
            <div className="card">
                <img className="item" src={`${window.apiHost}/images/db_images/${props.data.image1}`} />
            </div>
        </Link>
    )
}

export default ThumbnailCard;

import React from 'react'
import { Link } from 'react-router-dom';

function ThumbnailCard(props){
    const image = props.data.image1;
    return(
        <div className="thumbnailCard">
            <Link to={`/goods/${props.data.id}`}>
                <div className="card">
                    <img src={image} />
                </div>
            </Link>
        </div>
    )
}

export default ThumbnailCard;

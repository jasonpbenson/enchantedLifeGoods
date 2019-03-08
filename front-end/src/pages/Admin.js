import React from 'react';
import './admin.css';
import '../App.css';

function Admin(props){
    return(
        <div className="adminContainer">
            <form method="post" action="/formSubmit" enctype="multipart/form-data">
                <input type="text" name="title" placeholder="title" />
                <input type="text" name="description" placeholder="description" />
                <input type="text" name="price" placeholder="price" />
                <input type="file" name="imageToUpload" placeholder="image 1" />
                <input type="file" name="imageToUpload" placeholder="image 2" />
                <input type="file" name="imageToUpload" placeholder="image 3" />
                <input type="file" name="imageToUpload" placeholder="image 4" />
            </form>
        </div>
    )
}

export default Admin
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios'
import additemAction from '../../actions/addItemAction';
import './admin.css';
import '../../App.css';

class FileUpload extends Component{
    constructor(){
        super();
    }

    componentWillReceiveProps(newProps){
        if(newProps.auth.msg === 'itemAdded'){
            this.props.history.push('/')
        }
    }

    itemSubmit = (event) => {
        event.preventDefault();
        const title = event.target[0].value;
        const description = event.target[1].value;
        const price = event.target[2].value;
        const image = event.target[3].files[0];
  
        this.props.additemAction({
            title,
            description,
            price,
            image
        })
    }

    render(){
        return(
            <div className="adminFormContainer">
                <form className="adminForm" onSubmit={this.itemSubmit}>
                    <div className="formItem">
                        <label htmlFor='title'>title:</label>
                        <input type="text" name="title" />
                    </div>
                    <div className="formItem">
                        <label htmlFor='description'>description:</label>
                        <input type="text" name="description" />
                    </div>
                    <div className="formItem">
                        <label htmlFor='price'>price:</label>
                        <input type="text" name="price" />
                    </div>
                    <div className="formItem">
                        <label htmlFor='image'>image:</label>
                        <input type="file" name="image" />
                    </div>
                    <button className="submitButton">upload</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth:state.auth
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        additemAction: additemAction
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
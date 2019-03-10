import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import additemAction from '../actions/addItemAction';
import './admin.css';
import '../App.css';

class Admin extends Component{
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
        const image1 = event.target[3].value;
        const image2 = event.target[4].value;
        const image3 = event.target[5].value;
        const image4 = event.target[6].value;
        this.props.additemAction({
            title,
            description,
            price,
            image1,
            image2,
            image3,
            image4
        })
    }

    render(){
        return(
            <div className="adminContainer">
                <form className="adminForm" method="post" action="/formSubmit" encType="multipart/form-data" onSubmit={this.itemSubmit}>
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
                            <label htmlFor='image1'>image:</label>
                            <input type="file" name="image" />
                        </div>
                        <div className="formItem">
                            <label htmlFor='image2'>image:</label>
                            <input type="file" name="image" />
                        </div>
                        <div className="formItem">
                            <label htmlFor='image3'>image:</label>
                            <input type="file" name="image" />
                        </div>
                        <div className="formItem">
                            <label htmlFor='image4'>image:</label>
                            <input type="file" name="image" />
                        </div>
                        <button className="submitButton" type='submit'>submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
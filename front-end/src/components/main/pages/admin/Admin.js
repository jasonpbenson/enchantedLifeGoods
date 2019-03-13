import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FileUpload';
import './admin.css';
import FileUpload from './FileUpload';

class Admin extends Component{
    constructor(){
        super();
    }

    state = {
        redirect: false
    }

    setRedirect = ()=> {
        this.setState({
            redirect: true
        })
    }

    render(){
        return(
            <FileUpload />
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        cart: state.cart
    }
}

export default connect (mapStateToProps) (Admin);
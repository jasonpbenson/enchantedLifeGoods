import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FileUpload';
import './admin.css';
import FileUpload from './FileUpload';

class Admin extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        if(this.props.auth.token === undefined || this.props.auth.admin === false){
            this.props.history.push('/')
        }
        console.log(this.props.auth)
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
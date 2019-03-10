import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import authAction from '../actions/authAction';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import './loginReg.css';
import "../App.css";

class Register extends Component{
    constructor(){
        super();
        this.state= {
            msg: "",
            showAlert: false
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        if(newProps.auth.msg === 'userExists'){
            this.setState({
                showAlert: true
            })
        }else if(newProps.auth.msg === 'userAdded'){
            this.props.history.push('/');
        }
    }

    registerSubmit = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        this.props.authAction({
            name, 
            email,
            password
        })
    }

    render() {
        const msg = this.state.msg;

        return(
            <div className="formContainer">
                <SweetAlert 
                    show={this.state.showAlert}
                    title="Registration Error"
                    text={this.state.msg}
                    onConfirm={() => this.setState({ showAlert: false })}
                />
                <form className="userForm" onSubmit={this.registerSubmit}>
                    <div>
                        <label htmlFor='name'>name:</label>  
                        <input className='validate' type='name' name='name' id='name' />          
                    </div>
                    <div>
                        <label htmlFor='email'>email:</label>  
                        <input className='validate' type='email' name='email' id='email' />          
                    </div>
                    <div>
                        <label htmlFor='password'>password:</label>
                        <input className='validate' type='password' name='password' id='password' />
                    </div>

                    <br />
                    <div>
                        <button type='submit' className="registerButton">submit</button>
                    </div>

                    <br />
                </form>
           
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        authAction: authAction
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps) (Register);
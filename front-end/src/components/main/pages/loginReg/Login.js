import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../../../../actions/loginAction';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import './loginReg.css';
import "../../../../App.css";

class Login extends Component{
    constructor(){
        super();
        this.state = {
            showAlert: false,
            msg:""
        }
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        if (newProps.auth.msg === 'badPassword') {
            this.setState({
                showAlert: true,
                msg: "please re-enter password"
            })
        }else if(newProps.auth.msg === 'badUser'){
            this.setState({
                showAlert: true,
                msg: "email not found"
            })
        }else if(newProps.auth.msg === 'loginSuccess'){
            this.props.history.push('/goods');
        }
    }

    componentDidMount(){

    }

    handleLogin = (event)=>{
        event.preventDefault()
        const email = event.target[0].value
        const password = event.target[1].value
        this.props.loginAction({
            email,
            password
        })
    }
    
    render() {
        return(
            <div className="formContainer">
                <SweetAlert
                    show={this.state.showAlert}
                    title="Login Error"
                    text={this.state.msg}
                    onConfirm={() => this.setState({ showAlert: false })}
                />
                <form className="userForm" onSubmit={this.handleLogin}>
                    <div>
                        <label htmlFor='email'>email:</label>  
                        <input type='email' id='email' />          
                    </div>
                    <div>
                        <label htmlFor='password'>password:</label>
                        <input type='password' name='password' id='password' />
                    </div>

                    <br />
                    <div>
                        <button className="loginButton" type='submit'>submit</button>
                    </div>

                    <br />
                    <div>
                        <a id='forgot' href='#!'><b>forgot password?</b></a>
                    </div>
                </form>
           
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        loginAction: loginAction
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);
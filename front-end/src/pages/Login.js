import React, { Component } from 'react';
import "../App.css";
import './loginReg.css';

class Login extends Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div className="formContainer">
                <form className="userForm" onSubmit={this.handleLogin}>
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

export default Login;
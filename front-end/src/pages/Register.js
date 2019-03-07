import React, { Component } from 'react';
import "../App.css";
import './pages.css';

class Register extends Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div className="formContainer">
                <form className="userForm" onSubmit={this.handleLogin}>
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
                        <button className="registerButton" type='submit'>submit</button>
                    </div>

                    <br />
                </form>
           
            </div>
        )
    }
}

export default Register;
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import updateAddress from "../../../../actions/updateAddressAction";
import "../../../../App.css";
import "./cart.css";
import axios from 'axios';
import authAction from '../../../../actions/authAction';
import SweetAlert from 'sweetalert-react';

class UpdateAddress extends Component{
    constructor(){
        super();
        this.state= {
            msg: "",
            showAlert: false
        }
    }

    componentDidMount(){
        axios.post(`${window.apiHost}/cart/getAddress`, {token:this.props.auth.token}).then((response)=>{
            console.log(response.data)
            if(response.data.length > 0){
                console.log("running")
                this.setState({
                    address1: response.data[0].address1,
                    address2: response.data[0].address2,
                    city: response.data[0].city,
                    state: response.data[0].state,
                    zip: response.data[0].zip
                })

            }
        })
    }

    componentWillReceiveProps(newProps){
        console.log(newProps);
        console.log(newProps)
        if(newProps.auth.msg === 'login'){
            this.props.history.push('/login')
        }else if(newProps.address.msg === 'addressUpdated'){
            this.setState({
                showAlert: true
            })
        }
    }

    updateAddress = (event)=> {
        event.preventDefault();
        const address1 = event.target[0].value;
        const address2 = event.target[1].value;
        const city = event.target[2].value;
        const state = event.target[3].value;
        const zip = event.target[4].value;
        this.props.updateAddress({
            address1,
            address2,
            city,
            state,
            zip, 
            token:this.props.auth.token
        })
    }



    changeAddress = (e)=>{
        console.log(e.target.value);
        this.setState({
            address1: e.target.value,
        })
    }
    changeAddress2 = (e)=>{
        console.log(e.target.value);
        this.setState({
            address2: e.target.value
        })
    }

    changeAddressCity = (e)=>{
        console.log(e.target.value);
        this.setState({
            address2: e.target.value
        })
    }

    changeAddressState = (e)=>{
        console.log(e.target.value);
        this.setState({
            address2: e.target.value
        })
    }

    changeAddressZip = (e)=>{
        console.log(e.target.value);
        this.setState({
            address2: e.target.value
        })
    }


    render(){
        console.log(this.state.address1);
        return(
            <div className="updateAddresswrapper">
                <SweetAlert 
                    show={this.state.showAlert}
                    title="Address Updated"
                    text={this.state.msg}
                    onConfirm={() => this.setState({ showAlert: false })}
                />
                <div className="addressFormContainer">
                    <form className="addressForm" onSubmit={this.updateAddress}>
                        <div>
                            <label htmlFor='address1'>shipping address:</label>  
                            <input onChange={this.changeAddress} value={this.state.address1} type='address1' name='address1' id='address1' required />          
                        </div>
                        <div>
                            <label htmlFor='address2'>apt/suite/unit:</label>  
                            <input onChange={this.changAddress2} value={this.state.address2} type='address2' name='address2' id='address2' />          
                        </div>
                        <div>
                            <label htmlFor='city'>city:</label>
                            <input onChange={this.changAddressCity} value={this.state.city} type='city' name='city' id='city' required />
                        </div>
                        <div>
                            <label htmlFor='state'>state:</label>
                            <input onChange={this.changAddressState} value={this.state.state}  type='state' name='state' id='state' required />
                        </div>
                        <div>
                            <label htmlFor='zip'>zip:</label>
                            <input onChange={this.changAddressZip} value={this.state.zip}  type='zip' name='zip' id='zip' required />
                        </div>

                        <br />
                        <div>
                            <button type='submit' className="confirmAddress"><Link to="/confirmOrder">update shipping address</Link></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        cart: state.cart,
        address: state.address
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateAddress: updateAddress
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (UpdateAddress);
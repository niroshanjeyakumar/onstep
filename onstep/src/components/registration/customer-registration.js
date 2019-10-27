import React, {Component} from 'react';
import axios from 'axios';

export default class Customer_Registarion extends Component {

    constructor(props) {
        super(props);

        this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
        this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
        this.onChangeCustomerNumber = this.onChangeCustomerNumber.bind(this);
        this.onChangeCustomerAddress = this.onChangeCustomerAddress.bind(this);
        this.onChangeCustomerPassword = this.onChangeCustomerPassword.bind(this);
        this.onChangeCustomerConfirm = this.onChangeCustomerConfirm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            customer_name: '',
            customer_email: '',
            customer_number: '',
            customer_address: '',
            customer_password:'',
            customer_confirm_pass:''
        }
    }

    onChangeCustomerName(e) {
        this.setState({
            customer_name: e.target.value
        });
    }

    onChangeCustomerEmail(e) {
        this.setState({
            customer_email: e.target.value
        });
    }

    onChangeCustomerNumber(e) {
        this.setState({
            customer_number: e.target.value
        });
    }

    onChangeCustomerAddress(e) {
        this.setState({
            customer_address: e.target.value
        });
    }
    onChangeCustomerPassword(e) {
        this.setState({
            
            customer_password: e.target.value

        });
    }
    onChangeCustomerConfirm(e) {
        this.setState({
            
            customer_confirm_pass: e.target.value

        });
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.customer_password!==this.state.customer_confirm_pass){
            alert("Passwords do not match");
        }
        else{
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.customer_name}`);
        console.log(`Todo Description: ${this.state.customer_number}`);       
        console.log(`Todo Description: ${this.state.customer_email}`);
        console.log(`Todo Responsible: ${this.state.customer_address}`);
        console.log(`Todo Priority: ${this.state.customer_password}`);

        const newCust={
            customer_name:this.state.customer_name,
            customer_email:this.state.customer_email,
            customer_number:this.state.customer_number,
            customer_address:this.state.customer_address,
            customer_password:this.state.customer_password
        }

        axios.post('http://localhost:4000/onstep/user/customer/add',newCust)
                .then(res => console.log(res.data)); 

        this.setState({
            customer_name: '',
            customer_email: '',
            customer_number: '',
            customer_address: '',
            customer_password:'',
            customer_confirm_pass:''
        })
    }
    }

    render() {
        return (
            <div style={{marginTop: 500}} className="m-5">
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>Name</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.customer_name}
                                onChange={this.onChangeCustomerName}
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input  type="email"
                                className="form-control"
                                value={this.state.customer_email}
                                onChange={this.onChangeCustomerEmail}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Contact Number</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.customer_number}
                                onChange={this.onChangeCustomerNumber}
                                pattern="[0-9]*"
                                minLength="11"
                                placeholder="94#########"
                                size="5"
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.customer_address}
                                onChange={this.onChangeCustomerAddress}
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.customer_password}
                                onChange={this.onChangeCustomerPassword}
                                minLength="8"
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.customer_confirm_pass}
                                onChange={this.onChangeCustomerConfirm}
                                required
                                />
                    </div>
                    <div className="form-group float-left">
                        <input type="submit" value="Register" className="btn btn-primary" />
                    </div>
                    <div className="form-group float-right">
                        <input type="reset" value="Reset" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
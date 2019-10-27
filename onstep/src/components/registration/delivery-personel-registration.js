import React, {Component} from 'react';
import axios from 'axios';

export default class Delivery_person_Registration extends Component {

    constructor(props) {
        super(props);

        this.onChangeDeliveryName = this.onChangeDeliveryName.bind(this);
        this.onChangeDeliveryEmail = this.onChangeDeliveryEmail.bind(this);
        this.onChangeDeliveryNumber = this.onChangeDeliveryNumber.bind(this);
        this.onChangeDeliveryPassword = this.onChangeDeliveryPassword.bind(this);
        this.onChangeDeliveryConfirm = this.onChangeDeliveryConfirm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            delivery_name: '',
            delivery_email: '',
            delivery_number: '',
            delivery_password:'',
            delivery_confirm_pass:''
        }
    }

    onChangeDeliveryName(e) {
        this.setState({
            delivery_name: e.target.value
        });
    }

    onChangeDeliveryEmail(e) {
        this.setState({
            delivery_email: e.target.value
        });
    }

    onChangeDeliveryNumber(e) {
        this.setState({
            delivery_number: e.target.value
        });
    }

    onChangeDeliveryPassword(e) {
        this.setState({
            
            delivery_password: e.target.value

        });
    }
    onChangeDeliveryConfirm(e) {
        this.setState({
            
            delivery_confirm_pass: e.target.value

        });
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.delivery_password!=this.state.delivery_confirm_pass){
            alert("Passwords do not match");
        }
        else{
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.delivery_name}`);
        console.log(`Todo Description: ${this.state.delivery_number}`);       
        console.log(`Todo Description: ${this.state.delivery_email}`);
        console.log(`Todo Priority: ${this.state.delivery_password}`);

        const newCust={
            delivery_name:this.state.delivery_name,
            delivery_email:this.state.delivery_email,
            delivery_number:this.state.delivery_number,
            delivery_password:this.state.delivery_password
        }

        axios.post('http://localhost:4000/onstep/user/delivery/add',newCust)
                .then(res => console.log(res.data)); 

        this.setState({
            delivery_name: '',
            delivery_email: '',
            delivery_number: '',
            delivery_password:'',
            delivery_confirm_pass:''
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
                                value={this.state.delivery_name}
                                onChange={this.onChangeDeliveryName}
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input  type="email"
                                className="form-control"
                                value={this.state.delivery_email}
                                onChange={this.onChangeDeliveryEmail}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Contact Number</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.delivery_number}
                                onChange={this.onChangeDeliveryNumber}
                                pattern="[0-9]*"
                                minLength="11"
                                placeholder="94#########"
                                size="5"
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.delivery_password}
                                onChange={this.onChangeDeliveryPassword}
                                minLength="8"
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.delivery_confirm_pass}
                                onChange={this.onChangeDeliveryConfirm}
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
import React, {Component} from 'react';
import axios from 'axios';
export default class supermarket_Registration extends Component {

    constructor(props) {
        super(props);

        this.onChangeSupermarketName = this.onChangeSupermarketName.bind(this);
        this.onChangeSupermarketEmail = this.onChangeSupermarketEmail.bind(this);
        this.onChangeSupermarketNumber = this.onChangeSupermarketNumber.bind(this);
        this.onChangeSupermarketAddress = this.onChangeSupermarketAddress.bind(this);
        this.onChangeSupermarketPassword = this.onChangeSupermarketPassword.bind(this);
        this.onChangeSupermarketConfirm = this.onChangeSupermarketConfirm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            supermarket_name: '',
            supermarket_email: '',
            supermarket_number: '',
            supermarket_area:'',
            supermarket_address: '',
            supermarket_password:'',
            supermarket_confirm_pass:''
        }
    }

    onChangeSupermarketName(e) {
        this.setState({
            supermarket_name: e.target.value
        });
    }

    onChangeSupermarketEmail(e) {
        this.setState({
            supermarket_email: e.target.value
        });
    }

    onChangeSupermarketNumber(e) {
        this.setState({
            supermarket_number: e.target.value
        });
    }

    onChangeSupermarketAddress(e) {
        this.setState({
            supermarket_address: e.target.value
        });
    }
    onChangeSupermarketPassword(e) {
        this.setState({
            
            supermarket_password: e.target.value

        });
    }
    onChangeSupermarketConfirm(e) {
        this.setState({
            
            supermarket_confirm_pass: e.target.value

        });
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.supermarket_password!=this.state.supermarket_confirm_pass){
            alert("Passwords do not match");
        }
        else{
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.supermarket_name}`);
        console.log(`Todo Description: ${this.state.supermarket_number}`);       
        console.log(`Todo Description: ${this.state.supermarket_email}`);
        console.log(`Todo Responsible: ${this.state.supermarket_address}`);
        console.log(`Todo Priority: ${this.state.todo_password}`);

        const newCust={
            supermarket_name:this.state.supermarket_name,
            supermarket_email:this.state.supermarket_email,
            supermarket_number:this.state.supermarket_number,
            supermarket_area:this.state.supermarket_area,
            supermarket_address:this.state.supermarket_address,
            supermarket_password:this.state.supermarket_password
        }

        axios.post('http://localhost:4000/onstep/user/supermarket/add',newCust)
                .then(res => console.log(res.data)); 

        this.setState({
            supermarket_name: '',
            supermarket_email: '',
            supermarket_number: '',
            supermarket_area:'',
            supermarket_address: '',
            supermarket_password:'',
            supermarket_confirm_pass:''
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
                                value={this.state.supermarket_name}
                                onChange={this.onChangeSupermarketName}
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input  type="email"
                                className="form-control"
                                value={this.state.supermarket_email}
                                onChange={this.onChangeSupermarketEmail}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Contact Number</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.supermarket_number}
                                onChange={this.onChangeSupermarketNumber}
                                pattern="[0-9]*"
                                minLength="11"
                                placeholder="94#########"
                                required
                                />
                    </div>
                    <div class="form-group">
                    <label>Service Area</label>
                    <select     className="form-control"                                
                                value={this.state.supermarket_area}
                                onChange={this.onChangeSupermarketArea}>
                        <option>Bambalapitiya</option>
                        <option>Kollupitiya</option>
                        <option>Borella</option>
                        <option>Wellawatte</option>
                    </select>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.supermarket_address}
                                onChange={this.onChangeSupermarketAddress}
                                required
                                />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.supermarket_password}
                                onChange={this.onChangeSupermarketPassword}
                                minLength="8"
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.supermarket_confirm_pass}
                                onChange={this.onChangeSupermarketConfirm}
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
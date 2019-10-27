import React, {Component} from 'react';
import axios from 'axios';

export default class Product_Registarion extends Component {

    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductSeller = this.onChangeProductSeller.bind(this);
        this.onChangeProductUnit = this.onChangeProductUnit.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductPassword = this.onChangeProductPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name: '',
            product_seller: '',
            product_unit: '',
            product_price: '',
            product_password:'',
            product_confirm_pass:''
        }
    }

    onChangeProductName(e) {
        this.setState({
            product_name: e.target.value
        });
    }

    onChangeProductSeller(e) {
        this.setState({
            product_seller: e.target.value
        });
    }

    onChangeProductUnit(e) {
        this.setState({
            product_unit: e.target.value
        });
    }

    onChangeProductPrice(e) {
        this.setState({
            product_price: e.target.value
        });
    }
    onChangeProductPassword(e) {
        this.setState({
            
            product_password: e.target.value

        });
    }
    onChangeProductConfirm(e) {
        this.setState({
            
            product_confirm_pass: e.target.value

        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.product_name}`);
        console.log(`Todo Description: ${this.state.product_unit}`);       
        console.log(`Todo Description: ${this.state.product_seller}`);
        console.log(`Todo Responsible: ${this.state.product_price}`);
        console.log(`Todo Priority: ${this.state.product_password}`);

        const newCust={
            product_name:this.state.product_name,
            product_seller:this.state.product_seller,
            product_unit:this.state.product_unit,
            product_price:this.state.product_price,
            product_password:this.state.product_password
        }

        axios.post('http://localhost:4000/onstep/product/add',newCust)
                .then(res => console.log(res.data)); 

        this.setState({
            product_name: '',
            product_seller: '',
            product_unit: '',
            product_price: '',
            product_password:'',
            product_confirm_pass:''
        })
    }
    

    render() {
        return (
            <div style={{marginTop: 500}} className="m-5">
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>Name</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_name}
                                onChange={this.onChangeProductName}
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Seller</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_seller}
                                onChange={this.onChangeProductSeller}
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Unit</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_unit}
                                onChange={this.onChangeProductUnit}
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Price per Unit</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_price}
                                onChange={this.onChangeProductPrice}
                                required
                                />
                    </div>
                    <div className="form-group float-left">
                        <input type="submit" value="Add Product" className="btn btn-primary" />
                    </div>
                    <div className="form-group float-right">
                        <input type="reset" value="Reset" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
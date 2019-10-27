import React, {Component} from 'react';
import axios from 'axios';

const Product =props =>(
    <tr>
        <td>{props.product.product_name}</td>
        <td>{props.product.product_seller}</td>
        <td>{props.product.product_unit}</td>
        <td>{props.product.product_price}</td>
    </tr>
)
export default class ProductList extends Component {

    constructor(props){
        super(props);
        this.state ={product: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/onstep/product')
            .then(response =>{
                this.setState({product: response.data})
            })
            .catch(function(error){
                console.log(error);
            })
    }

    componentDidUpdate(){
        axios.get('http://localhost:4000/onstep/product')
        .then(response =>{
            this.setState({product: response.data})
        })
        .catch(function(error){
            console.log(error);
        })
    }


    productList(){
        return this.state.product.map(function(currentProduct,i){
            return <Product product={currentProduct} key={i}/>;
        })
    }

    render(){
        return ( 
            <div>
                <h3 align="center">Product List</h3>
                <table className ="table table-stiped" style={{margin:20}}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Seller</th>
                            <th>Unit</th>
                            <th>Price per unit</th>
                        </tr>
                    </thead>
                     <tbody>
                         {this.productList() }
                     </tbody>
                </table>
            </div>
        );
    }
}
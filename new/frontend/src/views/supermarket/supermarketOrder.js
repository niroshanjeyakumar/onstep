import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Table,Button
} from 'reactstrap';

import IndexNavbar from "components/Navbars/DeliveryNavbar";
import IndexHeader from "components/Headers/delivery-homeHeader";
import DarkFooter from "components/Footers/Footer1";

function Products  () {
    useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
          document.body.classList.remove("profile-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });

      const [product, setproduct] = useState([]);

     const user =sessionStorage.getItem('user');
     const customer =JSON.parse(user);
    const ID= customer.details._id;
      useEffect(()=>{
          axios.get('http://localhost:4000/onstep/order/supermarket/'+ID)
          .then(res=>{
            setproduct(res.data);
        })
        .catch(function(error){
            console.log(error);
        }) 
      });
     // console.log(product);
     // var status;
     function purchased(id){
        axios.post("http://localhost:4000/onstep/order/purchased/"+id).catch(err=>{console.log(err);})
      }
      const pro = product.map(function (products, index){
        var disableButton=false;
         //if (!products.order_accepted){
        //     status="Active";
        // }
        // else 
        if(products.order_purchased){
            disableButton=true;
         }
        // else if(!products.order_delivered){
        //     status="Delivered";
        // }
        
          return (  
              <tr>
            <th>{index+1}</th>
              <td>{products.product.product_name}</td>
              <td>{products.product.seller_name}</td>
              <td>{products.product.product_price}</td>
              <td>{products.order_quantity}</td>
              <td>{products.product.product_price*products.order_quantity}</td>
              <td>{products.delivery.delivery_name}</td>
              <td>{products.delivery.delivery_number}</td>
              <td><Button color="success" onClick={()=>purchased(products._id)} disabled={disableButton}>Purchased</Button></td>
              <td></td>
              <td></td>
              </tr>
          );
      
      });
      
  return (
      <>
    <IndexNavbar/>
    <IndexHeader/><br/>
    <h1 align="center">Active Orders</h1>
    <div className="row m-4">
      <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Product</th>
        <th>Seller</th>
        <th>Unit price</th>
        <th>Order Quantity</th>
        <th>Total Price</th>
        <th>Delivery Location</th>
        <th>Contact No</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {pro}
    </tbody>
    </Table>
  </div>
    <DarkFooter/>
    </>
  );
};

export default Products;
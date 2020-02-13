import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Table
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

      const del=sessionStorage.getItem('user');
      const delivery =JSON.parse(del);
      const id= delivery.details._id;
      useEffect(()=>{
          axios.get('http://localhost:4000/onstep/order/completed/'+id)
          .then(res=>{
            setproduct(res.data);
        })
        .catch(function(error){
            console.log(error);
        }) 
      });
     // console.log(product);
     // var status;
      const pro = product.map(function (products, index){
        
        // if (!products.order_accepted){
        //     status="Active";
        // }
        // else if(!products.order_purchased){
        //     status="In delivery";
        // }
        // else if(!products.order_delivered){
        //     status="Delivered";
        // }
        
          return (  
              <tr>
            <th>{index+1}</th>
              <td>{products.seller.supermarket_name}</td>
              <td>Rs.{products.total}</td>
              <td></td>
              <td></td>
              <td></td>
              </tr>
          );
      
      });
      
  return (
      <>
    <IndexNavbar/>
    <IndexHeader/><br/>
    <h1 align="center">Completed Orders</h1>
    <div className="row m-4">
      <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Seller</th>
        <th>Total Price</th>
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
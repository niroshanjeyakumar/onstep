import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
<<<<<<< HEAD
  Table, Button
=======
  Table
>>>>>>> 40f540d96ba87dc04dce6178f82a2625130a58fc
} from 'reactstrap';

import IndexNavbar from "components/Navbars/Customernavbar";
import IndexHeader from "components/Headers/customerhomeHeader";
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

<<<<<<< HEAD
      const cust=sessionStorage.getItem('user');
=======
      const cust=localStorage.getItem('user');
>>>>>>> 40f540d96ba87dc04dce6178f82a2625130a58fc
      const customer =JSON.parse(cust);
      const id= customer.details._id;
      useEffect(()=>{
          axios.get('http://localhost:4000/onstep/order/customer/'+id)
          .then(res=>{
            setproduct(res.data);
        })
        .catch(function(error){
            console.log(error);
        }) 
      });
      var status;
<<<<<<< HEAD
     function removeOrder(id){
       console.log(id);
     }
     function trackOrder(id){
      console.log(id);
    }
    function recievedOrder(id){
      axios.post("http://localhost:4000/onstep/order/recieved/"+id).catch(err=>{console.log(err);})
    }

      const pro = product.map(function (products, index){
        var remove=true;
        var track=true;
        var recieved=true;

        if (!products.order_accepted){
            status="Active";
        }
        else if (products.order_accepted && !products.order_purchased && !products.order_delivered){
          status="Accepted";
      }
        else if(products.order_purchased && !products.order_complete){
            status="In delivery";
            track=false;
            recieved=false;
        }
        else if(products.order_complete){
            status="Delivered";
            remove=false;
        }

=======
      const pro = product.map(function (products, index){
        
        if (!products.order_accepted){
            status="Active";
        }
        else if(!products.order_purchased){
            status="In delivery";
        }
        else if(!products.order_delivered){
            status="Delivered";
        }
>>>>>>> 40f540d96ba87dc04dce6178f82a2625130a58fc
        
          return (  
              <tr>
      <th>{index+1}</th>
              <td>{status}</td>
              <td>{products.product.product_name}</td>
              <td>{products.product.seller_name}</td>
              <td>{products.product.product_price}</td>
              <td>{products.order_quantity}</td>
              <td>{products.product.product_price*products.order_quantity}</td>
<<<<<<< HEAD
              <td>{products.order_accepted ? products.delivery.delivery_name : " "}</td>
              <td>{products.order_accepted ? products.delivery.delivery_number : " "}</td>
              <td><Button color="success" onClick={()=>recievedOrder(products._id)} disabled={recieved}>Recieved</Button></td>
              <td><Button color="info" onClick={()=>trackOrder(products._id)} disabled={track}>Track Order</Button></td>
              <td><Button color="danger" onClick={()=>removeOrder(products._id)} disabled={remove}>Delete</Button></td>
=======
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
>>>>>>> 40f540d96ba87dc04dce6178f82a2625130a58fc
              </tr>
          );
      
      });
      
  return (
      <>
    <IndexNavbar/>
    <IndexHeader/><br/>
    <h1 align="center">My Orders</h1>
    <div className="row m-4">
      <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Status</th>
        <th>Product</th>
        <th>Seller</th>
        <th>Unit price</th>
        <th>Order Quantity</th>
        <th>Total Price</th>
        <th>Delivery Person Name</th>
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
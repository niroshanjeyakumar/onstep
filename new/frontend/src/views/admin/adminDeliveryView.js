import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import AdminSideNav from "components/SideNav/sidenav.js";
import "assets/css/admin.css";
import {
  Table
} from 'reactstrap';


// core components
import ExamplesNavbar from "components/SideNav/adminNav";
import TransparentFooter from "components/Footers/Footer1.js";
import Axios from "axios";



function AdminCust() {


      const [delivery,setDelivery]=useState([]);
      const [product, setproduct] = useState([]);
      const [Order, setOrder] = useState([]);


    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("landing-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });

      let {id}=useParams();
      console.log(id);
      useEffect(()=>{
        Axios.get('http://localhost:4000/onstep/user/delivery/'+id).then(res=>setDelivery(res.data))
        .catch(err=>console.log(err))
      });
      useEffect(()=>{
          Axios.get('http://localhost:4000/onstep/order/del/'+id)
          .then(res=>{
            setproduct(res.data);
        })
        .catch(function(error){
            console.log(error);
        }) 
      });
       useEffect(()=>{
          Axios.get('http://localhost:4000/onstep/order/completed/'+id)
          .then(res=>{
            setOrder(res.data);
        })
        .catch(function(error){
            console.log(error);
        }) 
      });
      
const pro = product.map(function (products, index){
        
          return (  
              <tr>
            <th>{index+1}</th>
              <td>{products.seller.supermarket_name}</td>
              <td>{products.seller.supermarket_area}</td>
              <td>{products.customer.customer_address}</td>
              <td>{products.customer.customer_number}</td>
              <td>Rs. {products.total}</td>
              <td></td>
              <td></td>
              </tr>
          );
      
      });
      const completed = Order.map(function (products, index){

        
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
      <ExamplesNavbar />
      <AdminSideNav />
        <div className="admin-content">
        <div>
          <h2 align="center">{delivery.delivery_name}</h2>
          <span></span>
          <h4>Active Orders</h4>
          <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Seller Area</th>
              <th>Delivery Location</th>
              <th>Contact No</th>
              <th>Total</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pro}
          </tbody>
          </Table>
          <h4>Completed Orders</h4>
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
      {completed}
    </tbody>
    </Table>
          </div>
        
        <TransparentFooter />
        </div>
    </>
  );
}

export default AdminCust;

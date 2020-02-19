import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import AdminSideNav from "components/SideNav/sidenav.js";
import {
  Table
}from 'reactstrap';
import "assets/css/admin.css";

// core components
import ExamplesNavbar from "components/SideNav/adminNav";
import TransparentFooter from "components/Footers/Footer1.js";
import Axios from "axios";



function AdminCust() {


      const [customer,setCutomer]=useState([]);
      const [product, setproduct] = useState([]);

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
        Axios.get('http://localhost:4000/onstep/user/customer/'+id).then(res=>setCutomer(res.data))
        .catch(err=>console.log(err))
      })

    useEffect(()=>{
          Axios.get('http://localhost:4000/onstep/order/customer/'+id)
          .then(res=>{
            setproduct(res.data);
        })
        .catch(function(error){
            console.log(error);
        }) 
      });
      var status;
 const pro = product.map(function (products, index){
        var remove=true;
        var track=true;
        var recieved=true;

        if (!products.order_accepted){
            status="Active";
            remove=false;
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

        
          return (  
              <tr>
              <td>{index+1}</td>
              <td>{status}</td>
              <td>{products.seller.supermarket_name}</td>
              <td>{products.order_accepted ? products.delivery.delivery_name : " "}</td>
              <td>{products.order_accepted ? products.delivery.delivery_number : " "}</td>
              <td>Rs.{products.total}</td>
              </tr>
          );
      
      });

      
  return (
    <>
      <ExamplesNavbar />
      <AdminSideNav />
        <div className="admin-content">
        <div>
          <h2 align="center">{customer.customer_name}</h2>
          <span></span>
          <h4>Orders</h4>
          <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Seller</th>
              <th>Delivery Person Name</th>
              <th>Contact No</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pro}
          </tbody>
          </Table>
          </div>
        
        <TransparentFooter />
        </div>
    </>
  );
}

export default AdminCust;

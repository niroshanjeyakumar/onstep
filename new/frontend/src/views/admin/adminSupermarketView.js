import React, {useEffect, useState} from "react";
// import { useParams } from "react-router";
import { Route, Switch, Link,useParams} from "react-router-dom";
import AdminSideNav from "components/SideNav/sidenav.js";
import "assets/css/admin.css";
import {
  Table
} from 'reactstrap';

//reactstrap components
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   NavItem,
//   NavLink,
//   Nav,
//   TabContent,
//   TabPane,
//   Container,
//   Col
// } from "reactstrap";

// core components
import ExamplesNavbar from "components/SideNav/adminNav";
import AdminHead from "components/Headers/adminHeader";
import TransparentFooter from "components/Footers/Footer1.js";
import Axios from "axios";



function AdminCust() {
//const [id,setid]=useState('');
  //useEffect(()=>{setid(useParams)})
//console.log(id);

      const [supermarket,setSupermarket]=useState([]);
      const [product, setproduct] = useState([]);
      const [order, setOrder] = useState([]);

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
        Axios.get('http://localhost:4000/onstep/user/supermarket/'+id).then(res=>setSupermarket(res.data))
        .catch(err=>console.log(err))
      });
      useEffect(()=>{
      Axios.post('http://localhost:4000/onstep/product/supermarket',{seller:id})
      .then(res=>{
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });
  useEffect(()=>{
          Axios.get('http://localhost:4000/onstep/order/supermarket/'+id)
          .then(res=>{
            console.log(res);
            setOrder(res.data);
        })
        .catch(function(error){
            console.log(error);
        }) 
      });
       const pro = product.map(function (products){

            return (
              <tr>
                <td>{products.product_name}</td>
                <td>{products.product_category.category_name}</td>
                <td>{products.product_unit}</td>
                <td>{products.product_price}</td>
              </tr>
            )
            })
      const orderList = order.map(function (products, index){
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
              <td>{products.delivery.delivery_name}</td>
              <td>{products.delivery.delivery_number}</td>
              <td>Rs. {products.total}</td>
              </tr>
          );
      
      });




  return (
    <>
      <ExamplesNavbar />
      <AdminSideNav />
        <div className="admin-content">
        <div>
          <h2 align="center">{supermarket.supermarket_name}</h2>
          <span></span>
          <h4>Products</h4>
          <Table hover>
          <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Unit</th>
                <th>Unit price</th>
                <th></th>
                <th></th>
                </tr>
          </thead>
          <tbody>                
              {pro}
          </tbody>
          </Table>
  
          <h4>Orders</h4>
          <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Delivery Person Name</th>
              <th>Contact No</th>
              <th>Total Price</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orderList}
          </tbody>
          </Table>
          </div>
        
        <TransparentFooter />
        </div>
    </>
  );
}

export default AdminCust;

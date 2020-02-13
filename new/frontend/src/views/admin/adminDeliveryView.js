import React, {useEffect, useState} from "react";
// import { useParams } from "react-router";
import { Route, Switch, Link,useParams} from "react-router-dom";
import AdminSideNav from "components/SideNav/sidenav.js";
import "assets/css/admin.css";

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

      const [delivery,setDelivery]=useState([]);

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
      })
      
  return (
    <>
      <ExamplesNavbar />
      <AdminSideNav />
        <div className="admin-content">
        <div>
          <h2 align="center">{delivery.delivery_name}</h2>
          <span></span>
          </div>
        
        <TransparentFooter />
        </div>
    </>
  );
}

export default AdminCust;

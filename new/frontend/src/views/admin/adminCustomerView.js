import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { Route, Switch, Link } from "react-router-dom";

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



function AdminCust() {
const [id,setid]=useState('');
  useEffect(()=>{setid(useParams)})
console.log(id);
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
  return (
    <>
      <ExamplesNavbar />
      <AdminHead />
        <div className="content">
        <div>
          <h2 align="center">Dashboard</h2>
          </div>
        </div>
        <TransparentFooter />
    </>
  );
}

export default AdminCust;

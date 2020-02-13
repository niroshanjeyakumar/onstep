import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components

import CustNavbar from "components/Navbars/Customernavbar";
import IndexNavbar from "components/Navbars/onstepNavbar";
import IndexHeader from "components/Headers/onstepHeader.js";
import DarkFooter from "components/Footers/onstepFooter.js";

// sections for this page

import Carousel from "./product-functions/carousal.js";
import Productlist from "./product-functions/products.js";
import { useParams } from "react-router";


function Onstep() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
 let{type}=useParams()
  const user=sessionStorage.getItem('user');
  const userData=JSON.parse(user);
  return (
    <>
    {userData ? (
        <CustNavbar />
      ) : (
        <IndexNavbar />
      )}
      
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
      
          <Carousel />
          <h2>type {type}</h2>
          <Productlist />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Onstep;

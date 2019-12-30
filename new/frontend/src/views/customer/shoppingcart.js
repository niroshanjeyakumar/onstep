import React,{useEffect} from "react";

// reactstrap components
import {
  Container,
 } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/Customernavbar";
import IndexHeader from "components/Headers/customerhomeHeader";
import DarkFooter from "components/Footers/Footer1";

// sections for this page

import Cart from "views/customer/shoppingCart/cart.js";

function Onstep() {
  useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Container>
          <Cart />
          
          <h1 align="center">Under Construction</h1>
          </Container>
          
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Onstep;

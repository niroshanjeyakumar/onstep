import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/onstepNavbar.js";
import IndexHeader from "components/Headers/onstepHeader.js";
import DarkFooter from "components/Footers/Footer1";

// sections for this page

import Cart from "views/customer/shoppingCart/cart.js";

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
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Cart />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Onstep;

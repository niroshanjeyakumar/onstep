import React,{useState} from "react";
import axios from 'axios'
// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/onstepNavbar.js";
import IndexHeader from "components/Headers/onstepHeader.js";
import DarkFooter from "components/Footers/onstepFooter.js";
// sections for this page



function AvailableOrders() {
    const [order, setorder] = useState([]);

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



    axios.post('http://localhost:4000/onstep/user/customer/login',{order_complete: false} )
    .then(res => setorder(res.data));
        

    const orders = order.map(function (order, index){

        return <div className="col-sm-2 col-md-2" key={index}>
             
             <tr>
                  <td>{order.product_name}</td>
                  <td>{order.product_seller}</td>
                  <td>{order.order_quantity}</td>
                  <td>{order.customer_name}</td>
                  <td>{order.customer_address}</td>
                  <td>{order.customer_number}</td>
              </tr>
        </div>
        })
    

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <table>
              <tr>
                  <td>Product</td>
                  <td>Seller</td>
                  <td>Quantity</td>
                  <td>Customer Name</td>
                  <td>Delivery Address</td>
                  <td>Contact Number</td>
              </tr>
              {orders}
          </table>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default AvailableOrders;


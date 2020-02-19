import React, {useState,useEffect} from 'react';
import axios from 'axios';
//react components
import {
  Table
} from 'reactstrap';
//core components
import IndexNavbar from "components/Navbars/DeliveryNavbar";
import IndexHeader from "components/Headers/delivery-homeHeader";
import DarkFooter from "components/Footers/Footer1";

function Products  () {
//add navbar
    useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
          document.body.classList.remove("profile-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });
//declair product
      const [product, setproduct] = useState([]);
//get completed delivery details using id
      const del=sessionStorage.getItem('user');
      const delivery =JSON.parse(del);
      const id= delivery.details._id;
      useEffect(()=>{
          axios.get('http://localhost:4000/onstep/order/completed/'+id)
          .then(res=>{
            setproduct(res.data);
        })
        .catch(function(error){//error handeling
            console.log(error);
        }) 
      });
 //map products to pro    
      const pro = product.map(function (products, index){
//table header row    
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
    <IndexNavbar/>
    <IndexHeader/><br/>
    <h1 align="center">Completed Orders</h1>
    <div className="row m-4">
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
{/*add pro to table*/}
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

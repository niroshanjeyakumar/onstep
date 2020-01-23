import React, { useState,useEffect } from "react";
// core components
import ExamplesNavbar from "components/SideNav/adminNav";
import AdminHead from "components/Headers/adminHeader";
import TransparentFooter from "components/Footers/Footer1.js";
import { Table,Button } from "reactstrap";
import Axios from "axios";
import { Redirect } from "react-router";


function AdminCust() {
      const[customers,setCustomers]=useState([]);


    useEffect(() => {
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

      useEffect(()=>{
        Axios.get('http://localhost:4000/onstep/user/customer/')
        .then(res=>{
          setCustomers(res.data);
      })
      .catch(function(error){
          console.log(error);
      })
    });

    function viewCust(id){
      return(
        <Redirect to={`/administrator/customers/view/${id}`}/>
      )
    }

const cust = customers.map(function(Customers,index){
      return(
        <tr>
      <td>{index +1}</td>
      <td>{Customers._id}</td>
      <td>{Customers.customer_name}</td>
      <td><Button color="info" onClick={()=> viewCust(Customers._id)}>Edit</Button></td>
      </tr>
      )
})

  return (
    <>
      <ExamplesNavbar />
      <AdminHead />
        <div className="content">
        <div>
          <h2 align="center">Cutomers</h2>
          <div className="container">
            <Table>
              <thead>
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
              </thead>
              <tbody>
                {cust}
              </tbody>
            </Table>


          </div>
          </div>
        </div>
        <TransparentFooter />
    </>
  );
}

export default AdminCust;

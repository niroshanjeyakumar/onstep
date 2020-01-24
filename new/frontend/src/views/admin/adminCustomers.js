import React, { useState,useEffect } from "react";
// core components
import ExamplesNavbar from "components/SideNav/adminNav";
import AdminHead from "components/Headers/adminHeader";
import TransparentFooter from "components/Footers/Footer1.js";
import { Table,Button,Modal,ModalBody } from "reactstrap";
import Axios from "axios";
import "assets/css/admin.css";
import { Redirect } from "react-router";
import AdminSideNav from "components/SideNav/sidenav.js"

function AdminMarket() {
      const[customer,setCustomer]=useState([]);
      const[modal,setModal]=useState(false);
      const[Delete,setDelete]=useState(false);
    useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        // window.scrollTo(0, 0);
        // document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("landing-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });

      useEffect(()=>{
        Axios.get('http://localhost:4000/onstep/user/customer/')
        .then(res=>{
          setCustomer(res.data);
      })
      .catch(function(error){
          console.log(error);
      })
    });

    function viewCust(id){
      return(
        <Redirect to={`/administrator/customer/view/${id}`}/>
      )
    }
    function deleteCust(){
      Axios.get("http://localhost:4000/onstep/user/customer/delete/"+Delete).catch(function(error){
      console.log(error);
    });
  }
const cust = customer.map(function(Cust,index){
      return(
        <tr>
      <td>{index +1}</td>
      <td>{Cust._id}</td>
      <td>{Cust.customer_name}</td>
      <td><Button color="info" onClick={()=> viewCust(Cust._id)}>View</Button></td>
      <td><Button color="danger" onClick={()=> {setDelete(Cust._id);setModal(true)}}>Delete</Button></td>
      </tr>
      )
})

  return (
    <>
        <ExamplesNavbar />
        <AdminSideNav />
      <div className="admin-content">
          <h2 align="center">Customer</h2>
          <div className="container">
          
            <Table>
              <thead>
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
                <th></th>
                <th></th>
              </thead>
              <tbody>
                {cust}
              </tbody>
            </Table>
            <Modal
                modalClassName="modal-mini modal-danger"
                toggle={() => setModal(false)}
                isOpen={modal}
              >
                <div className="modal-header justify-content-center">
                  {/* <div className="modal-profile">
                    <i className="now-ui-icons users_circle-08"></i>
                  </div> */}
                </div>
                <ModalBody>
                  <p>Confirm Deletetion</p>
                </ModalBody>
                <div className="modal-footer">
                  <Button className="btn-neutral" color="link" type="button"
                  onClick={()=>{deleteCust();setModal(false)}}>
                    Delete Customer
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    type="button"
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </Modal>

          </div>
          
        <TransparentFooter />
        </div>
    </>
  );
}

export default AdminMarket;

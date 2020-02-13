import React, { useState,useEffect } from "react";
// core components
import ExamplesNavbar from "components/SideNav/adminNav";
//import AdminHead from "components/Headers/adminHeader";
import TransparentFooter from "components/Footers/Footer1.js";
import { Table,Button,Modal,ModalBody } from "reactstrap";
import Axios from "axios";
import "assets/css/admin.css";
import { Redirect } from "react-router";
import AdminSideNav from "components/SideNav/sidenav.js"

function AdminMarket() {
      const[delivery,setDelivery]=useState([]);
      const[modal,setModal]=useState(false);
      const[Delete,setDelete]=useState(false);
      const [viewDel,setViewDel]=useState("");
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
        Axios.get('http://localhost:4000/onstep/user/delivery/')
        .then(res=>{
          setDelivery(res.data);
      })
      .catch(function(error){
          console.log(error);
      })
    });

    
        
  
    function deleteDel(){
      Axios.get("http://localhost:4000/onstep/user/delivery/delete/"+Delete).catch(function(error){
      console.log(error);
    });
  }
const del = delivery.map(function(Del,index){
      return(
        <tr>
      <td>{index +1}</td>
      <td>{Del._id}</td>
      <td>{Del.delivery_name}</td>
      <td><Button color="info" onClick={()=> {setViewDel(Del._id)}}>View</Button></td>
      <td><Button color="danger" onClick={()=> {setDelete(Del._id);setModal(true)}}>Delete</Button></td>
      </tr>
      )
})
if(viewDel){
  return(<Redirect to={`/administrator/delivery/${viewDel}`}/>)
}
else{
  return (
    <>
      <ExamplesNavbar />
      <AdminSideNav />
      <div className="admin-content">
          <h2 align="center">Delivery Personnel</h2>
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
                {del}
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
                  onClick={()=>{deleteDel();setModal(false)}}>
                    Delete Delivery
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
  );}
}

export default AdminMarket;

import React, { useState,useEffect } from "react";
// core components
import ExamplesNavbar from "components/SideNav/adminNav";
//import AdminHead from "components/Headers/adminHeader";
import TransparentFooter from "components/Footers/Footer1.js";
import { Table,Button,Modal,ModalBody,
Form,Input } from "reactstrap";
import Axios from "axios";
import "assets/css/admin.css";
// import { Redirect } from "react-router";
import {Link, Redirect} from 'react-router-dom';
import AdminSideNav from "components/SideNav/sidenav.js";

function AdminMarket() {
      const[message,setMessage]=useState([]);
      const[modal,setModal]=useState(false);
      const[Cat,setCat]=useState("");
      const [viewMarket,setViewMarket]=useState("");
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
        Axios.get('http://localhost:4000/onstep/message/unread')
        .then(res=>{
          setMessage(res.data);
      })
      .catch(function(error){
          console.log(error);
      })
    });

    // function deleteMarket(){
    //   Axios.get("http://localhost:4000/onstep/catego/"+Delete).catch(function(error){
    //   console.log(error);
    // });
 // }


function MarkasRead(id){

  Axios.post('http://localhost:4000/onstep/message/markasread/'+id).then(res=>console.log(res)).catch(err=>console.log(err))
}

const msg = message.map(function(Msg,index){
      return(
        <tr>
      <td>{index +1}</td>
      <td>{Msg.userType}</td>
      <td>{Msg.user}</td>
      <td>{Msg.subject}</td>
      <td>{Msg.message}</td>
      <Button className="" color="info" type="button"
                  onClick={()=>{MarkasRead(Msg._id)}}>
                  Mark as read
                  </Button>
      </tr>
      )
})

  return (
    <>
        <ExamplesNavbar />
        <AdminSideNav />
      <div className="admin-content">
          <h2 align="center">Unread Messages</h2>
          <div className="container">
          
            <Table>
              <thead>
                <th>#</th>
                <th>User Type</th>
                <th>User ID</th>
                <th>Subject</th>
                <th>Message</th>
                <th></th>
              </thead>
              <tbody>
                {msg}
              </tbody>
            </Table>
            
            
          </div>
          
        <TransparentFooter />
        </div>
    </>
  );
                
}

export default AdminMarket;

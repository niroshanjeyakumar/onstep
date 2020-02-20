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
      const[category,setCategory]=useState([]);
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
        Axios.get('http://localhost:4000/onstep/category/')
        .then(res=>{
          setCategory(res.data);
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

function AddCat(){

  Axios.post('http://localhost:4000/onstep/category/add',{category_name:Cat} ).then(res=>console.log(res)).catch(err=>console.log(err))
}

const cat = category.map(function(Cat,index){
      return(
        <tr>
      <td>{index +1}</td>
      <td>{Cat.category_name}</td>
      </tr>
      )
})

  return (
    <>
        <ExamplesNavbar />
        <AdminSideNav />
      <div className="admin-content">
          <h2 align="center">Product Categories</h2>
          <div className="container">
          
            <Table>
              <thead>
                <th>#</th>
                <th>Category</th>
              </thead>
              <tbody>
                {cat}
              </tbody>
            </Table>
            <Button className="" color="default" type="button"
                  onClick={()=>{setModal(true)}}>
                   Add new Category
                  </Button>
            <Modal
                
                toggle={() => setModal(false)}
                isOpen={modal}
              >
                  <Form className="form">
                <div className="modal-header justify-content-center">
                   <div className="modal-profile">
                    Add New Category
                  </div> 
                </div>
                <ModalBody align="center">
                  
                      <Input type="text" placeholder="New Category"
                      value={Cat}
                      onChange={e=> setCat(e.target.value)}/>
                  
                </ModalBody>
                <div className="modal-footer">
                  <Button color="success" type="submit"
                  onClick={()=>AddCat()}>
                    Add Category
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </Button>
                </div>
                </Form>
              </Modal>

          </div>
          
        <TransparentFooter />
        </div>
    </>
  );
                
}

export default AdminMarket;

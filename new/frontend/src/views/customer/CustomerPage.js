import React, {useEffect, useState} from "react";
import Axios from 'axios';

import '../../../src/assets/css/custom.css'
import {useParams} from "react-router-dom";


// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  FormText,
  Card,
  CardBody,
  CardText,
  CardLink,
  Label,
  Table,
  UncontrolledTooltip
} from "reactstrap";

// core components
import Customernavbar from "components/Navbars/Customernavbar.js";
import ProfilePageHeader from "components/Headers/CustomerHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

//const user=sessionStorage.getItem('user');
//const userData=JSON.parse(user);

function ProfilePage() {
  
  useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse"); 
    };
  });
  const [customer, setCustomer] = React.useState([]);

  const {id}= useParams();
  useEffect(()=>{
    Axios.get('http://localhost:4000/onstep/user/customer/test/'+id)
    .then(res=>{
      console.log(res);
      //setCustomer(res.data);
  })
  .catch(function(error){
      console.log(error);
  })
});


      
        return (
          <>
             <Customernavbar />
              <ProfilePageHeader />
              <div className="section">
                <Container>      
                  <h3 className="title">My Profile</h3>
                  <h4>
                    <Card align="center" >
                      <CardBody >
                        <CardText align="crenter">
                        <Table>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Telephone</th>
                      <th>email</th>
                    <tbody>
                    <tr>
                 <td>{customer._id}</td>
                <td>{customer.customer_name}</td>
                <td>{customer.customer_number}</td>
                <td>{customer.customer_email}</td>
                </tr>
                    </tbody>
                  </Table>
                         </CardText>
                        <CardLink href="/edit-customer" onClick={e => e.preventDefault()}>
                          Edit
                         </CardLink>
                       </CardBody>
                     </Card></h4>
         
  
        </Container>
             </div>
             <DefaultFooter />
           
         </>
       );
     }



export default ProfilePage;

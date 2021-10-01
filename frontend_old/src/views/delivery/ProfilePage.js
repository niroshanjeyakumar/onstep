import React, {useEffect, useState} from "react";/* useState signaling the intent to hold a kind of state inside react component which can be even a js func,  useEffect- data fetching, subscriptions, or manually changing the DocumentObjectModel from React components*/
import Axios from 'axios';
import {useParams} from "react-router-dom";
import editdelp from "./editdelp";

// reactstrap components
import {
  Button,
  Container,
  Card,
  CardBody,
  CardText,
  Table
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/DeliveryNavbar";
import ProfilePageHeader from "components/Headers/delivery-homeHeader";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {


//Adding side bar & nav bar using hooks to perform side effects from a function component
  useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const [Delivery,setDelivery]=useState([]);//pic array containing variables, actual value & state updater function for said state
  
//retrieve details using id
  const {id}= useParams(); //get parameter from url
     useEffect(()=>{
        Axios.get('http://localhost:4000/onstep/user/delivery/'+id)
        .then(res=>{
          setDelivery(res.data);
      })
      .catch(function(error){// error handeling
          console.log(error);
      })
    });

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>{/*React Button for delivery status*/}
            <div className="button-container">
                <Button className="btn-round" color="success" size="lg">Delivery Status</Button>
              </div>
            <h3 className="title">My Profile</h3>
            <h4>
              <Card align="center" >
                <CardBody >
                  <CardText align="crenter">
{/* create table*/}
                    <Table>
                      <th>ID</th>    
                      <th>Name</th>
                      <th>Telephone</th>
                      <th>email</th> 
                      <tbody>{/* adding retrieved data to table*/}
                        <tr>
                          <td>{Delivery._id}</td>
                          <td>{Delivery.delivery_name}</td>
                          <td>{Delivery.delivery_number}</td>
                          <td>{Delivery.delivery_email}</td>
                        </tr>
                      </tbody>
                  </Table>
                   </CardText>
{/*edit button*/}
                   <Button color="success" onClick={editdelp}>Edit</Button>          
                 </CardBody>
               </Card></h4>
            
           </Container>
          </div>
        <DefaultFooter/>
        </div>
      </>
    );
};

export default ProfilePage;

import React, {useEffect, useState} from "react";
import Axios from 'axios';
//import {useParams} from "react-router-dom";

// reactstrap components
import {
  Button,
  Container,
  Row,
  UncontrolledTooltip,
  Card,
  CardBody,
  CardText,
  CardLink,
  Table
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/DeliveryNavbar";
import ProfilePageHeader from "components/Headers/delivery-homeHeader";
import DefaultFooter from "components/Footers/DefaultFooter.js";




function ProfilePage() {
  //const [pills, setPills] = React.useState("2");
  const [delivery,setDelivery]=useState([]);
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
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

    const del = delivery.map(function(Del,index){
      return(
        <tr>
      <td>{Del._id}</td>
      <td>{Del.delivery_name}</td>
      <td>{Del.delivery_number}</td>
      <td>{Del.delivery_email}</td>
      </tr>
      )
})
  return (
    <>
      

      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="success" size="lg">
                Delivery Requests
              </Button>
                <Button
                  className="btn-round btn-icon"
                  color="warning"
                  id="tooltip515203352"
                  size="lg"
                >
                  <i className="far fa-envelope" ></i>
                </Button>
                  <UncontrolledTooltip delay={0} target="tooltip515203352">
                    Notifications
                  </UncontrolledTooltip>
                <Button className="btn-round" color="success" size="lg">
                Delivery Status
                </Button>
              </div>
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
                {del}
              </tbody>
            </Table>
                   </CardText>
                  <CardLink href="/editdelp.js" onClick={e => e.preventDefault()}>
                    Edit
                   </CardLink>
                 </CardBody>
               </Card></h4>
            <Row>
              
            </Row>
           </Container>
          </div>
        <DefaultFooter />
        </div>
      </>
    );
}

export default ProfilePage;

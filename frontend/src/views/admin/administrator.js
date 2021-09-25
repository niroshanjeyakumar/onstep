import React,{useEffect,useState} from "react";
import Axios from 'axios'
//reactstrap components
import {
  Row,
  Card,
  CardTitle,
  CardSubtitle,
  Button,
  CardBody,
  Col,
ListGroup,
ListGroupItem
} from "reactstrap";

// core components
import ExamplesNavbar from "components/SideNav/adminNav";
import AdminHead from "components/Headers/adminHeader";
import TransparentFooter from "components/Footers/Footer1.js";
import AdminSideNav from "components/SideNav/sidenav";
import "assets/css/admin.css"



function AdminHome() {

  const[delivery,setDelivery]=useState([]);
  const[message,setMessage]=useState([]);
  const[supermarket,setSupermarket]=useState([]);
  const[customer,setCustomer]=useState([]);

    React.useEffect(() => {
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
    useEffect(()=>{
      Axios.get('http://localhost:4000/onstep/message/unread')
      .then(res=>{
        setMessage(res.data);
    })
    .catch(function(error){
        console.log(error);
    })
  });
  useEffect(()=>{
    Axios.get('http://localhost:4000/onstep/user/supermarket/')
    .then(res=>{
      setSupermarket(res.data);
  })
  .catch(function(error){
      console.log(error);
  })
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
const cust=customer.map(function(Cust,index){
  return(
    <ListGroupItem key={index}>{Cust.customer_name}</ListGroupItem>
  )
})
const seller=supermarket.map(function(Sup,index){
  return(
    <ListGroupItem key={index}>{Sup.supermarket_name}</ListGroupItem>
  )
})
const del=delivery.map(function(Del,index){
  return(
    <ListGroupItem key={index}>{Del.delivery_name}</ListGroupItem>
  )
})
const unread=message.map(function(Unread,index){
  return(
    <ListGroupItem key={index}>{Unread.subject}</ListGroupItem>
  )
})

  return (
    <>
      <ExamplesNavbar />
      <AdminSideNav/>
        <div className="admin-content">
      
          <h2 align="center">Admin Dashboard</h2>
          
          <Row>
          <Col xs="3">
      <Card>
        <CardBody>
          <CardTitle>Customers</CardTitle>
          <ListGroup>
              {cust}
        </ListGroup>
         
          
          <Button href='/administrator/customer'>View All</Button>
        </CardBody>
      </Card>
      </Col >
      <Col xs="3">
      <Card>
        <CardBody>
          <CardTitle>Sellers</CardTitle>
          <ListGroup>
              {seller}
        </ListGroup>
         
          
          <Button href='/administrator/supermarket'>View All</Button>
        </CardBody>
      </Card>
      </Col>
      <Col xs="3">
      <Card>
        <CardBody>
          <CardTitle>Delivery</CardTitle>
          <ListGroup>
              {del}
        </ListGroup>
         
          
          <Button href='/administrator/delivery'>View All</Button>
        </CardBody>
      </Card>
    </Col>
    </Row>
    <Row>
      <Col>
      <Card>
        <CardBody>
          <CardTitle>Messages</CardTitle>
          <CardSubtitle>Subject</CardSubtitle>
          <ListGroup>
              {unread}
        </ListGroup> 
          <Button href='/administrator/unread'>View All</Button>
        </CardBody>
      </Card>
    </Col>          
    
    </Row>
          <TransparentFooter />
          </div>

    </>
  );
}

export default AdminHome;

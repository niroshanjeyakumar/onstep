import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import {Button,Badge} from 'reactstrap'
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import Axios from "axios";

function IndexNavbar() {
  const[message,setMessage]=useState([]);
  useEffect(()=>{
    Axios.get('http://localhost:4000/onstep/message/unread')
        .then(res=>{
          setMessage(res.data);
      })
      .catch(function(error){
          console.log(error);
      })
  }
  )
  //const val = JSON.parse(message);
  const unread = message.length;
  
  return (
    <>
      
      <Navbar className="relative" color="info">

        <Container  className="justify-content-end">
        <Button color="white" outline>
  Notifications <Badge color="dark">{unread}</Badge>
      </Button>
          <Nav navbar>
          
              <NavItem>
                <NavLink
                  href="/logout" navbar
                >
                  <i className="now-ui-icons media-1_button-power"></i>
                  <p>Logout</p>
                </NavLink>
              </NavItem>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;

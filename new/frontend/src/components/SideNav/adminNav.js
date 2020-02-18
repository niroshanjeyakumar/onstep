import React from "react";
import { Link } from "react-router-dom";
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

function IndexNavbar() {
  
  return (
    <>
      
      <Navbar className="relative" color="info">
        <Container  className="justify-content-end">
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

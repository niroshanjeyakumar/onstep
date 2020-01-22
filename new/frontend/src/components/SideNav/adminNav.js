import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="/administrator/"
        
                >
                  <i className="now-ui-icons ui-2_settings-90"></i>
                  <p>Dashboard</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons users_single-02"></i>
                  <p>Users</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/administrator/customer" tag={Link}>
                    <i className="now-ui-icons users_single-02"></i>
                   Customers
                  </DropdownItem>
                  <DropdownItem
                    href="/administrator/supermarket"
                  >
                    <i className="now-ui-icons shopping_shop"></i>
                    Supermarkets
                  </DropdownItem>
                  <DropdownItem
                    href="/administrator/delivery"
                  >
                    <i className="now-ui-icons shopping_delivery-fast"></i>
                    Delivery Personnl
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons ui-1_email-85"></i>
                  <p>Feedback/Complaints</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/administrator/unread_messages" tag={Link}>
                    <i className="now-ui-icons ui-2_chat-round"></i>
                    Unread Feedback
                  </DropdownItem>
                  <DropdownItem
                    href="/administrator/read_messages"
                    target="_blank"
                  >
                    <i className="now-ui-icons ui-2_chat-round"></i>
                    Read Feedback
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="/"
                >
                  <i className="now-ui-icons media-1_button-power"></i>
                  <p>Logout</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;

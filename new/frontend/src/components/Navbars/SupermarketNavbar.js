import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
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
            <NavbarBrand
              to ="/supermarket-profile" tag={Link}
              id="navbar-brand"
            >
              Onstep
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Your Online Grocery Shop
            </UncontrolledTooltip>
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
                  to ="/view" tag={Link}
                  id="shopping-cart"
                >
                  <i className="now-ui-icons files_paper"></i>
                  <p className="d-lg-none d-xl-none">Orders</p>
                </NavLink>
                <UncontrolledTooltip target="#shopping-cart">
                 View Products
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
              <NavLink
                  to ="/addproduct" tag={Link}
                  id="add_product"
                >
                  <i className="now-ui-icons shopping_tag-content"></i>
                  <p className="d-lg-none d-xl-none">Orders</p>
                </NavLink>
                <UncontrolledTooltip target="#add_product">
                 Add Product
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
              <NavLink
                  to ="/incomingorders" tag={Link}
                  id="incomingOrder"
                >
                  <i className="now-ui-icons shopping_bag-16"></i>
                  <p className="d-lg-none d-xl-none">Orders</p>
                </NavLink>
                <UncontrolledTooltip target="#incomingOrder">
                 Incoming Orders
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/supermarkethome" tag={Link}
                  id="myprofile"
                >
                  <i className="now-ui-icons shopping_shop"></i>
                  <p className="d-lg-none d-xl-none">My Profile</p>
                </NavLink>
                <UncontrolledTooltip target="#myprofile">
                 View My Profile
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/logout" tag={Link}
                  id="logout"
                >
                  <i className="now-ui-icons media-1_button-power"></i>
                  <p className="d-lg-none d-xl-none">Logout</p>
                </NavLink>
                <UncontrolledTooltip target="#logout">
                 LogOut
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;

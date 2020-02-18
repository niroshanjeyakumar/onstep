import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
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
import Axios from "axios";


function CustomerNavBar() {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [Cat,setCat]= useState([]);
  useEffect(() => {
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

useEffect(()=>{
  Axios.get('http://localhost:4000/onstep/category/').then(res=>{setCat(res.data)}).catch(err=>{console.log(err)})
})
//console.log(Cat);

const dropdown=Cat.map(function(category,index){
  //console.log(category.category_name);
  return(

    <DropdownItem to={`/products/${category._id}`} tag={Link} key={index}>
                    <i className="now-ui-icons shopping_basket"></i>
                    {category.category_name}
                  </DropdownItem>
  )
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
              to ="/products" tag={Link}
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
              
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons shopping_shop"></i>
                  <p>Products</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/products" tag={Link}>
                    <i className="now-ui-icons shopping_basket"></i>
                    All Products
                  </DropdownItem>
                  {dropdown}
                </DropdownMenu>
              </UncontrolledDropdown>
             
              <NavItem>
                <NavLink
                  to ="/shopping_cart" tag={Link}
                  id="shopping-cart"
                >
                  <i className="now-ui-icons shopping_cart-simple"></i>
                  <p className="d-lg-none d-xl-none">My Cart</p>
                </NavLink>
                <UncontrolledTooltip target="#shopping-cart">
                 View My Shopping Cart
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  to ="/myorders" tag={Link}
                  id="myorders"
                >
                  <i className="now-ui-icons shopping_bag-16"></i>
                  <p className="d-lg-none d-xl-none">My Cart</p>
                </NavLink>
                <UncontrolledTooltip target="#myorders">
                 View My Orders
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/profile-page" tag={Link}
                  id="myprofile"
                >
                  <i className="now-ui-icons users_circle-08"></i>
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

export default CustomerNavBar;

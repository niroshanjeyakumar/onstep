import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/Navbar1.js";
import TransparentFooter from "components/Footers/Footer1.js";
import Customer from "views/login/customer.js";
import Supermarket from "views/login/supermarket.js"
import Delivery from "views/login/delivery.js"

function Login() {
  const [iconPills, setIconPills] = React.useState("1");
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/onstepheader.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <h2>Log In</h2>
            <Col className="ml-auto mr-auto" md="30">
              <Card className="card-login card-plain">
                
                  <CardHeader className="text-center">
                    <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Customer
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Supermarket
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_delivery-fast"></i>
                        Delivery Personnel
                      </NavLink>
                    </NavItem>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                    <Customer />
                    </TabPane>
                    <TabPane tabId="iconPills2">
                    <Supermarket />
                    </TabPane>
                    <TabPane tabId="iconPills3">
                    <Delivery />
                    </TabPane>
                  </TabContent>
                  </CardBody>
                  <CardFooter className="text-center">
                   
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="/signup" 
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Login;

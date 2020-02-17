import React from "react";
import "assets/css/contactus.css"
// reactstrap components
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/onstepNavbar";
import CustomerNavBar from "components/Navbars/Customernavbar";
import DeliveryNavbar from "components/Navbars/DeliveryNavbar";
import SupermarketNavbar from "components/Navbars/SupermarketNavbar";

import TransparentFooter from "components/Footers/Footer1.js";


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

  const userDetails=sessionStorage.getItem('user');
  const user =JSON.parse(userDetails);
  const type = user.type;


  return (
    <>

    {type =='customer' ? <CustomerNavBar/> : type =='delivery'? <DeliveryNavbar/> : type=='supermarket' ? <SupermarketNavbar/> : <ExamplesNavbar/>}
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/onstepheader.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>

            <h2>Contact Us</h2>
            <Form>
                <FormGroup row>
                    <Label for="subject" sm={2}>Subject</Label>
                    <Col sm={10}>
                    <Input type="text" name="subject" id="subject" placeholder="Enter the Subject" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="message" sm={2}>Message</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="text" id="message" className="messageText" />
                    </Col>
                </FormGroup>
            </Form>
            </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Login;

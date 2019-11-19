import React,{useState} from "react";
import axios from 'axios'

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  FormText,
  Label,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const [emailFocus, setemailFocus] = useState(false);
  const [nameFocus, setnameFocus] = useState(false);
  const [addressFocus, setaddressFocus] = useState(false);
  const [numberFocus, setnumberFocus] = useState(false);
  const [passwordFocus, setpasswordFocus] = useState(false);
  const [confirmpassFocus, setconfirmpassFocus] = useState(false);
  const [customer_email, setcustomer_email]= useState(" ");
  const [customer_name, setcustomer_name]= useState(" ");
  const [customer_address, setcustomer_address]= useState("");
  const [customer_number, setcustomer_number]= useState("");
  const [customer_password, setcustomer_password]= useState("");
  const [customer_confirmpassword, setcustomer_confirmpassword]= useState("");
  const [respose, setresponse] =useState([]);

  
     function CustLogin(){
          
    axios.post('http://localhost:4000/onstep/user/customer/profile',{email:customer_email,name:customer_name,address:customer_address,number:customer_number,password:customer_password} )
    .then(res => setresponse(res.data));
          if(customer_password===respose.customer_password){ 
              console.log("move to customer home")
          }
          else{
            console.log("error")
          }
  }
  
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container"> 
            </div>
            <h2 className="title">Update profile info</h2>
            <h5 className="description">
            <Form>
        <FormGroup>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <Input
            aria-describedby="emailHelp"
            id="exampleInputEmail1"
            placeholder="Enter email"
            type="email"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="exampleInputName1">Name</label>
          <Input
            id="exampleInputName1"
            placeholder="Enter name"
            type="names"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="exampleAddress1">Address</label>
          <Input
            id="exampleInputAddress1"
            placeholder="Enter Address"
            type="names"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="exampleContactNumber1">Contact Number</label>
          <Input
            id="exampleInputContactNumber1"
            placeholder="Enter contact number"
            type="names"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="exampleInputPassword1">Password</label>
          <Input
            id="exampleInputPassword1"
            placeholder="Password"
            type="password"
          ></Input>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox"></Input>
            <span className="form-check-sign"></span>
            I confirm that I will be providing you with my personal data and hereby expressly consent to the use of such data for the purpose of the order placed with you.
          </Label>
        </FormGroup>
        <Button color="primary" type="submit">
          Update details
        </Button>
      </Form>
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                      
                      
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg11.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;

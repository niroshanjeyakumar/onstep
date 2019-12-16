import React,{useState} from "react";
import {Redirect} from 'react-router-dom';
import axios from 'axios';

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
import ExamplesNavbar from "components/Navbars/Customernavbar";
import ProfilePageHeader from "components/Headers/customerhomeHeader";
import DefaultFooter from "components/Footers/onstepFooter";

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
          
    axios.post('http://localhost:4000/onstep/user/customer/edit',{email:customer_email,name:customer_name,address:customer_address,number:customer_number,password:customer_password} )
    .then(res => setresponse(res.data));
          if(customer_password===respose.customer_password){ 
              console.log("move to customer home")
          }
          else{
            console.log("error")
          }
  };
  function logout(){
  return(<Redirect to="/" />)
  }
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
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
            
               
          </Container>
        </div>
        <DefaultFooter />
      </div>
      </>
  );
}

export default ProfilePage;

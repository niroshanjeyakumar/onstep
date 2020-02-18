import React,{useState,useEffect} from "react";
import "assets/css/contactus.css"
// reactstrap components
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  Button
} from "reactstrap";
import Axios from 'axios';

// core components
import ExamplesNavbar from "components/Navbars/onstepNavbar";
import CustomerNavBar from "components/Navbars/Customernavbar";
import DeliveryNavbar from "components/Navbars/DeliveryNavbar";
import SupermarketNavbar from "components/Navbars/SupermarketNavbar";
import IndexHeader from "components/Headers/onstepHeader.js";
import TransparentFooter from "components/Footers/Footer1.js";


function Login() {
    const [Subject, setSubject]= useState("");
    const [Message, setMessage]= useState("");

  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const userDetails=sessionStorage.getItem('user');
  const user =JSON.parse(userDetails);
  const type = user.type;
const ID = user.details._id;

function SaveMessage(){

    const messageData={
        userType:type,
        user:ID,
        subject:Subject,
        message:Message
    };
    Axios.post('http://localhost:4000/onstep/message/add',messageData).then(res=>console.log(res)).catch(err=>console.log(err))
}
  return (
    <>

    {type ==='customer' ? <CustomerNavBar/> : type ==='delivery'? <DeliveryNavbar/> : type==='supermarket' ? <SupermarketNavbar/> : <ExamplesNavbar/>}
      <div className="wrapper">
      <IndexHeader />
        <div className="main">
          <Container>

            <h2>Contact Us</h2>
            <Form>
                <FormGroup row>
                    <Label for="subject" sm={2}>Subject</Label>
                    <Col sm={10}>
                    <Input type="text" name="subject" id="subject" placeholder="Enter the Subject"
                    value={Subject}
                    onChange={e=> setSubject(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="message" sm={2}>Message</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="text" id="message" className="messageText" 
                    value={Message}
                    onChange={e=> setMessage(e.target.value)}/>
                    </Col>
                </FormGroup>
                <Button color="primary" size="lg" onClick={()=>SaveMessage()}>Submit</Button>
            </Form>

            </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Login;

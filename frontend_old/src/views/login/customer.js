import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {
Form,
Alert,
Container,
InputGroup,
InputGroupAddon,
InputGroupText, 
Input,Button
} from "reactstrap";

function Customerlogin (){
    const [emailFocus, setemailFocus] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);
    const [customer_email, setcustomer_email]= useState(" ");
    const [customer_password, setcustomer_password]= useState("");
    const [Cus,setCus] = useState("");
    const [loggedin,setLoggedin] = useState(false);
    const [loginfailAlert, setloginfailAlert] = React.useState(false);

    function CustLogin(){
     // setresponse("");
      setloginfailAlert(false);
    axios.post('http://localhost:4000/onstep/user/customer/login',{email:customer_email, password:customer_password} )
    .then(res => {

          if (res.data.email===false){
              console.log("Email not found");
              setloginfailAlert(true);
          }
          else if(res.data.email===true && res.data.password===false){
            console.log("Password wrong");
            setloginfailAlert(true);
          }
          else if(res.data.email===true && res.data.password===true){
            setLoggedin(true);

            setCus(res.data.details._id)
            var user={type:'customer', details:res.data.details};
            sessionStorage.setItem('user',JSON.stringify(user))
            setLoggedin(true);
          }
          }
          );}
    
if(loggedin){
  return(
    <Redirect to="/products" />
  )
}
else{
    
return(
<>
                <Alert color="danger" isOpen={loginfailAlert}>
                  <Container>
                    <div className="alert-icon">
                      <i className="now-ui-icons ui-1_bell-53"></i>
                    </div>
                    Invalid Email and/or Password
                    <button
                      type="button"
                      className="close"
                      onClick={() => setloginfailAlert(false)}
                    >
                      <span aria-hidden="true">
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                      </span>
                    </button>
                  </Container>
                </Alert>
                <Form action="" className="form" method="post">
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        name="customer_email"
                        value={customer_email}
                        onChange={e=> setcustomer_email(e.target.value)}
                        onFocus={() => setemailFocus(true)}
                        onBlur={() => setemailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (passwordFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        name="customer_password"
                        value={customer_password}
                        onChange={e=> setcustomer_password(e.target.value)}
                        onFocus={() => setpasswordFocus(true)}
                        onBlur={() => setpasswordFocus(false)}
                      ></Input>
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      size="lg"
                      onClick={CustLogin}
                    >
                      Login
                    </Button>
                    </Form>
                    </>
)}
}

export default Customerlogin;
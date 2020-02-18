import React, {useState} from 'react'
import axios from 'axios'
import {
Form,Alert,Container,
InputGroup, InputGroupAddon,InputGroupText, Input,Button
} from "reactstrap";


function CustomerRegistration (){
    const [emailFocus, setemailFocus] = useState(false);
    const [nameFocus, setnameFocus] = useState(false);
    const [addressFocus, setaddressFocus] = useState(false);
    const [numberFocus, setnumberFocus] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);
    const [confirmpassFocus, setconfirmpassFocus] = useState(false);
    const [customer_email, setcustomer_email]= useState(" ");
    const [customer_name, setcustomer_name]= useState("");
    const [customer_address, setcustomer_address]= useState("");
    const [customer_number, setcustomer_number]= useState("");
    const [customer_password, setcustomer_password]= useState("");
    const [customer_confirmpassword, setcustomer_confirmpassword]= useState("");
    const [emailAlert, setemailAlert] = React.useState(false);
    const [passwordAlert, setpasswordAlert] = React.useState(false);

  
    function saveCustomer(){
      setemailAlert(false);
      setpasswordAlert(false);
      if (customer_password!==customer_confirmpassword){
         setpasswordAlert(true);
      }
      else{
      const newCust={
        customer_name:customer_name,
        customer_email:customer_email,
        customer_number:customer_number,
        customer_address:customer_address,
        customer_password:customer_password
    }
    axios.post('http://localhost:4000/onstep/user/customer/add',newCust)
    .then(res => {console.log(res.data);
      const data=res.data.email;
      if (data===true){
        setemailAlert(true);
      }
    }
    ); }
    }


    
return(
<>
                  <Alert color="danger" isOpen={emailAlert}>
                  <Container>
                    <div className="alert-icon">
                      <i className="now-ui-icons ui-1_bell-53"></i>
                    </div>
                    Email already in use!
                    <button
                      type="button"
                      className="close"
                      onClick={() => setemailAlert(false)}
                    >
                      <span aria-hidden="true">
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                      </span>
                    </button>
                  </Container>
                </Alert>
                <Alert color="warning" isOpen={passwordAlert}>
                  <Container>
                    <div className="alert-icon">
                      <i className="now-ui-icons ui-1_bell-53"></i>
                    </div>
                    Passwords do not match!
                    <button
                      type="button"
                      className="close"
                      onClick={() => setpasswordAlert(false)}
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
                        (nameFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_single-02"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Name"
                        type="text"
                        name="customer_name"
                        value={customer_name}
                        onChange={e=> setcustomer_name(e.target.value)}
                        onFocus={() => setnameFocus(true)}
                        onBlur={() => setnameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (addressFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Address"
                        type="text"
                        name="customer_address"
                        value={customer_address}
                        onChange={e=> setcustomer_address(e.target.value)}
                        onFocus={() => setaddressFocus(true)}
                        onBlur={() => setaddressFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (numberFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons tech_mobile"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Contact Number"
                        type="text"
                        name="customer_number"
                        value={customer_number}
                        onChange={e=> setcustomer_number(e.target.value)}
                        onFocus={() => setnumberFocus(true)}
                        onBlur={() => setnumberFocus(false)}
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
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (confirmpassFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Confirm Password"
                        type="password"
                        name="customer_confirmpassword"
                        value={customer_confirmpassword}
                        onChange={e=> setcustomer_confirmpassword(e.target.value)}
                        onFocus={() => setconfirmpassFocus(true)}
                        onBlur={() => setconfirmpassFocus(false)}
                      ></Input>
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      size="lg"
                      onClick={saveCustomer}
                    >
                      Sign Up 
                    </Button>
                    </Form>
                    </>
)
}

export default CustomerRegistration;
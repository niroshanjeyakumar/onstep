import React, {useState} from 'react'
import axios from 'axios'
import {
Form, Alert, Container,
InputGroup, InputGroupAddon,InputGroupText, Input,Button
} from "reactstrap";


function SupermarketRegistration (){
    const [emailFocus, setemailFocus] = useState(false);
    const [nameFocus, setnameFocus] = useState(false);
    const [areaFocus, setareaFocus] = useState(false);
    const [addressFocus, setaddressFocus] = useState(false);
    const [numberFocus, setnumberFocus] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);
    const [confirmpassFocus, setconfirmpassFocus] = useState(false);
    const [supermarket_email, setsupermarket_email]= useState(" ");
    const [supermarket_name, setsupermarket_name]= useState("");
    const [supermarket_address, setsupermarket_address]= useState("");
    const [supermarket_area, setsupermarket_area]= useState("");
    const [supermarket_number, setsupermarket_number]= useState("");
    const [supermarket_password, setsupermarket_password]= useState("");
    const [supermarket_confirmpassword, setsupermarket_confirmpassword]= useState("");
    const [emailAlert, setemailAlert] = React.useState(false);
    const [passwordAlert, setpasswordAlert] = React.useState(false);
  
    function saveSupermarket(){
      setemailAlert(false);
      setpasswordAlert(false);
      if (supermarket_password!==supermarket_confirmpassword){
         setpasswordAlert(true);
      }
      else{
      const newSupermarket={
        supermarket_name:supermarket_name,
        supermarket_email:supermarket_email,
        supermarket_number:supermarket_number,
        supermarket_area:supermarket_area,
        supermarket_address:supermarket_address,
        supermarket_password:supermarket_password
    }
    axios.post('http://localhost:4000/onstep/user/supermarket/add',newSupermarket)
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
                        name="supermarket_email"
                        value={supermarket_email}
                        onChange={e=> setsupermarket_email(e.target.value)}
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
                          <i className="now-ui-icons shopping_shop"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Name"
                        type="text"
                        name="supermarket_name"
                        value={supermarket_name}
                        onChange={e=> setsupermarket_name(e.target.value)}
                        onFocus={() => setnameFocus(true)}
                        onBlur={() => setnameFocus(false)}
                      ></Input>
                    </InputGroup>

                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (areaFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_world"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Area"
                        type="text"
                        name="supermarket_area"
                        value={supermarket_area}
                        onChange={e=> setsupermarket_area(e.target.value)}
                        onFocus={() => setareaFocus(true)}
                        onBlur={() => setareaFocus(false)}
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
                        name="supermarket_address"
                        value={supermarket_address}
                        onChange={e=> setsupermarket_address(e.target.value)}
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
                        name="supermarket_number"
                        value={supermarket_number}
                        onChange={e=> setsupermarket_number(e.target.value)}
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
                        name="supermarket_password"
                        value={supermarket_password}
                        onChange={e=> setsupermarket_password(e.target.value)}
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
                        name="supermarket_confirmpassword"
                        value={supermarket_confirmpassword}
                        onChange={e=> setsupermarket_confirmpassword(e.target.value)}
                        onFocus={() => setconfirmpassFocus(true)}
                        onBlur={() => setconfirmpassFocus(false)}
                      ></Input>
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color="success"
                      size="lg"
                      onClick={saveSupermarket}
                    >
                      Sign Up 
                    </Button>
                    </Form>
                    </>
)
}

export default SupermarketRegistration;
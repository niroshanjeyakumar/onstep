import React, {useState} from 'react'
import axios from 'axios'
import {
Form,Alert,Container,
InputGroup, InputGroupAddon,InputGroupText, Input,Button
} from "reactstrap";


function DeliveryRegistration (){
    const [emailFocus, setemailFocus] = useState(false);
    const [nameFocus, setnameFocus] = useState(false);
    const [numberFocus, setnumberFocus] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);
    const [confirmpassFocus, setconfirmpassFocus] = useState(false);
    const [delivery_email, setdelivery_email]= useState(" ");
    const [delivery_name, setdelivery_name]= useState("");
    const [delivery_number, setdelivery_number]= useState("");
    const [delivery_password, setdelivery_password]= useState("");
    const [delivery_confirmpassword, setdelivery_confirmpassword]= useState("");
    const [emailAlert, setemailAlert] = React.useState(false);
    const [passwordAlert, setpasswordAlert] = React.useState(false);
  
    function saveDelivery(){
      setemailAlert(false);
      setpasswordAlert(false);
      if (delivery_password!==delivery_confirmpassword){
         setpasswordAlert(true);
      }
      else{
      const newDel={
        delivery_name:delivery_name,
        delivery_email:delivery_email,
        delivery_number:delivery_number,
        delivery_password:delivery_password
    }
    axios.post('http://localhost:4000/onstep/user/delivery/add',newDel)
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
                        name="delivery_email"
                        value={delivery_email}
                        onChange={e=> setdelivery_email(e.target.value)}
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
                          <i className="now-ui-icons shopping_delivery-fast"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Name"
                        type="text"
                        name="delivery_name"
                        value={delivery_name}
                        onChange={e=> setdelivery_name(e.target.value)}
                        onFocus={() => setnameFocus(true)}
                        onBlur={() => setnameFocus(false)}
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
                        name="delivery_number"
                        value={delivery_number}
                        onChange={e=> setdelivery_number(e.target.value)}
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
                        name="delivery_password"
                        value={delivery_password}
                        onChange={e=> setdelivery_password(e.target.value)}
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
                        name="delivery_confirmpassword"
                        value={delivery_confirmpassword}
                        onChange={e=> setdelivery_confirmpassword(e.target.value)}
                        onFocus={() => setconfirmpassFocus(true)}
                        onBlur={() => setconfirmpassFocus(false)}
                      ></Input>
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color="warning"
                      size="lg"
                      onClick={saveDelivery}
                    >
                      Sign Up 
                    </Button>
                    </Form>
                    </>
)
}

export default DeliveryRegistration;
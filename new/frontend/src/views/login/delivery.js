import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {
Form,Alert,Container,
InputGroup, InputGroupAddon,InputGroupText, Input,Button
} from "reactstrap";


function DeliveryLogin (){
    const [emailFocus, setemailFocus] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);
    const [delivery_email, setdelivery_email]= useState(" ");
    const [delivery_password, setdelivery_password]= useState("");
    const [Del,setDel] = useState("");
   // const [response, setresponse] =useState([]);
    const [loggedin,setLoggedin] = useState(false);
    const [loginfailAlert, setloginfailAlert] = React.useState(false);

    function DelLogin(){
      
      
      axios.post('http://localhost:4000/onstep/user/delivery/login',{email:delivery_email, password:delivery_password} )
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
          
          setDel(res.data.details._id)
          var user={type:'delivery', details:res.data.details};
          sessionStorage.setItem('user',JSON.stringify(user))
          setLoggedin(true);
        }
      });
    }

    if(loggedin){
      return(
        <Redirect to={`/delivery-home/${Del}`} />
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
                    <Button
                      block
                      className="btn-round"
                      color="warning"
                      size="lg"
                      onClick={DelLogin}
                    >
                      Login 
                    </Button>
                    </Form>
                    </>
)}
}

export default DeliveryLogin;
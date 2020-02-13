import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {
Form,Alert,Container,
InputGroup, InputGroupAddon,InputGroupText, Input,Button
} from "reactstrap";


function SupermarketLogin (){
    const [emailFocus, setemailFocus] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);
    const [supermarket_email, setsupermarket_email]= useState(" ");
    const [supermarket_password, setsupermarket_password]= useState("");
   // const [response, setresponse] =useState([]);
    const [loggedin,setLoggedin] = useState(false);
    const [loginfailAlert, setloginfailAlert] = React.useState(false);
    function SmarketLogin(){
      
      
      axios.post('http://localhost:4000/onstep/user/supermarket/login',{email:supermarket_email, password:supermarket_password} )
      .then(res =>  {
    
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
      var user={type:'supermarket', details:res.data.details};
            sessionStorage.setItem('user',JSON.stringify(user))
    }
  });
    }
    
    if(loggedin){
      return(
        <Redirect to="/supermarkethome" />
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

                    <Button
                      block
                      className="btn-round"
                      color="success"
                      size="lg"
                      onClick={SmarketLogin}
                    >
                      Login 
                    </Button>
                    </Form>
                    </>
)}
}

export default SupermarketLogin;
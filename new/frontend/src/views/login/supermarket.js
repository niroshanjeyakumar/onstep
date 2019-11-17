import React, {useState} from 'react'
import axios from 'axios'
import {
Form,
InputGroup, InputGroupAddon,InputGroupText, Input,Button
} from "reactstrap";


function SupermarketLogin (){
    const [emailFocus, setemailFocus] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);
    const [supermarket_email, setsupermarket_email]= useState(" ");
    const [supermarket_password, setsupermarket_password]= useState("");
    const [respose, setresponse] =useState([]);
  
    function SmarketLogin(){
      
      
      axios.post('http://localhost:4000/onstep/user/supermarket/login',{email:supermarket_email, password:supermarket_password} )
      .then(res => setresponse(res.data));
            if(supermarket_password===respose.supermarket_password){
                console.log("move to Supermarket home")
            }
            else{
              console.log("error")
            }
    }
    


    
return(
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
)
}

export default SupermarketLogin;
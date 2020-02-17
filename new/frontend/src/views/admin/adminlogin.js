import React,{useState} from 'react';
import{
Container,InputGroup,Form,Input,Button,Col,Card,CardBody, CardFooter

} from 'reactstrap'
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import TransparentFooter from "components/Footers/Footer1.js";

function AdminLogin(){


        const[username,setusername]=useState("");
        const[password,setpassword]=useState("");
        const[LoggedIn,setLoggedIn]=useState(false)


  
        function adminlogin(){
            const login={
                username:username,
                password:password
            };
            axios.post("http://localhost:4000/onstep/admin/login",login).then(res=>{
              console.log(res.data);    
            if(res.data.loggedin===true){
                    console.log(res.data);
                    const user={type:'admin'};
                    sessionStorage.setItem('user',JSON.stringify(user));
                    setLoggedIn(true);
                }    }
            ).catch(err=>console.log(err));

        }

        if(LoggedIn){
            return(
              <Redirect to="/administrator" />
            )
          }
          else{
        return(
            <>
        
        <div className="page-header clear-filter" filter-color="blue">
        
            <div className="content">
            <Container>
            <h1 >ADMINISTRATOR</h1>
            <Col className="ml-auto mr-auto" md={5}>
            <Card className="card-login card-plain">
                <CardBody>
                    <Form action="" className="form" method="post">
                    <InputGroup >
                      <Input
                        placeholder="Email Address"
                        type="email"
                        name="customer_email"
                        value={username}
                        onChange={e=> setusername(e.target.value)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={ "no-border input-lg"}>
                      
                      <Input
                        placeholder="Password"
                        type="password"
                        name="customer_password"
                        value={password}
                        onChange={e=> setpassword(e.target.value)}
                      ></Input>
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color=""
                      size="sml"
                      onClick={adminlogin}
                    >
                      Login
                    </Button>
                    </Form>
                    </CardBody>
                    <CardFooter className="text-center">
                    <div >
                      <h6>
                        <Button
                          className="btn-link "
                          href="/onstep" 
                          color="black"
                        >
                          Return to website
                        </Button>
                      </h6>
                    </div>
                    </CardFooter>
                    </Card>
                    </Col>
            </Container>
            </div>
</div>
<TransparentFooter/>
            </>
        )
          }



}

export default AdminLogin;
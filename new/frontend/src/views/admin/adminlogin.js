import React,{useState} from 'react';
import{
Container,InputGroup,Form,Input,Button,Col,Card,CardBody, CardFooter

} from 'reactstrap'
import {Redirect} from 'react-router-dom'
import axios from 'axios';


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
              <Redirect to="/profile-page" />
            )
          }
          else{
        return(
            <>
        
        <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/onstepheader.jpg") + ")"
          }}
        ></div>
            <div className="content">
            <Container>
            <h1>ADMINISTRATOR</h1>
            <Col className="ml-auto mr-auto" md="30">
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
                      onClick={()=>adminlogin}
                    >
                      Login
                    </Button>
                    </Form>
                    </CardBody>
                    <CardFooter className="text-center">
                    <div >
                      <h6>
                        <a
                          className="link "
                          href="/onstep" 
                        >
                          Return to website
                        </a>
                      </h6>
                    </div>
                    </CardFooter>
                    </Card>
                    </Col>
            </Container>
            </div>
</div>
            </>
        )
          }



}

export default AdminLogin;
import React, {useState,useEffect} from "react";
import axios from 'axios';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import Navbar from "components/Navbars/SupermarketNavbar";
import TransparentFooter from "components/Footers/loginfooter";

function LoginPage() {
  const [nameFocus, setnameFocus] = useState(false);
  const [priceFocus, setpriceFocus] = useState(false);
  const [unitFocus, setunitFocus]= useState(false);
  const [name,setname] =useState("");
  const [unit, setunit] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
//const seller="Niroshan";
//const id="121984615684";
  function saveProduct(){
    const newProduct={
      product_name:name,
      product_unit:unit,
      product_price:price,
  }
  axios.post('http://localhost:4000/onstep/product/add',newProduct)
  .then(res => console.log(res.data)); 
  }

  return (
    <>
      <Navbar />
      
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/productbg.jpg") + ")"
          }}
        ></div>
        
        <div className="content">
          <Container>
          <h3 className="text-center">Insert Product</h3>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="post">
                  <CardHeader className="text-center">
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (nameFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons shopping_box"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder ="Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={e=> setname(e.target.value)}
                        onFocus={() => setnameFocus(true)}
                        onBlur={() => setnameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (unitFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons shopping_basket"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Unit"
                        type="text"
                        name="unit"
                        value={unit}
                        onChange={e=> setunit(e.target.value)}
                        onFocus={() => setunitFocus(true)}
                        onBlur={() => setunitFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (priceFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons business_money-coins"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Price"
                        type="text"
                        name="price"
                        value={price}
                        onChange={e=> setPrice(e.target.value)}
                        onFocus={() => setpriceFocus(true)}
                        onBlur={() => setpriceFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={saveProduct}
                      size="lg"
                    >
                      Add Product
                    </Button>
                   
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;

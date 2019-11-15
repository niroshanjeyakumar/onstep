import React from 'react';
import {
  Card, CardImg, CardText, CardBody,Form,InputGroup,InputGroupAddon,InputGroupText,Input,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Example = (props) => {
  const [firstFocus, setFirstFocus] = React.useState(false);
  return (
    <div className="row m-4
    ">
        <div className="col-sm-2 col-md-2">
      <Card >
        <CardImg top width="100%" src={require("assets/img/rice.png")} alt="Card image cap"/>
        <CardBody>
          <CardTitle>Item Name</CardTitle>
          <CardSubtitle>Seller</CardSubtitle>
          <CardText>Unit Price <br/> Units</CardText>
          <Form action="" className="form" method="post">
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
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
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      Login
                    </Button>
                    </Form>          
        </CardBody>
      </Card>
      </div>

      <div className="col-sm-2 col-md-2">
      <Card>
        <CardImg top width="100%" src={require("assets/img/rice.png")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>

      <div className="col-sm-2 col-md-2">
      <Card>
        <CardImg top width="100%" src={require("assets/img/rice.png")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>
      <div className="col-sm-2 col-md-2">
      <Card>
        <CardImg top width="100%" src={require("assets/img/rice.png")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>    

      <div className="col-sm-2 col-md-2">
      <Card>
        <CardImg top width="100%" src={require("assets/img/rice.png")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>      

      <div className="col-sm-2 col-md-2">
      <Card>
        <CardImg top width="100%" src={require("assets/img/rice.png")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>
      <div className="col-sm-2 col-md-2">

      <Card>
        <CardImg top width="100%" src={require("assets/img/rice.png")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>

      <div className="col-sm-2 col-md-2">
      <Card>
        <CardImg top width="100%" src={require("assets/img/rice.png")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>

      <div className="col-sm-2 col-md-2">
      <Card>
        <CardImg top width="100%" src={require("assets/img/rice.png")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>

      <div className="col-sm-2 col-md-2">

      <Card>
        <CardImg top width="100%" src={require("assets/img/rice.png")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>
    </div>
  );
};

export default Example;
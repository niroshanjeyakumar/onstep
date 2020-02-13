import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  UncontrolledTooltip,
  Card,
  CardBody,
  CardText,
  CardLink
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/DeliveryNavbar";
import ProfilePageHeader from "components/Headers/delivery-homeHeader";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="success" size="lg">
                Delivery Requests
              </Button>
                <Button
                  className="btn-round btn-icon"
                  color="warning"
                  id="tooltip515203352"
                  size="lg"
                >
                  <i className="far fa-envelope" ></i>
                </Button>
                  <UncontrolledTooltip delay={0} target="tooltip515203352">
                    Notifications
                  </UncontrolledTooltip>
                <Button className="btn-round" color="success" size="lg">
                Delivery Status
                </Button>
              </div>
            <h3 className="title">My Information</h3>
            <h4>
              <Card align="center" >
                <CardBody >
                  <CardText align="crenter">
                    <dl class="row" align="center">
                      <dt class="col-sm-3">Name</dt>
                        <dd class="col-sm-9">Mr. ABC</dd>

                      <dt class="col-sm-3">Phone Number</dt>
                        <dd class="col-sm-9">01234567890</dd>

                      <dt class="col-sm-3">E-mail</dt>
                        <dd class="col-sm-9">abc@123.com</dd>

                       <dt class="col-sm-3">Address</dt>
                       <dd class="col-sm-9">Piliyandala</dd>
                     </dl>
                   </CardText>
                  <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                    Edit
                   </CardLink>
                 </CardBody>
               </Card></h4>
            <Row>
              
            </Row>
           </Container>
          </div>
        <DefaultFooter />
        </div>
      </>
    );
}

export default ProfilePage;

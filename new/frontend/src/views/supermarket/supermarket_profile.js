import React from "react";

// reactstrap components
import {
  //Button,
  Container,
  Row,
  //UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/SupermarketNavbar";
import ProfilePageHeader from "components/Headers/supermarkethomeheader";
import DefaultFooter from "components/Footers/onstepFooter";

function ProfilePage() {
  //const [pills, setPills] = React.useState("2");
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
            <h3 className="title">My Information</h3>
            <h4>
              </h4>
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

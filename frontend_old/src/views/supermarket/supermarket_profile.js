import React from "react";

// reactstrap components
import {
  Container,
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

  const user=sessionStorage.getItem('user');
  const userData=JSON.parse(user);


  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">My Information</h3>
      
            <div className='content' style={{fontSize:18}}>
            Name :  {userData.details.supermarket_name}<br/>
            Address :{userData.details.supermarket_address}<br/>
            Contact Number :  {userData.details.supermarket_number} <br/>
            Email : {userData.details.supermarket_email} 
            </div>

           </Container>
          </div>
        <DefaultFooter />
        </div>
      </>
    );
}

export default ProfilePage;

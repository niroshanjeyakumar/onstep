import React from "react";
import FileUpload from '../../views/customer/FileUpload';


// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            
            backgroundImage: "url(" + require("assets/img/signup.jpg") + ")",
           //backgroundImage: "url(" + require("assets/img/bgn.jpg") + ")"

          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
           <h4 className="display-4 text-center mb-4">
             <i className="fab fa-react"></i> React file upload
              </h4> 
          
            <FileUpload/>
           
          </div>
          <h3 className="title">Customer profile</h3>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;

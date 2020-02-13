import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import "assets/css/admin.css";
function LandingPageHeader() {
  let pageHeader = React.createRef();

  // React.useEffect(() => {
  //   if (window.innerWidth > 200) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //         pageHeader.current.style.transform =
  //           "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });
  return (
    <>
      <div className="admin-header">
        <div
          className="admin-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/blue.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content">
          <Container>
            <h1 className="title">Administrator</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;

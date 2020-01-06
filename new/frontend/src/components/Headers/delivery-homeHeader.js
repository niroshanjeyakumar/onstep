import React from "react";

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

            backgroundImage: "url(" + require("assets/img/bgn.jpg") + ")"

          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">

            <img alt="..." src={require("assets/img/img_avatar5.png")}></img>

            <img alt="..." src={require("assets/img/prf.jpg")}></img>
          </div>
          <h3 className="title">Delivery Personnel</h3>
          <p className="category">Del-ID</p>

        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;

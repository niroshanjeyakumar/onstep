import React from "react";

//reactstrap components
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   NavItem,
//   NavLink,
//   Nav,
//   TabContent,
//   TabPane,
//   Container,
//   Col
// } from "reactstrap";

// core components
import ExamplesNavbar from "components/SideNav/adminNav";
import AdminHead from "components/Headers/adminHeader";
import TransparentFooter from "components/Footers/Footer1.js";
import AdminSideNav from "components/SideNav/sidenav";
import "assets/css/admin.css"



function AdminHome() {
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        // window.scrollTo(0, 0);
        // document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("landing-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });
  return (
    <>
      <ExamplesNavbar />
  
      <AdminSideNav/>
      

  
         
        <div className="admin-content">
        
          <h2 align="center">Admin Dashboard</h2>
          
          <p>bvau gnuhvi hjdvbnhh cfyvugyhbj nbvhcfytgbh bvcftguybh bvcgfytguhbn bvcbvau gnuhvi hjdvbnhh cfyvugyhbj nbvhcfytgbh bvcftguybh bvcgfytguhbn bvcgvbvau gnuhvi hjdvbnhh cfyvugyhbj nbvhcfytgbh bvcftguybh bvcgfytguhbn bvcgvbvau gnuhvi hjdvbnhh cfyvugyhbj nbvhcfytgbh bvcftguybh bvcgfytguhbn bvcgvbvau gnuhvi hjdvbnhh cfyvugyhbj nbvhcfytgbh bvcftguybh bvcgfytguhbn bvcgvbvau gnuhvi hjdvbnhh cfyvugyhbj nbvhcfytgbh bvcftguybh bvcgfytguhbn bvcgvbvau gnuhvi hjdvbnhh cfyvugyhbj nbvhcfytgbh bvcftguybh bvcgfytguhbn bvcgvbvau gnuhvi hjdvbnhh cfyvugyhbj nbvhcfytgbh bvcftguybh bvcgfytguhbn bvcgvgv</p>
          <TransparentFooter />
          </div>

    </>
  );
}

export default AdminHome;

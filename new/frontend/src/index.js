
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.2.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/customer/ProfilePage.js";
import OnStep from "views/onstep.js"
import Login from "views/login.js"
import SignUp from "views/signup.js"
import Cart from "views/customer/shoppingcart.js"
import AddProduct from "views/supermarket/addproduct.js"
import AvailableOrder from "views/delivery/availableorders.js"
import HomePage from './views/Homepage/HomePage';
import Profile from './views/profile/Profile';
import ViewProduct from './views/supermarket/viewproducts.js';
import DelProfile from "views/delivery/ProfilePage";
import Supermarket from "views/supermarket/supermarket_profile";
import Completedorders from "views/delivery/completedorders.js";
import AdminLayout from "layouts/Admin.jsx";
import MyOrders from "views/customer/myorders.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>

        <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />
    
    
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
   
        <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
         <Route
          path="/products"
          render={props => <OnStep {...props} />}
        />
           <Route
          path="/login"
          render={props => <Login {...props} />}
        />
        <Route
          path="/signup"
          render={props => <SignUp {...props} />}
        />
        <Route
          path="/shopping_cart"
          render={props => <Cart {...props} />}
        />
         <Route
          path="/myorders"
          render={props => <MyOrders {...props} />}
        />
        <Route
          path="/addproduct"
          render={props => <AddProduct {...props} />}
        />
        <Route
          path="/availableorder"
          render={props => <AvailableOrder {...props} />}
        />
        <Route
          path="/view"
          render={props => <ViewProduct {...props} />}
        />
        <Route
          path="/delivery-home"
          render={props => <DelProfile {...props} />}
          />
        <Route 
          path="/supermarkethome"
          render= {props => <Supermarket {...props}/>}
          />
          <Route 
          path="/completedorders"
          render= {props => <Completedorders {...props}/>}
          />
      
         {/* <Route
          path="/sm/vege"
          render={props => <Vege {...props} />}
        /> */}

        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Route path="/onstep" render={props =><HomePage {...props}/>} />
        <Route path="/profile" render={props => <Profile {...props} />} />
        <Redirect from="/" to="/onstep"/>
        <Redirect to="/onstep"/>
        
        
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
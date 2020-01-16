
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import OnStep from "views/onstep.js";
import Login from "views/login.js";
import SignUp from "views/signup.js";
import Cart from "views/customer/Cart.js";
import CustomerProfile from "views/customer/profilePage.js";
import AddProduct from "views/supermarket/addproduct.js";
import HomePage from './components/Homepage/HomePage';
import Profile from './components/profile/Profile';
import DelProfile from "views/delivery.js/ProfilePage"
import Sprofile from "views/supermarket/Sprofile";
// import Vege from "views/supermarket/Vege/Vege";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
         <Route
          path="/onstep"
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
          path="/customer-profile"
          render={props => <CustomerProfile {...props} />}
        />
        <Route
          path="/shopping_cart"
          render={props => <Cart {...props} />}
        />
        <Route
          path="/addproduct"
          render={props => <AddProduct {...props} />}
        />
          <Route
          path="/delivery-home"
          render={props => <DelProfile {...props} />}
        />
         <Route
          path="/supermarket"
          render={props => <Sprofile {...props} />}
        />
         {/* <Route
          path="/sm/vege"
          render={props => <Vege {...props} />}
        /> */}

        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Route path="/" exact component = {HomePage}/>
        <Route path="/profile" render={props => <Profile {...props} />} />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

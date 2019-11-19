
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
import OnStep from "views/onstep.js"
import Login from "views/login.js"
import SignUp from "views/signup.js"
import Cart from "views/customer/shoppingcart.js"
import AddProduct from "views/supermarket/addproduct.js"
import AvailableOrder from "views/delivery/availableorders.js"
import HomePage from './components/Homepage/HomePage';
import Profile from './components/profile/Profile';
import ViewProduct from './views/supermarket/viewproducts.js'
import DelProfile from "views/delivery.js/ProfilePage";

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
          path="/shopping_cart"
          render={props => <Cart {...props} />}
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
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Redirect from="/" to="/onstep"/>
        <Redirect to="/onstep"/>
        <Route path="/home" render={props => <HomePage{...props}/>} />
        <Route path="/profile" render={props => <Profile {...props} />} />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
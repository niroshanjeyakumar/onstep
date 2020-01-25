
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/css/admin.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
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
import AciveOrder from "views/delivery/activeorders.js";
import IncomingOrders from "views/supermarket/supermarketOrder.js";
import MyOrders from "views/customer/myorders.js";
//admin
import AdminLogin from "views/admin/adminlogin.js";
import AdminHome from "views/admin/administrator.js";
import AdminCust from "views/admin/adminCustomers.js";
import AdminCustProfile from "views/admin/adminCustomerView.js";
import AdminMarket from "views/admin/adminSupermarket";
import AdminMarketPofile from "views/admin/adminSupermarketView";
import AdminDelivery from "views/admin/adminDelivery";
import AdminDeliveryProfile from "views/admin/adminDeliveryView";
import AdminUnread from "views/admin/adminUnread";
import AdminRead from "views/admin/adminRead";
import Logout from "views/logout"
//import Logout from "views/logout.js"
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>

        <Route path="/index" render={props => <Index {...props} />} />
        <Route path="/logout" render={props => <Logout {...props} />} />
        
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />
       <Route path="/admin" render={props => <AdminLogin {...props} />} />
       <Route exact path="/administrator/" render={props => <AdminHome {...props} />} />
       <Route exact path="/administrator/customer" render={props => <AdminCust {...props} />} />
       <Route exact path="/administrator/customer/view/:id" render={props => <AdminCustProfile {...props} />} />
       <Route exact path="/administrator/supermarket" render={props => <AdminMarket {...props} />} />
       <Route path="/administrator/supermarket/view/:id" render={props => <AdminMarketPofile {...props} />} />
       <Route exact path="/administrator/delivery" render={props => <AdminDelivery {...props} />} />
       <Route path="/administrator/delivery/view/:id" render={props => <AdminDeliveryProfile {...props} />} />
       <Route path="/administrator/unread_messages" render={props => <AdminUnread {...props} />} />
       <Route path="/administrator/read_messaages" render={props => <AdminRead {...props} />} />




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
          path="/activeorder"
          render={props => <AciveOrder {...props} />}
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
          path="/incomingorders"
          render={props => <IncomingOrders {...props} />}
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
import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Register from "./components/registration";
import EditTodo from "./components/edit-todo.component";
import ProductList from "./components/product_list";
import AddProduct from "./components/add_product";
import logo from "./logo.jpg";
import HomePage from './components/Homepage/HomePage';
import Profile from './components/profile/Profile';

function App() {
  return (
    <Router>
          <div className="container">
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.google.com" target="_blank">
              <img src={logo} width="30" height="30"  />
            </a>
            <Link to="/" className="navbar-brand">OnStep</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/register" className="nav-link" align="right">Register</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/addproduct" className="nav-link" align="right">Add Product</Link>
                </li>
              </ul>
            </div>
          </nav> */}

          


            {/* <Route path="/" exact component = {ProductList}/>  */}
            <Route path="/" exact component = {HomePage}/> 

            <Route path="/edit/:id" component={EditTodo}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/addproduct" component={AddProduct}/>
            
            
          </div>


    </Router>
  );
}

export default App;

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import customer from "./registration/customer-registration";
import delivery from "./registration/delivery-personel-registration";
import supermarket from "./registration/supermarket-registration";

export default class Registration extends Component {

    render() {
        return (
         
          <Router>
              <div className="m-5 p-5 border border-primary rounded" >
              <h3 align="center">Registration</h3>
                <div className="container">
                <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                    <Link to="/register/" className="nav-link" data-toggle="pill" >Customer Registration</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/register/delivery_personnel" className="nav-link" data-toggle="pill">Delivery Personnel Registration</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/register/supermarket" className="nav-link" data-toggle="pill">Supermarket Registration</Link>
                    </li>
                </ul>

            
            <Route path="/register/" exact component = {customer}/> 
            <Route path="/register/delivery_personnel" component={delivery}/>
            <Route path="/register/supermarket" component={supermarket}/>
            </div>
            </div>
    </Router>
        )
    }
}
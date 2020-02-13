import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-light">
                    <a classname="navbar-brand" href="https://www.google.com" target="_blank">
                        <img src="/images/logo.jpg" width={30} height={30} />
                    </a>
                    <link to="/" classname="navbar-brand" />OnStep
                    <div>
                        <table>
                            <tbody><tr>
                                <td>
                                    
                                    <input type="button" className="btn btn-outline-success" defaultValue="Login" />
                                    
                                </td>
                                <td>
                                    <Link to="/register">
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
                                    </Link>
                                </td>
                            </tr>
                            </tbody></table>
                    </div>
                </nav>
            </React.Fragment >
        )
    }
}
export default NavBar;
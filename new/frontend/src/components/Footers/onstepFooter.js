/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom"
// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  to="/onstep" tag={Link}
                >
                  OnStep
                </a>
              </li>
              <li>
                <a
                  to="/onstep" tag={Link}
                >
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;

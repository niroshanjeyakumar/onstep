/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/onstep" tag={Link}
              >
                Onstep
              </a>
            </li>
            <li>
              <a
                href="/contact-us" tag={Link}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/onstep" tag={Link}
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default TransparentFooter;

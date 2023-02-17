import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Link } from "react-router-dom";
import "./index.css";

function OffcanvasExample() {
  return (
    <>
      <Navbar bg="dark" expand={"sm"} className="">
        <Container fluid>
          <Navbar.Brand to="#">
            <img
              src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png"
              alt="logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            className="offcanvas"
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                <Navbar.Brand to="#">
                  <img
                    src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png"
                    alt="logo"
                    className="logo"
                  />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                style={{
                  gap: "10px",
                }}
              >
                <Link className="link" to="/">
                  Home
                </Link>
                <Link className="link" to="/products">
                  Products
                </Link>
                <Link className="link" to="/services">
                  Services
                </Link>
                {/* <Link className="link" to="#action1">
                  Ai intrenship
                </Link> */}

                <Link className="link" to="/blog">
                  Blog
                </Link>
                {/* 
                <Link className="link" to="#action1">
                  About
                </Link> */}
                <Link
                  className="link"
                  style={{
                    whiteSpace: "nowrap",
                  }}
                  to="/contact"
                >
                  Contact us
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;

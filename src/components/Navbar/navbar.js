import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Container className="py-3">
      <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark">
        <Navbar.Brand style={{ fontWeight: "1200 !important" }}>
          <h4>Bishal</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="navs mx-2  active">
              Home
            </Nav.Link>
            <Nav.Link href="/" className="navs mx-2 ">
              About
            </Nav.Link>
            <Nav.Link href="/" className="navs mx-2 ">
              Resume
            </Nav.Link>
            <Nav.Link href="/" className="navs mx-2 ">
              Services
            </Nav.Link>
            <Nav.Link href="/" className="navs mx-2 ">
              Skills
            </Nav.Link>
            <Nav.Link href="/" className="navs mx-2 ">
              Projects
            </Nav.Link>
            <Nav.Link href="/" className="navs mx-2 ">
              My Blog
            </Nav.Link>
            <Nav.Link href="/" className="navs mx-2 ">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBar;

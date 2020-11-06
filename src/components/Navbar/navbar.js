import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Container>
      <Navbar
        collapseOnSelect
        // sticky="top"
        fixed="top"
        expand="lg"
        variant="dark"
        // style={{ padding: "0px" }}
        className="px-4 py-3 mx-5"
        style={{ backgroundColor: "black" }}
      >
        <Navbar.Brand
          style={{ fontWeight: "1200 !important" }}
          className="mx-5"
        >
          <h4>Bishal</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="mr-5 justify-content-end"
        >
          <Nav className="">
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

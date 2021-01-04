import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as SecLink, Route, Switch } from "react-router-dom";
import { Link } from "react-scroll";
function NavBar(props) {
  return (
    <Container>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        className="px-4 py-3 mx-5"
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
          <Nav>
            <Link
              className="navs mx-2 "
              activeClass="active later"
              to="intro"
              spy={true}
            >
              Home
            </Link>
            <Link
              className="navs mx-2 "
              activeClass="active later"
              to="about"
              spy={true}
            >
              About
            </Link>
            <Link
              className="navs mx-2 "
              activeClass="active later"
              to="resume"
              spy={true}
            >
              Resume
            </Link>
            <Link
              className="navs mx-2 "
              activeClass="active later"
              to="service"
              spy={true}
            >
              Services
            </Link>
            <Link
              className="navs mx-2 "
              activeClass="active later"
              to="skill"
              spy={true}
            >
              Skills
            </Link>
            <Link
              className="navs mx-2 "
              activeClass="active later"
              to="projects"
              spy={true}
            >
              Projects
            </Link>
            <Link
              className="navs mx-2 "
              activeClass="active later"
              to="contact"
              spy={true}
            >
              Contact
            </Link>

            <SecLink
              className="navs mx-2 "
              activeClass="active later"
              to="/react-profile/login"
            >
              Login
            </SecLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBar;

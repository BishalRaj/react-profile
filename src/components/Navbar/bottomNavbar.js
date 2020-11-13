import React from "react";
import { Navbar } from "react-bootstrap";
function bottomNavBar() {
  return (
    <>
      <Navbar
        fixed="bottom"
        expand="lg"
        variant="dark"
        // style={{ padding: "0px" }}
        className="px-4 py-3 mx-5"
        style={{ backgroundColor: "transparent" }}
      >
        <div id="theme-dark " className="color-palette" />
        <div id="theme-light" className="color-palette" />
        <div id="theme-purple" className="color-palette" />
        <div id="theme-green" className="color-palette" />
        <div id="theme-pink" className="color-palette" />
      </Navbar>
    </>
  );
}

export default bottomNavBar;

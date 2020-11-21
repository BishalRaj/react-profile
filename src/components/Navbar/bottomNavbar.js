import React from "react";
import { Navbar } from "react-bootstrap";
function bottomNavBar(props) {
  return (
    <>
      <Navbar
        fixed="bottom"
        expand="lg"
        variant="dark"
        className="p-5 mx-5"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div
          className="color-palette"
          onClick={() => props.clickMe("theme-dark")}
        />

        <div>
          <div
            id="theme-dark"
            className={`color-palette ${
              localStorage.getItem("theme") === "theme-dark" ? "active" : ""
            }`}
            onClick={() => props.clickMe("theme-dark")}
          />
          <div
            id="theme-purple"
            className={`color-palette ${
              localStorage.getItem("theme") === "theme-purple" ? "active" : ""
            }`}
            onClick={() => props.clickMe("theme-purple")}
          />
          <div
            id="theme-cyan"
            className={`color-palette ${
              localStorage.getItem("theme") === "theme-cyan" ? "active" : ""
            }`}
            onClick={() => props.clickMe("theme-cyan")}
          />
          <div
            id="theme-green"
            className={`color-palette ${
              localStorage.getItem("theme") === "theme-green" ? "active" : ""
            }`}
            onClick={() => props.clickMe("theme-green")}
          />
          <div
            id="theme-pink"
            className={`color-palette ${
              localStorage.getItem("theme") === "theme-pink" ? "active" : ""
            }`}
            onClick={() => props.clickMe("theme-pink")}
          />
          <div
            id="theme-light"
            className={`color-palette ${
              localStorage.getItem("theme") === "theme-light" ? "active" : ""
            }`}
            onClick={() => props.clickMe("theme-light")}
          />
        </div>
      </Navbar>
    </>
  );
}

export default bottomNavBar;

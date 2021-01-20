import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";
import "./navbar.css";
function BottomNavBar(props) {
  const [colorTabToggle, setcolorTabToggle] = useState("colorPalette");
  const [toogle, settoogle] = useState(false);

  useEffect(() => {
    if (toogle) {
      setcolorTabToggle("colorPalette active");
    } else {
      setcolorTabToggle("colorPalette");
    }
  }, [toogle]);

  return (
    <>
      <Navbar
        fixed="bottom"
        expand="lg"
        variant="dark"
        className="p-5 mx-5 overflow-hidden"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <FontAwesomeIcon
          icon={["fa", "cog"]}
          size="2x"
          className={`default-color-primary color-tab`}
          onClick={() => settoogle(!toogle)}
        ></FontAwesomeIcon>

        <div className={colorTabToggle}>
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

export default BottomNavBar;

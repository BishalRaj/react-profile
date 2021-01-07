import React from "react";
import { useState } from "react";
import Navbar from "../views/NavView/AdminNav/NavBar";
import Home from "../views/adminView/home";
import About from "../views/adminView/about";
import Contact from "../views/adminView/contact";
import "./layouts.css";

export default function AdminLayout() {
  const [path, setpath] = useState("Home");
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = (_sidebar) => {
    setSidebar(_sidebar);
  };
  function handleClick(_path) {
    setpath(_path);
  }

  return (
    <div>
      <Navbar changePath={handleClick} slide={showSideBar} />
      <div className={sidebar ? "admin-container-active" : "admin-container"}>
        {path == "Home" ? (
          <Home />
        ) : path == "About" ? (
          <About />
        ) : path == "Contact" ? (
          <Contact />
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

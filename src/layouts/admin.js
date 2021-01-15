import React from "react";
import { useState } from "react";
import Navbar from "../views/NavView/AdminNav/NavBar";
import Home from "../views/adminView/home";
import About from "../views/adminView/about";
import Resume from "../views/adminView/resume";
import Skills from "../views/adminView/resume";
import "../styles/adminStyles.css";

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
      <div
        className={
          sidebar ? "admin-container-active pb-5" : "admin-container pb-5"
        }
      >
        {path === "About" ? (
          <About />
        ) : path === "Resume" ? (
          <Resume />
        ) : path === "Skills" ? (
          <Skills />
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

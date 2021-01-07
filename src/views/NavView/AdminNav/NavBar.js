import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./navbar.css";

export default function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => {
    setSidebar(!sidebar);
    props.slide(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "green" }}>
        <div className="navbar" style={{ fontSize: "2rem" }}>
          <Link className="menu_bars">
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle" onClick={showSideBar}>
              <Link className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((data, index) => {
              return (
                <li key={index} className={data.cName}>
                  <Link
                    onClick={() => props.changePath(data.title)}
                    // to={data.path}
                  >
                    {data.icon}
                    <span>{data.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

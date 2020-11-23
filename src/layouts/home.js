import React, { useState } from "react";
import NavBar from "../views/NavView/mainNav/navbar";
import Intro from "../views/mainView/Intro/intro";
import About from "../views/mainView/About/about";
import Resume from "../views/mainView/Resume/resume";
import Services from "../views/mainView/Services/services";
import Skills from "../views/mainView/Skills/skills";
import Projects from "../views/mainView/Projects/projects";
import Contact from "../views/mainView/Contact/contact";
import Footer from "../views/mainView/Footer/footer";
import BottomNavBar from "../views/NavView/mainNav/bottomNavbar";
import "../styles/homeStyle.scss";

function Home(props) {
  const [theme, settheme] = useState("theme-dark");

  function checkStorage() {
    return localStorage.getItem("theme");
  }

  function toggleTheme(theme) {
    settheme({
      theme,
    });

    localStorage.setItem("theme", theme);
  }

  return (
    <div className={`app ${checkStorage() ? checkStorage() : theme}`}>
      <NavBar />
      <Intro />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BottomNavBar clickMe={toggleTheme} />
    </div>
  );
}

export default Home;

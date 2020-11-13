import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/Navbar/navbar";
import BottomNavBar from "./components/Navbar/bottomNavbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Resume from "./components/Resume/resume";
import Services from "./components/Services/services";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
// import "./styles/style.css";
import "./styles/style.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, fas);
class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <BottomNavBar />
        <Intro />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;

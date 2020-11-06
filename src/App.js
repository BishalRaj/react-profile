import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Resume from "./components/Resume/resume";
import Services from "./components/Services/services";
import "./styles/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, far);
class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Intro />
        <About />
        <Resume />
        <Services />
      </>
    );
  }
}

export default App;

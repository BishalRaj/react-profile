import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Resume from "./components/Resume/resume";
import "./styles/style.css";
class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Intro />
        <About />
        <Resume />
      </>
    );
  }
}

export default App;

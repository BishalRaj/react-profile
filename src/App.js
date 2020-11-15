import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import Auth from "./pages/auth";
import BottomNavBar from "./components/Navbar/bottomNavbar";
// import "./styles/style.css";
import "./styles/style.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, fas);
class App extends React.Component {
  state = {
    colorTheme: "theme-dark",
  };

  checkStorage = () => {
    return localStorage.getItem("theme");
  };

  handleClick = (theme) => {
    this.setState({
      colorTheme: theme,
    });

    localStorage.setItem("theme", theme);
  };

  render() {
    return (
      <div
        className={`app ${
          this.checkStorage() ? this.checkStorage() : "theme-dark"
        }`}
      >
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Auth} />
        </Router>
        <BottomNavBar clickMe={this.handleClick} />
      </div>
    );
  }
}

export default App;

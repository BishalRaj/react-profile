import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import Auth from "./pages/auth";
import Admin from "./pages/admin";
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
          <Route path="/react-profile/login" component={Auth} />

          {/* {localStorage.getItem("token") ? (
            <Route path="/react-profile/admin" component={Admin} />
          ) : (
            <Redirect to={"/react-profile/login"} />
          )}
          {localStorage.getItem("token") ? (
            <Redirect to={"/react-profile/admin"} />
          ) : (
            <Redirect to={"/react-profile/login"} />
          )} */}

          <Route path="/react-profile/" exact component={Home} />
        </Router>
        <BottomNavBar clickMe={this.handleClick} />
      </div>
    );
  }
}

export default App;

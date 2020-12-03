import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./layouts/home";
import Auth from "./layouts/auth";
import Admin from "./layouts/admin";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, fas);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_status: false,
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      login_status: true,
      user: data,
    });
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            {/* Main Route */}
            <Route
              exact
              path={"/react-profile/"}
              render={(props) => (
                <Home {...props} handleClick={this.handleClick} />
              )}
            />

            {/* Auth */}
            <Route
              exact
              path="/react-profile/login"
              render={(props) => (
                <Auth
                  {...props}
                  loginStatus={this.state.login_status}
                  handleLogin={this.handleLogin}
                />
              )}
            />

            {/* Admin Route */}
            <Route
              exact
              path="/react-profile/admin"
              render={(props) => <Admin {...props} />}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

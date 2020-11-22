import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/loginStyle.scss";
import Login from "../components/Auth/login";
import Register from "../components/Auth/signup";
function Auth(props) {
  const [login, setLogin] = useState(true);

  function handleChange(value) {
    setLogin(value);
  }

  function handleSuccessfulSignup(data) {
    //TODO update parent component
    // props.history.push("/react-profile/");
    setLogin(true);
  }

  function hangleSuccessfulLogin(data) {
    props.history.push("/react-profile/admin");
  }

  return (
    <Container className="loginPage d-flex align-items-center justify-contect-center">
      {login ? (
        <Login
          onChange={handleChange}
          handleSuccessfulLogin={hangleSuccessfulLogin}
        />
      ) : (
        <Register
          onChange={handleChange}
          handleSuccessfulSignup={handleSuccessfulSignup}
        />
      )}
    </Container>
  );
}
export default Auth;

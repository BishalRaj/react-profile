import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/loginStyle.scss";
import Login from "../views/AuthView/login";
import Register from "../views/AuthView/signup";
// import NavBar from "../views/NavView/mainNav/navbar";
function Auth(props) {
  const [login, setLogin] = useState(true);

  function handleChange(value) {
    setLogin(value);
  }

  function handleSuccessfulSignup(data) {
    //TODO update parent component
    setLogin(true);
  }

  function handleSuccessfulLogin(data) {
    props.handleLogin(data);
    props.history.push("/react-profile/admin");
  }

  return (
    <>
      {/* <NavBar /> */}
      <Container className="loginPage d-flex align-items-center justify-contect-center">
        {login ? (
          <Login
            onChange={handleChange}
            handleSuccessfulLogin={handleSuccessfulLogin}
          />
        ) : (
          <Register
            onChange={handleChange}
            handleSuccessfulSignup={handleSuccessfulSignup}
          />
        )}
      </Container>
    </>
  );
}
export default Auth;

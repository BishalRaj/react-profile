import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/loginStyle.scss";
import Login from "../components/Auth/login";
import Register from "../components/Auth/signup";
function Auth() {
  const [login, setLogin] = useState(true);
  function handleChange(value) {
    setLogin(value);
  }

  return (
    <Container className="loginPage d-flex align-items-center justify-contect-center">
      {login ? (
        <Login onChange={handleChange} />
      ) : (
        <Register onChange={handleChange} />
      )}
    </Container>
  );
}
export default Auth;

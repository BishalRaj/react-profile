import Axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
function Signup(props) {
  const [un, setUn] = useState("");
  const [pwd, setPwd] = useState("");
  const [errors, setErrors] = useState("");
  var err = {};
  function handleChange() {
    props.onChange(true);
  }

  function handleUnInput(e) {
    setUn(e.target.value);
  }
  function handlePwdInput(e) {
    setPwd(e.target.value);
  }

  function signUp() {
    let userData = { email: un, password: pwd };
    console.log(userData);
    Axios.post("http://localhost:8080/signup", userData)
      .then((response) => {
        console.log(response);
        alert(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Row className="w-100">
      <Col lg={6} className="mx-auto bg-light p-5">
        <Form>
          {errors ? <div>{errors.message}</div> : ""}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleUnInput}
              value={un}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePwdInput}
              value={pwd}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={signUp}
            className="w-100 default-xxs-font"
          >
            Signup
          </Button>
          <p>Or</p>
          <Button
            variant="primary"
            className="w-100 default-xxs-font"
            onClick={handleChange}
          >
            Go to Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
export default Signup;

import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../styles/loginStyle.scss";
function Auth() {
  return (
    <Container className="loginPage d-flex align-items-center justify-contect-center">
      <Row className="w-100">
        <Col lg={6} className="mx-auto bg-light p-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Auth;

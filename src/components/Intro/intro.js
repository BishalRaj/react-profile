import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "./one.png";
function Intro() {
  return (
    <Container className="info">
      <Row className="h-100 align-items-center">
        <Col className="text-light ">
          <h6 className="font-weight-bold px-3 default-color">
            HELLO! <span className="text-light ml-2">नमस्ते</span>
          </h6>
          <h1 className="font-weight-bold px-3">
            I'm <span className="default-color">Bishal</span>
          </h1>
          <h1 className="font-weight-bold px-3 default-color">Raj Shakya</h1>
          <h2 className="font-weight-normal px-3">A Freelance Web Developer</h2>
        </Col>
        <Col>
          <Image src={logo} className="w-100" />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;

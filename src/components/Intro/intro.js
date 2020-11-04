import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import logo from "./one.png";
function Intro() {
  return (
    <Container className="info">
      <Row className="h-100 align-items-center">
        <Col className="text-light ">
          <h6 className="font-weight-bold px-3 default-color mb-2">
            HELLO! <span className="text-light ml-3">नमस्ते</span>
          </h6>
          <h1 className="font-weight-bold px-3" style={{ fontSize: "60px" }}>
            I'm <span className="default-color">Bishal</span>
          </h1>
          <h1
            className="font-weight-bold px-3 default-color"
            style={{ fontSize: "60px" }}
          >
            Raj Shakya
          </h1>
          <h3 className="font-weight-normal px-3 mt-3">
            A Freelance Web Developer
          </h3>
          <p className="px-3">
            <Button variant="warning mr-1" className="btn-rounded p-2 w-25">
              <small>
                <b>My Works</b>
              </small>
            </Button>
            <Button
              variant="outline-warning ml-1"
              className="btn-rounded p-2 w-25"
            >
              <small>
                <b>Hire Me</b>
              </small>
            </Button>
          </p>
        </Col>
        <Col>
          <Image src={logo} className="w-100" />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;

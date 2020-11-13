import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../images/one.png";

function Intro() {
  return (
    <Container className="c-h-700 " id="intro">
      <Row className="h-100 align-items-center">
        <Col lg={6} md={6} sm={12} xs={12}>
          <h6 className="font-weight-bold default-color-primary mb-4">
            HELLO! <span className=" ml-3">नमस्ते</span>
          </h6>
          <h1 className="font-weight-bold default-bg-font">
            I'm <span className="default-color-primary">Bishal</span>
          </h1>
          <h1 className="font-weight-bold default-color-primary default-bg-font">
            Raj Shakya
          </h1>
          <h3 className="font-weight-normal  mt-4">
            A Freelance Web Developer
          </h3>
          <p className="">
            <Button variant="warning mr-1" className="rounded-pill py-2 px-5">
              <small>
                <b>My Works</b>
              </small>
            </Button>
            <Button
              variant="outline-warning ml-1"
              className="rounded-pill py-2 px-5"
            >
              <small>
                <b>Hire Me</b>
              </small>
            </Button>
          </p>
        </Col>
        <Col lg={6} md={6} xs={12}>
          <Image src={logo} className="w-100" />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;

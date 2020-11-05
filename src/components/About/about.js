import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "./one.png";

function about() {
  return (
    <Container className="c-h-600">
      <Row>
        <Col className="d-flex flex-wrap align-items-center">
          <Image
            src={logo}
            className="w-100 my-auto"
            // style={{ flexWrap: "wrap", display: "flex", alignItems: "center" }}
          />
        </Col>
        <Col className="">
          <Row>
            <Col className="font-weight-bold text-light default-md-font">
              About Me
            </Col>
          </Row>

          {/* <Row>
            <Col className="default-sm-font text-light my-2">Name:</Col>
            <Col className="text-secondary font-weight-normal">
              Bishal Raj Shakya
            </Col>
            <Col />
          </Row>
          <Row>
            <Col className="default-sm-font text-light my-2">
              Date of birth:
            </Col>
            <Col className="text-secondary font-weight-normal">
              Bishal Raj Shakya
            </Col>
            <Col />
          </Row>
          <Row>
            <Col className="default-sm-font text-light my-2">Address:</Col>
            <Col className="text-secondary font-weight-normal">
              Bishal Raj Shakya
            </Col>
            <Col />
          </Row>
          <Row>
            <Col className="default-sm-font text-light my-2">Zip code:</Col>
            <Col className="text-secondary font-weight-normal">
              Bishal Raj Shakya
            </Col>
            <Col />
          </Row>
          <Row>
            <Col className="default-sm-font  text-light my-2">Email:</Col>
            <Col className="text-secondary font-weight-normal">
              Bishal Raj Shakya
            </Col>
            <Col />
          </Row>
          <Row>
            <Col className=" default-sm-font text-light my-2">Phone:</Col>
            <Col className="text-secondary font-weight-normal">
              Bishal Raj Shakya
            </Col>
            <Col />
          </Row> */}

          {/* <Row></Row> */}
        </Col>
      </Row>
    </Container>
  );
}
export default about;

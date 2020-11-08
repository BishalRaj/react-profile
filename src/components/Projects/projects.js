import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import imgLarge from "./large.jpg";
import imgSmall from "./small.jpg";
function projects() {
  return (
    <Container className="my-5">
      <p className="default-md-font w-100 text-center text-white mt-5 pt-5">
        My Projects
      </p>
      <Row className="mb-4">
        <Col lg={4} className="c-h-250 overflow-hidden">
          <Image src={imgSmall} className=" " fluid />
        </Col>
        <Col lg={8} className="c-h-250 overflow-hidden">
          <Image src={imgLarge} className=" " fluid />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={8} className="c-h-250 overflow-hidden">
          <Image src={imgLarge} className=" " fluid />
        </Col>
        <Col lg={4} className="c-h-250 overflow-hidden">
          <Image src={imgSmall} className=" " fluid />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={8} className="c-h-250 overflow-hidden">
          <Image src={imgLarge} className=" " fluid />
        </Col>
        <Col lg={4} className="c-h-250 overflow-hidden">
          <Image src={imgSmall} className=" " fluid />
        </Col>
      </Row>
    </Container>
  );
}
export default projects;

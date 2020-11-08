import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function resume() {
  var resume = [];
  for (let index = 0; index < 3; index++) {
    resume.push(
      <Col lg={6} md={6} sm={12} xs={12} className="mb-4 " key={index}>
        <div className="mx-auto p-4 default-bg-color-black rounded">
          <p className="default-sm-font m-0 default-color">2017-2020</p>
          <p className="default-sm-font m-0 text-white">
            Bachelor Degree of Computing
          </p>
          <p className="letter-spacing-2">Coventry University</p>
          <p>
            A small river named Bishal flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </Col>
    );
  }

  return (
    <Container className="my-5">
      <p className="default-md-font w-100 text-center text-white mt-5 pt-5">
        Resume
      </p>
      <Row>{resume}</Row>
    </Container>
  );
}

export default resume;
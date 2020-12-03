import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function resume() {
  var resume = [];
  var data = [
    {
      date: "2017-2020",
      degree: "Bachelor Degree of Computing",
      uni: "Coventry University",
      desc:
        "A small river named Bishal flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
  ];
  var key = 1;
  for (let index = 0; index < 3; index++) {
    data.forEach((res) => {
      resume.push(
        <Col lg={6} md={6} sm={12} xs={12} className="mb-4 " key={key++}>
          <div className="mx-auto p-4 default-bg-color-secondary rounded">
            <p className="default-sm-font m-0 default-color-primary">
              {res.date}
            </p>
            <p className="default-sm-font m-0 default-color-secondary">
              {res.degree}
            </p>
            <p className="letter-spacing-2">{res.uni}</p>
            <p className="default-color-tertiary">{res.desc}</p>
          </div>
        </Col>
      );
    });
  }

  return (
    <Container className="my-5" id="resume">
      <p className="default-md-font w-100 text-center mt-5 pt-5">Resume</p>
      <Row>{resume}</Row>
    </Container>
  );
}

export default resume;
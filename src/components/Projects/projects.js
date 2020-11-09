import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import imgLarge from "./large.jpg";
import imgSmall from "./small.jpg";
function projects() {
  var projects = [];

  for (let index = 0; index < 3; index++) {
    for (let y = 0; y < 2; y++) {
      var fp, sp;
      if (index === 0 ? true : false) {
        fp = 4;
        sp = 8;
      } else {
        fp = 8;
        sp = 4;
      }

      var actualWidth = y === 0 ? fp : sp;

      projects.push(
        <Col lg={actualWidth} className="c-h-250 img-col mb-4">
          <div className="project-img-container w-100 overflow-hidden">
            <Image src={actualWidth === 4 ? imgSmall : imgLarge} fluid />
          </div>
          <div
            className="image-centered-text text-white h-100"
            style={{
              width: actualWidth === 4 ? "92.5%" : "96.5%",
            }}
          >
            <p
              style={{
                marginTop: actualWidth === 4 ? "28%" : "14%",
              }}
              className="p-0 mb-0 default-xs-font"
            >
              Web Development
            </p>
            <p className="m-0 p-0 text-uppercase default-xxs-font letter-spacing-1">
              Project Name
            </p>
          </div>
        </Col>
      );
    }
  }

  return (
    <Container className="my-5 text-center ">
      <p className="default-md-font w-100 text-white mt-5 pt-5">My Projects</p>
      <Row className="mb-4 ">{projects}</Row>
    </Container>
  );
}
export default projects;

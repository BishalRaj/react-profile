import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function footer() {
  return (
    <Container className="my-5" id="footer">
      <Row>
        <Col lg={3}>
          <p className="default-sm-font text-white">About</p>
          <p className="my-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </Col>

        <Col lg={3}>
          <p className="default-sm-font text-white">Links</p>
          <p className="my-4 footer">
            <ul className="mx-0 px-0">
              <li className="my-2">Home</li>
              <li className="my-2">About</li>
              <li className="my-2">Services</li>
              <li className="my-2">Projects</li>
              <li className="my-2">Contact</li>
            </ul>
          </p>
        </Col>

        <Col lg={3}>
          <p className="default-sm-font text-white">Services</p>
          <p className="my-4 footer">
            <ul className="mx-0 px-0">
              <li className="my-2">Web Design</li>
              <li className="my-2">Web Development</li>
              <li className="my-2">App Development</li>
              <li className="my-2">Data Analysis</li>
              <li className="my-2">Data Visualization </li>
            </ul>
          </p>
        </Col>

        <Col lg={3}>
          <p className="default-sm-font text-white">Have a Question?</p>
          <Row className="my-2">
            <Col lg={1}>
              <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
            </Col>
            <Col lg={1}></Col>
            <Col lg={9} className="m-0 p-0">
              Karyabinayak-22, Lalitpur, Nepal
            </Col>
          </Row>
          <Row className="my-2">
            <Col lg={1}>
              <FontAwesomeIcon icon={["fas", "phone-alt"]} />
            </Col>
            <Col lg={1}></Col>
            <Col lg={9} className="m-0 p-0">
              +977 9843219471
            </Col>
          </Row>
          <Row className="my-2">
            <Col lg={1}>
              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </Col>
            <Col lg={1}></Col>
            <Col lg={9} className="m-0 p-0">
              bisal1shakya @gmail.com
            </Col>
          </Row>
        </Col>
        <Col lg={12}>
          <div
            className=" default-bg-color-black  d-flex align-items-center justify-content-center mb-5 icon-div float-left mr-3"
            style={{ borderRadius: "50%", height: "55px", width: "55px" }}
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="2x"
              className="default-color"
            ></FontAwesomeIcon>
          </div>
          <div
            className=" default-bg-color-black  d-flex align-items-center justify-content-center mb-5 icon-div float-left mr-3"
            style={{ borderRadius: "50%", height: "55px", width: "55px" }}
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size="2x"
              className="default-color"
            ></FontAwesomeIcon>
          </div>
          <div
            className=" default-bg-color-black  d-flex align-items-center justify-content-center mb-5 icon-div "
            style={{ borderRadius: "50%", height: "55px", width: "55px" }}
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="2x"
              className="default-color"
            ></FontAwesomeIcon>
          </div>
        </Col>
        <Col
          lg={12}
          className="py-2 text-center default-xs-font letter-spacing-2"
        >
          Copyright ©2020 All rights reserved
        </Col>
      </Row>
    </Container>
  );
}
export default footer;

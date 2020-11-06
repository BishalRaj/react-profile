import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../images/one.png";

function about() {
  return (
    <Container className="mb-5">
      <Row>
        <Col
          sm={0}
          xs={0}
          className="d-flex flex-wrap align-items-center justify-content-center"
        >
          <Image src={logo} className="w-100 my-auto" />
        </Col>
        <Col className="">
          <div className="w-100 text-start font-weight-bold text-light default-md-font">
            About Me
          </div>

          <p className="mb-4 mt-1">
            A small river named Bishal flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <ul style={{ listStyle: "none" }} className="p-0">
            <li className="d-flex my-2">
              <span className="default-xs-font text-light text-start w-25">
                Name:
              </span>
              <span className="w-75  text-start">Bishal Raj Shakya</span>
            </li>
            <li className="d-flex my-2">
              <span className="default-xs-font text-light text-start w-25">
                Date of birth:
              </span>
              <span className="w-75  text-start">February 28, 1998</span>
            </li>
            <li className="d-flex my-2">
              <span className="default-xs-font text-light text-start w-25">
                Address:
              </span>
              <span className="w-75  text-start">
                Bungamati, Lalitpur, Nepal
              </span>
            </li>
            <li className="d-flex my-2">
              <span className="default-xs-font text-light text-start w-25">
                Zip code:
              </span>
              <span className="w-75  text-start">44700</span>
            </li>
            <li className="d-flex my-2">
              <span className="default-xs-font text-light text-start w-25">
                Email:
              </span>
              <span className="w-75  text-start">bisal1shakya@gmail.com</span>
            </li>
            <li className="d-flex my-2">
              <span className="default-xs-font text-light text-start w-25">
                Phone:
              </span>
              <span className="w-75  text-start">+977-9843219471</span>
            </li>
          </ul>

          <p
            className="default-xs-font text-light w-100"
            style={{ fontSize: "25px" }}
          >
            <span className="default-color">5</span> Project complete
          </p>
          <Button variant="warning" className="btn-rounded p-2">
            <strong>DOWNLOAD CV</strong>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default about;

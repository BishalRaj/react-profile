import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../images/one.png";

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

          <ul style={{ listStyle: "none" }} className="p-0">
            <li className="d-flex my-2">
              <span className="default-sm-font text-light text-start w-25">
                Name:
              </span>
              <span className="w-75  text-start">Bishal Raj Shakya</span>
            </li>
            <li className="d-flex my-2">
              <span className="default-sm-font text-light text-start w-25">
                Date of birth:
              </span>
              <span className="w-75  text-start">February 28, 1998</span>
            </li>
            <li className="d-flex my-2">
              <span className="default-sm-font text-light text-start w-25">
                Address:
              </span>
              <span className="w-75  text-start">
                Bungamati, Lalitpur, Nepal
              </span>
            </li>
            <li className="d-flex my-2">
              <span className="default-sm-font text-light text-start w-25">
                Zip code:
              </span>
              <span className="w-75  text-start">44700</span>
            </li>
            <li className="d-flex my-2">
              <span className="default-sm-font text-light text-start w-25">
                Email:
              </span>
              <span className="w-75  text-start">bisal1shakya@gmail.com</span>
            </li>
            <li className="d-flex my-2">
              <span className="default-sm-font text-light text-start w-25">
                Phone:
              </span>
              <span className="w-75  text-start">+977-9843219471</span>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
export default about;

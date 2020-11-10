import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../images/one.png";

function about() {
  var aboutInfo = [];
  // var data = [
  //   ["Name:", "Bishal Raj Shakya"],
  //   ["Date of birth:", "February 28, 1998"],
  //   ["Address:", "Bungamati, Lalitpur, Nepal"],
  //   ["Zip code:", "44700"],
  //   ["Email:", "bisal1shakya@gmail.com"],
  //   ["Phone:", "+977-9843219471"],
  // ];
  var data = [
    { key: "Name:", value: "Bishal Raj Shakya" },
    { key: "Date of birth:", value: "February 28, 1998" },
    { key: "Address:", value: "Bungamati, Lalitpur, Nepal" },
    { key: "Zip code:", value: "44700" },
    { key: "Email:", value: "bisal1shakya@gmail.com" },
    { key: "Phone:", value: "+977-9843219471" },
  ];

  var key = 1;
  data.forEach((result) => {
    aboutInfo.push(
      <li className="d-flex my-2" key={key}>
        <span className="default-xs-font text-light text-start w-25">
          {result.key}
        </span>
        <span className="w-75  text-start">{result.value}</span>
      </li>
    );
    key++;
  });

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
            {aboutInfo}
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

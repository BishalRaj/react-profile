import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./contact-form";

function contact() {
  var contacts = [];

  var data = [
    { key: "Address", value: "Karyabinayak-22,Lalitpur" },
    { key: "Contact Number", value: "+977-9843219471" },
    { key: "Email Address", value: "bisal1shakya@gmail.com" },
    { key: "Website", value: "https://bishalraj.github.io/react-profile/" },
  ];

  data.forEach((values) => {
    contacts.push(
      <Col lg={3} className="p-5">
        <div
          className=" default-bg-color-black mx-auto d-flex align-items-center justify-content-center mb-4 icon-div"
          style={{ borderRadius: "50%", height: "100px", width: "100px" }}
        >
          <FontAwesomeIcon
            icon={["far", "file-code"]}
            size="2x"
            className="default-color"
          ></FontAwesomeIcon>
        </div>
        <p className="p-0 m-0 text-uppercase default-xs-font mb-2">
          {values.key}
        </p>
        <p className="default-xxs-font">{values.value}</p>
      </Col>
    );
  });

  return (
    <Container className="my-5 text-center ">
      <p className="default-md-font w-100 text-white mt-5 pt-5">Contact</p>
      <Row className="mb-4 ">{contacts}</Row>
      <ContactForm />
    </Container>
  );
}

export default contact;

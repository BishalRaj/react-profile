import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Resume() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8080/resume").then((response) => {
      setdata(response.data);
    });
  }, []);

  return data ? (
    <Container className="my-5" id="resume">
      <p className="default-md-font w-100 text-center mt-5 pt-5">Resume</p>
      <Row>
        {data.map((item, index) => {
          return (
            <Col lg={6} md={6} sm={12} xs={12} className="mb-4 " key={index}>
              <div className="mx-auto p-4 default-bg-color-secondary rounded">
                <p className="default-sm-font m-0 default-color-primary">
                  {item.from} - {item.to}
                </p>
                <p className="default-sm-font m-0 default-color-secondary">
                  {item.degree}
                </p>
                <p className="letter-spacing-2">{item.university}</p>
                <p className="default-color-tertiary">{item.description}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  ) : (
    ""
  );
}

export default Resume;

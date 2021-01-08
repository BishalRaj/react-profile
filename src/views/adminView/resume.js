import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";

export default function Resume() {
  const [name, setname] = useState("");
  const [dob, setdob] = useState("");
  const [address, setaddress] = useState("");
  const [zip, setzip] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  function handleNameInput(e) {
    setname(e.target.value);
  }
  function handleDobInput(e) {
    setdob(e.target.value);
  }
  function handleAddressInput(e) {
    setaddress(e.target.value);
  }
  function handleZipInput(e) {
    setzip(e.target.value);
  }
  function handleEmailInput(e) {
    setemail(e.target.value);
  }
  function handlePhoneInput(e) {
    setphone(e.target.value);
  }

  return (
    <>
      Resume
      <div className="p-5 w-50 mx-auto">
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={handleNameInput}
              placeholder="Enter full name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              value={dob}
              onChange={handleDobInput}
              placeholder="Date of Birth"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={address}
              onChange={handleAddressInput}
              placeholder="Address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="number"
              value={zip}
              onChange={handleZipInput}
              placeholder="Zip Code"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={handleEmailInput}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              value={phone}
              onChange={handlePhoneInput}
              placeholder="Phone no."
            />
          </Form.Group>
          <Button variant="primary">Submit</Button>
        </Form>
      </div>
    </>
  );
}

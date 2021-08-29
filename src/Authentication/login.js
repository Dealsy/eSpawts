import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./Login.scss";

export default function Login() {
  const [displayName, setDisplayname] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Row className="align-items-center">
          <Col sm={3} className="my-1">
            <Form.Label className="form_Label" htmlFor="inlineFormInputName">
              Display Name:
            </Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={displayName}
              onChange={(e) => setDisplayname(e.target.value)}
              placeholder="Display Name"
            />
          </Col>
          <Col sm={3} className="my-1">
            <Form.Label className="form_Label" htmlFor="inlineFormInputName">
              Password:
            </Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Link to="/">
              <Button className="loginScrOpts" type="submit">
                Login
              </Button>
            </Link>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}

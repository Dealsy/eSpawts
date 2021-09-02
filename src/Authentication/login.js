import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  console.log(email);

  // TODO:
  /*  
   - Create save password button
   - If Password checkbox ticked ? Store Token in LocalStorage : Store Token in SessionStorage
  */
  function handleSubmit(event) {
    event.preventDefault();

    let EmailAddress = [email];
    let Password = [password];

    axios
      .get(
        `https://localhost:44312/Account/User.aspx?op=login&Email=${EmailAddress}&Password=${Password}`
      )
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((error) => {
        console.log("c% This is the error!", "color: #AA3939", error);
      });
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Row className="align-items-center">
          <Col sm={3} className="my-1">
            <Form.Label
              className="block uppercase tracking-wide text-white text-lg font-bold mt-2"
              htmlFor="inlineFormInputName"
            >
              Email:
            </Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Display Name"
            />
          </Col>
          <Col sm={3} className="my-1">
            <Form.Label
              className="block uppercase tracking-wide text-white text-lg font-bold mt-2"
              htmlFor="inlineFormInputName"
            >
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
            <Button className="loginScrOpts" type="submit">
              Login
            </Button>
          </Col>
        </Form.Row>
        <label className="block uppercase tracking-wide text-white text-xs font-bold mt-2">
          Save Password
        </label>
        <input
          type="checkbox"
          name="checked-demo"
          value="1"
          className=" h-7 w-7"
        />
      </Form>
    </div>
  );
}

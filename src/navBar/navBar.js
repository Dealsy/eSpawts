import React from "react";

import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import GlobalButton from "../reuseableComponenets/Buttons/Centerbutton";
import GlobalRightButton from "../reuseableComponenets/Buttons/rightButton";
import GlobalLeftButton from "../reuseableComponenets/Buttons/leftButton";
import "./Nav.scss";

function eSpawtsNav() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className=" bg-gray-800 h-13"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/Create">
            <GlobalLeftButton label="Create Tournament " />
          </Link>
          <Link to="/MyTournaments">
            <GlobalRightButton label="My Tournaments " />
          </Link>
        </Nav>
        <Navbar.Brand>
          <h1 className="eSpawrtsLogo self-center mr-72">
            {" "}
            <Link to="/">eSpawts </Link>{" "}
          </h1>
        </Navbar.Brand>
        <Nav className="Register">
          <Link to="/signup">
            <GlobalLeftButton label="Register" />
          </Link>
          <Link to="/login">
            {" "}
            <GlobalButton label="Login" />
          </Link>
          <Link to="/Account">
            {" "}
            <GlobalButton label="Account" />
          </Link>
          <Link to="/Admin">
            {" "}
            <GlobalRightButton label="Admin" />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default eSpawtsNav;

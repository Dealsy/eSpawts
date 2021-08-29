import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Nav.scss";

class eSpawtsNav extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    const Trophy = <FontAwesomeIcon icon={faTrophy} />;
    const Medal = <FontAwesomeIcon icon={faMedal} />;
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="Nav_background"
        variant="dark"
      >
        <Navbar.Brand>
          <h1 className="eSpawrtsLogo">
            {" "}
            <Link to="/">eSpawts </Link>{" "}
          </h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Create">
              <button className="Tournament_btn">
                {" "}
                Create Tournament {Trophy}
              </button>
            </Nav.Link>
          </Nav>
          <Nav className="Register">
            <Link to="/MyTournaments">
              <Button className="loginOpts">
                {" "}
                {Medal} My Tournaments {Medal}{" "}
              </Button>{" "}
            </Link>
            <Link to="/signup">
              <Button className="loginOpts"> Register </Button>{" "}
            </Link>
            <Link to="/login">
              {" "}
              <Button className="loginOpts"> Login</Button>{" "}
            </Link>
            <Link to="/Account">
              {" "}
              <Button className="loginOpts"> My Account</Button>{" "}
            </Link>
            <Link to="/Admin">
              {" "}
              <Button className="loginOpts"> Admin </Button>{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default eSpawtsNav;

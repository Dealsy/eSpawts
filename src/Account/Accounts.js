import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Settings from "./settings";
import MyTournaments from "./MyTournaments";
import AccountSettings from "./AccountSettings/AccountSettings";
import "./Accounts.scss";

function Account() {
  const [Delete, Deleted] = useState(false);
  const DeleteUser = () => {
    Deleted(true);
  };
  const [YesDelete, DeletedDone] = useState(false);
  const UserDeleted = () => {
    DeletedDone(true);
    Deleted(false);
  };

  return (
    <div className="Account">
      <div className="myAccount">
        {Delete && (
          <Alert variant="danger">
            <Alert.Heading>
              Are you Sure you want to delete your Account?
            </Alert.Heading>
            <p>Once your Account is deleted there is no way to get it back!!</p>
            <hr />
            <p className="mb-0">
              <button onClick={() => UserDeleted()}>Yes</button>
              <button>No</button>
            </p>
          </Alert>
        )}
        {YesDelete && (
          <Alert variant="success">
            <Alert.Heading>Account Deleted</Alert.Heading>
          </Alert>
        )}
        <h3>My Account:</h3>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="accountBtn">
                  <Nav.Link className="accountBtn" eventKey="first">
                    Account Settings
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="accountBtn">
                  <Nav.Link eventKey="second">Tournament History</Nav.Link>
                </Nav.Item>
                <Nav.Item className="accountBtn">
                  <Nav.Link eventKey="third">2FA</Nav.Link>
                </Nav.Item>
                <Nav.Item className="accountBtn">
                  <Nav.Link eventKey="fourth">Payment Method</Nav.Link>
                </Nav.Item>
                <Nav.Item className="accountDeleteBtn">
                  <Nav.Link onClick={() => DeleteUser()} eventKey="fith">
                    Delete Account
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <AccountSettings />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <MyTournaments />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Settings />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Settings />
                </Tab.Pane>
                <Tab.Pane eventKey="fith">
                  <Settings />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default Account;

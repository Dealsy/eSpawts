import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";

function Teams({ playerName, playerNameTeam2 }) {
  return (
    <Container>
      <h1>Teams:</h1>
      <Row className="m-4">
        <Col>
          <h2>Team 1</h2>
          <ul>
            <li>{playerName}</li>
          </ul>
        </Col>
        <Col>
          <h2>Team 2</h2>
          <ul>
            <li>{playerNameTeam2}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Teams;

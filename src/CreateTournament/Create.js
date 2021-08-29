import React, { useState } from "react";
import From from "./form";
import Maps from "./maps";
import Teams from "./Teams";
import { Container, Row, Col } from "react-grid-system";

// Currently grabs state from input fields and places them in an object.
// TODO: Create an Object for playerName and playerNameTeam2 that stores data
function Create() {
  const [tname, setTname] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerNameTeam2, onSetPlayerNameTeam2] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const TournamentDetails = {
      TournamentName: tname,
      TeamOne: playerName,
      TeamTwo: playerNameTeam2,
    };
    console.log(TournamentDetails);
  };

  // Returns all components in the Create Tournament section
  return (
    <Container>
      <Row>
        <Col sm={5}>
          <From
            name={playerName}
            onSetPlayerName={(event) => setPlayerName(event.target.value)}
            tname={tname}
            onSetTname={(event) => setTname(event.target.value)}
            playerNameTeam2={playerNameTeam2}
            onSetPlayerNameTeam2={(event) =>
              onSetPlayerNameTeam2(event.target.value)
            }
            handleSubmit={handleSubmit}
          />
        </Col>
        <Col sm={4}>
          <Teams playerName={playerName} playerNameTeam2={playerNameTeam2} />
        </Col>
        <Col sm={3}>
          <Maps />
        </Col>
      </Row>
    </Container>
  );
}

export default Create;

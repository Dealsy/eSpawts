import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import TournName from "./Form/TournamentName";
import Game from "./Form/Game";
import Team1 from "./Form/Team1";
import Team2 from "./Form/Team2";
import BestOf from "./Form/bestOf";
import Prize from "./Form/Prize";
import FormMaps from "./Form/FormMaps";
import GameType from "./Form/gameType";

function Form({
  onSetPlayerName,
  playerName,
  tname,
  onSetTname,
  handleSubmit,
  onSetPlayerNameTeam2,
  playerNameTeam2,
}) {
  return (
    <Container className="pb-10">
      {tname === "" ? <h1>Tournament Name</h1> : <h1>{tname}</h1>}

      <form onSubmit={handleSubmit} className=" p-5 border-4 w-auto">
        <Row>
          <TournName tname={tname} onSetTname={onSetTname} />
          <Game />
          <Team1 playerName={playerName} onSetPlayerName={onSetPlayerName} />
          <Team2
            playerNameTeam2={playerNameTeam2}
            onSetPlayerNameTeam2={onSetPlayerNameTeam2}
          />
          <GameType />
          <BestOf />
          <Prize />
          <FormMaps />
        </Row>
        <button
          className=" transition ease-out duration-700 border-2 border-indigo-300 rounded-lg text-indigo-300 hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110 p-2 text-base ml-72 "
          type="submit"
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </Container>
  );
}

export default Form;

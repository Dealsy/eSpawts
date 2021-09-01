import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import GlobalButton from "../reuseableComponenets/Buttons/GlobalButton";
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
    <Container className="pb-10 p-5 border-4 rounded-3xl border-gray-300 bg-white mt-5 ">
      {tname === "" ? (
        <h1 className="block uppercase tracking-wide text-gray-900 text-3xl	 font-bold mb-2">
          Tournament Name
        </h1>
      ) : (
        <h1 className="block uppercase tracking-wide text-gray-900 text-3xl	 font-bold mb-2">
          {tname}
        </h1>
      )}

      <form onSubmit={handleSubmit} className=" w-full max-w-lg ">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Row>
              <TournName tname={tname} onSetTname={onSetTname} />
              <Game />
              <Team1
                playerName={playerName}
                onSetPlayerName={onSetPlayerName}
              />
              <Team2
                playerNameTeam2={playerNameTeam2}
                onSetPlayerNameTeam2={onSetPlayerNameTeam2}
              />
              <GameType />
              <BestOf />
              <Prize />
              <FormMaps />
            </Row>

            <GlobalButton type="submit" label="submit" />
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Form;

import React from "react";

export default function Team2({ playerNameTeam2, onSetPlayerNameTeam2 }) {
  return (
    <div>
      <label htmlFor="playerNameTeam2">Team 2 Players</label>
      <input
        className="text-black h-7"
        id="playerNameTeam2"
        name="playerNameTeam2"
        tpye="text"
        value={playerNameTeam2}
        onChange={onSetPlayerNameTeam2}
      />
    </div>
  );
}

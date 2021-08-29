import React from "react";

export default function Team1({ PlayerName, onSetPlayerName }) {
  return (
    <div>
      <label htmlFor="PlayerName">Team 1 Players</label>
      <input
        className="text-black h-7"
        id="PlayerName"
        name="PlayerName"
        tpye="text"
        value={PlayerName}
        onChange={onSetPlayerName}
      />
    </div>
  );
}

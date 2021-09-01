import React from "react";

export default function Team2({ playerNameTeam2, onSetPlayerNameTeam2 }) {
  return (
    <div>
      <label
        className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2"
        htmlFor="playerNameTeam2"
      >
        Team 2 Players
      </label>
      <input
        className="appearance-none block w-96 bg-gray-200 text-gray-700 border border-red-500 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="playerNameTeam2"
        name="playerNameTeam2"
        tpye="text"
        value={playerNameTeam2}
        onChange={onSetPlayerNameTeam2}
      />
    </div>
  );
}

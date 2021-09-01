import React from "react";

export default function Team1({ PlayerName, onSetPlayerName }) {
  return (
    <div>
      <label
        className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
        htmlFor="PlayerName"
      >
        Team 1 Players
      </label>
      <input
        className="appearance-none block w-96 bg-gray-200 text-gray-700 border border-red-500 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="PlayerName"
        name="PlayerName"
        tpye="text"
        value={PlayerName}
        onChange={onSetPlayerName}
      />
    </div>
  );
}

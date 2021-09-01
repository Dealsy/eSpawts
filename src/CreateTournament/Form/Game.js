import React from "react";

function Game() {
  return (
    <div>
      <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
        Game
      </label>
      <select
        className=" block w-42 bg-gray-200 text-gray-700 border border-red-500 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="Game"
        name="Game"
      >
        <option value="volvo">Dota 2</option>
        <option value="saab">StarCraft 2</option>
        <option value="fiat">CSGO</option>
        <option value="audi">LOL</option>
      </select>
    </div>
  );
}

export default Game;

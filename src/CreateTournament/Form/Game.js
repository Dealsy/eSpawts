import React from "react";

function Game() {
  return (
    <div className="p-2">
      <label className="p-2">Game</label>
      <select className="text-black" id="Game" name="Game">
        <option value="volvo">Dota 2</option>
        <option value="saab">StarCraft 2</option>
        <option value="fiat">CSGO</option>
        <option value="audi">LOL</option>
      </select>
    </div>
  );
}

export default Game;

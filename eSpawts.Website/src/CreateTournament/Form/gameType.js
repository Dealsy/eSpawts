import React from "react";

export default function gameType() {
  return (
    <div>
      <label className="p-2" htmlFor="GameT">
        Game Type:
      </label>
      <select className="text-black" id="GameT" name="GameT">
        <option value="volvo">1v1</option>
        <option value="saab">2v2</option>
        <option value="fiat">3v3</option>
        <option value="audi">FFA</option>
      </select>
    </div>
  );
}

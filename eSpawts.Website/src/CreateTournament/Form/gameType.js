import React from "react";

export default function gameType() {
  return (
    <div className="mr-2">
      <label
        className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
        htmlFor="GameT"
      >
        Game Type:
      </label>
      <select
        className="block w-42 bg-gray-200 text-gray-700 border border-red-500 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="GameT"
        name="GameT"
      >
        <option value="volvo">1v1</option>
        <option value="saab">2v2</option>
        <option value="fiat">3v3</option>
        <option value="audi">FFA</option>
      </select>
    </div>
  );
}

import React from "react";

export default function bestOf() {
  return (
    <div>
      <label
        className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
        htmlFor="bestOf"
      >
        Best Of:
      </label>
      <select
        className="block w-24 bg-gray-200 text-gray-700 border border-red-500 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="bestOf"
        name="bestOf"
      >
        <option value="volvo">2</option>
        <option value="saab">3</option>
        <option value="fiat">5</option>
        <option value="audi">7</option>
      </select>
    </div>
  );
}

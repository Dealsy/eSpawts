import React from "react";

export default function FormMaps() {
  return (
    <div>
      <label
        className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2"
        htmlFor="Maps"
      >
        Maps
      </label>
      <select
        className="block w-96 bg-gray-200 text-gray-700 border border-red-500 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white	 "
        id="Maps"
        name="Maps"
      >
        <option value="volvo">The map 1</option>
        <option value="saab">Big Island</option>
        <option value="fiat">Super Big Island</option>
        <option value="audi">The long Grass Map</option>
      </select>
    </div>
  );
}

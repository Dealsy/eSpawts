import React from "react";

export default function FormMaps() {
  return (
    <div>
      <label className="p-2" htmlFor="Maps">
        Maps
      </label>
      <select className="text-black h-7 text-base	 " id="Maps" name="Maps">
        <option value="volvo">The map 1</option>
        <option value="saab">Big Island</option>
        <option value="fiat">Super Big Island</option>
        <option value="audi">The long Grass Map</option>
      </select>
    </div>
  );
}

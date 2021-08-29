import React from "react";

export default function bestOf() {
  return (
    <div>
      <label className="p-2" htmlFor="bestOf">
        Best Of:
      </label>
      <select className="text-black" id="bestOf" name="bestOf">
        <option value="volvo">2</option>
        <option value="saab">3</option>
        <option value="fiat">5</option>
        <option value="audi">7</option>
      </select>
    </div>
  );
}

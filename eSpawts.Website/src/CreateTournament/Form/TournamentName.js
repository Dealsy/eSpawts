import React from "react";

function TournName({ tname, onSetTname }) {
  return (
    <div>
      <label htmlFor="tname">Tournament Name</label>
      <input
        className="text-black h-7"
        id="tname"
        name="tname"
        tpye="text"
        value={tname}
        onChange={onSetTname}
      />
    </div>
  );
}

export default TournName;

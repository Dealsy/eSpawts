import React from "react";

function TournName({ tname, onSetTname }) {
  return (
    <div>
      <div>
        <label
          className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
          htmlFor="tname"
        >
          Tournament Name
        </label>
        <input
          className="appearance-none block w-96 bg-gray-200 text-gray-700 border border-red-500 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="tname"
          name="tname"
          type="text"
          value={tname}
          onChange={onSetTname}
        />

        {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
      </div>
    </div>
  );
}

export default TournName;

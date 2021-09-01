import React from "react";

export default function Prize() {
  return (
    <div>
      <label
        className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
        htmlFor="Prize"
      >
        Prize Pool:
      </label>
      <input
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        className="appearance-none block w-24 bg-gray-200 text-gray-700 border border-red-500 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="Prize"
        type="text"
      />
    </div>
  );
}

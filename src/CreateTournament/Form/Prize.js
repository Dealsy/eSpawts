import React from "react";

export default function Prize() {
  return (
    <div>
      <label className="p-2" htmlFor="Prize">
        Prize Pool:
      </label>
      <input
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        className="text-black w-24 h-7"
        id="Prize"
        type="text"
      />
    </div>
  );
}

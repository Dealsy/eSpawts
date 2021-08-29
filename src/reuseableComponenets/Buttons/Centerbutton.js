import React from "react";

function GlobalButton(props) {
  return (
    <button
      className="bg-gray-800 text-yellow-600 h-20  hover:bg-gray-700 hover:text-yellow-600  px-4 py-2 mx-0 outline-none focus:shadow-outline text-2xl "
      onClick={props.handleClick}
    >
      {props.label}
    </button>
  );
}

export default GlobalButton;

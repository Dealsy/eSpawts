import React from "react";

function GlobalRightButton(props) {
  return (
    <button
      className=" bg-gray-800 h-20  text-yellow-600 hover:bg-gray-700 hover:text-yellow-600  rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline text-2xl"
      onClick={props.handleClick}
    >
      {props.label}
    </button>
  );
}

export default GlobalRightButton;

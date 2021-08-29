import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="self-center ... ">
      <h1>Admin Screen</h1>
      <div className="grid gap-4 grid-cols-1">
        <Link to="/Delete">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Delete User Screen
          </button>
        </Link>
        <Link to="/getListOfUsers">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            List Users
          </button>
        </Link>
        <Link to="/getListOfAllUsers">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            List All Users
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Admin;

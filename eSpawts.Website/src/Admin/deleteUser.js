import React, { useState } from "react";
import axios from "axios";
import GetAllUsers from "./getAllUsers";

// Fucntion that deletes users from Database, based on use ID

function Delete() {
  const Delete_API =
    "https://localhost:44312/Account/User.aspx?op=delete&data=";

  const [id, idValue] = useState("");
  const [data, setData] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("%c This is the ID", "color: #11AC57", id);

    const data = JSON.stringify({
      ID: id,
    });
    console.log("%c This is the Data", "color: #3B6FBF", data);

    //Axios Post Request
    axios
      .post(Delete_API + data)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("c% This is the error!", "color: #AA3939", error);
        console.log("This is the data", data);
      });
  }

  return (
    <div className="self-center ...">
      {id === true ? (
        <div role="alert">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Danger you deleted
          </div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"></div>
        </div>
      ) : (
        <div></div>
      )}
      <div></div>
      <h1>Delete A User!</h1>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded"
        >
          Delete User
        </button>
        <label htmlFor="id" />
        <input
          type="text"
          className="text-black"
          id="id"
          name="id"
          onChange={(e) => idValue(e.target.value)}
          value={id}
        />
      </form>
      <GetAllUsers />
    </div>
  );
}

export default Delete;

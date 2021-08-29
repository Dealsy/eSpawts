import React, { useState } from "react";
import axios from "axios";

// URL to hit User API
const userRequest =
  "https://localhost:44312/Account/User.aspx?op=retrieve&data=";

// Example of ID that needs to be placed into input box to list a user:
// ea387211-3b0c-4512-839f-27cc5e6a59f5

function GetUsers() {
  const [userInput, setUserInput] = useState("");
  const [userDetails, setUserDetails] = useState();
  const [result, setResult] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(userRequest + userInput)
      .then((res) => {
        setUserDetails(res.data.Data);
        setResult(res.data.Result);
        console.log(res.data);
        console.log(res.data.Result);
      })
      .catch((error) => {
        console.log("c% This is the error!", "color: #AA3939", error);
        console.log("This is the data", userInput);
      });
  }

  return (
    <div className="m-auto">
      <h1>List User</h1>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded"
        >
          Enter Guid
        </button>
        <label htmlFor="users" />
        <input
          type="text"
          className="text-black"
          id="users"
          name="users"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
      </form>
      {userDetails ? (
        <table className="mt-2">
          <tbody>
            <tr>
              <th className="text-green-500 font-bold w-100">UserName </th>
              <th className="text-green-500 font-bold">Email </th>
            </tr>

            <tr>
              <td> {userDetails.NickName} </td>
              <td> {userDetails.EmailAddress} </td>
            </tr>
          </tbody>
        </table>
      ) : (
        "There is no Data to be loaded"
      )}

      {result === false ? (
        <span className="text-red-500">
          Guid should contain 32 digits with 4 dashes
          (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
        </span>
      ) : null}
    </div>
  );
}

export default GetUsers;

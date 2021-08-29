import React, { useState, useEffect } from "react";
import axios from "axios";

// URL to hit User API
const userRequest = process.env.REACT_APP_LIST_ALL;

function GetAllUsers() {
  // Sets userDetails as an empty array, then gets array objects from axios get request
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios
      .get(userRequest)
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((error) => {
        console.log("c% This is the error!", "color: #AA3939", error);
      });
  }, []);

  return (
    <div className="m-auto">
      <h1>All Users</h1>

      <ul>
        {userDetails.map(({ NickName, ID, EmailAddress }) => {
          return (
            <table className="w-full border-4 m-5">
              <tbody>
                <tr className="m-10">
                  <td>{NickName}</td>
                </tr>
                <tr>
                  <td>{ID}</td>
                </tr>
                <tr>
                  <td>{EmailAddress}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </ul>
    </div>
  );
}

export default GetAllUsers;

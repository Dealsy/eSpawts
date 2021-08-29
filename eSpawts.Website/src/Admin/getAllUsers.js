import React, { useState, useEffect } from "react";
import axios from "axios";

// URL to hit User API
const userRequest = "https://localhost:44312/Account/User.aspx";

function GetAllUsers() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios
      .get(userRequest)
      .then((res) => {
        setUserDetails(res.data);
        console.log("res Data", res.data);
      })
      .catch((error) => {
        console.log("c% This is the error!", "color: #AA3939", error);
        console.log("This is the data", userDetails);
      });
  }, []);

  return (
    <div className="m-auto">
      <h1>All Users</h1>

      <ul>
        {userDetails.map(({ NickName, ID, EmailAddress }) => {
          return (
            <table className="w-full border-4 m-5">
              <tr className="m-10">
                <td>{NickName}</td>
              </tr>
              <tr>
                <td>{ID}</td>
              </tr>
              <tr>
                <td>{EmailAddress}</td>
              </tr>
            </table>
          );
        })}
      </ul>
    </div>
  );
}

export default GetAllUsers;

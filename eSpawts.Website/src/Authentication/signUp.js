import React, { useState } from "react";
import axios from "axios";

//URL to create a user
const postUserRequest =
  "https://localhost:44312/Account/User.aspx?op=create&data=";

// TODO add functionaillty for comfirmed password field.

// fuction that adds a new user to the Database with paramaters of: NickName: EmailAddress: Password:

function SignUp() {
  // Sets State Of User Input In Forms
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // TODO Create state that Handles Erros In Axios Post Request

  // Sets Data For Axios to Post
  const [data, setData] = useState("");
  console.log(data);
  const handleSubmit = (event) => {
    event.preventDefault();

    // Data To Be Passed Into Axios
    const data = JSON.stringify({
      NickName: name,
      EmailAddress: email,
      Password: password,
    });
    //Axios Post Request
    axios
      .post(postUserRequest + data)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("This is the error!", error);
        console.log("This is the data", data);
      });
  };

  return (
    <div className="w-6/12 border-green-300 rounded p-6 border-2 m-auto bg-reg bg-no-repeat bg-cover">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-28">
          <div>
            <label className="pr-3 font-bold " htmlFor="name">
              Nick Name:
            </label>
            <input
              className="bg-transparent	focus:outline-none appearance-none border-b border-purple-500 "
              id="name"
              type="text"
              name="nickname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="pr-3 font-bold" htmlFor="email">
              Email:
            </label>
            <input
              className="bg-transparent	focus:outline-none appearance-none border-b border-purple-500"
              id="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
            />
          </div>

          <div>
            <label htmlFor="password" className="pr-3 font-bold">
              Password:
            </label>
            <input
              className="bg-transparent	focus:outline-none appearance-none border-b border-purple-500"
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />
          </div>
          <div>
            <label className="font-bold" htmlFor="confirmPassword">
              Verify Password:
            </label>
            <input
              className="bg-transparent	focus:outline-none appearance-none border-b border-purple-500"
              id="confirmPassword"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              value={confirmPassword}
            />
          </div>
        </div>
        <button
          className="mt-5 text-green-400  hover:text-green-900 border-2 hover:bg-green-300 font-extrabold	 border-green-700 rounded p-2 bg-green-100 "
          type="submit"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;

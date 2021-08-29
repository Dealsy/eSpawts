import axios from "axios";

// URL to hit User API
const userRequest = "https://localhost:44312/Account/User.aspx";

// API call to return a single user from the database.
async function getUsers() {
  const response = await axios.get(userRequest);
  console.log(response.data.length, "users were returned.");
}

export { getUsers };

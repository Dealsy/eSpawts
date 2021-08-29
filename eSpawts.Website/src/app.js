import ESpawtsNav from "./navBar/navBar";
import DashBoard from "./dashBoard/dashBoard";
import { Route, Switch } from "react-router-dom";
import Login from "./Authentication/login";
import SignUp from "./Authentication/signUp";
import MyTournaments from "./Account/MyTournaments";
import Create from "./CreateTournament/Create";
import Account from "./Account/Accounts";
import Admin from "./Admin/admin_screen";
import Delete from "./Admin/deleteUser";
import GetUsers from "./Admin/getUsers";
import GetAllUsers from "./Admin/getAllUsers";
import "./App.css";

function App() {
  return (
    <main className="App-header">
      <ESpawtsNav />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/MyTournaments" component={MyTournaments} />
        <Route path="/Create" component={Create} />
        <Route path="/Account" component={Account} />
        <Route path="/Admin" component={Admin} />
        <Route path="/Delete" component={Delete} />
        <Route path="/getListOfUsers" component={GetUsers} />
        <Route path="/getListOfAllUsers" component={GetAllUsers} />
        <Route path="/" component={DashBoard} />
      </Switch>
    </main>
  );
}

export default App;

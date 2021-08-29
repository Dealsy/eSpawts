import React, { Component } from "react";
import "../logos.css";
import starcraft from "../Images/sc2_logo.png";
import Dota from "../Images/dota2.jpg";
import Lol from "../Images/lol.png";
import Oz from "../Images/oz.png";

// const baseUrl = 'https://api.espawts.empirisoft.com.au/competitive/tournaments.aspx';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="logos">
          <img alt="starcraftLogo" src={starcraft} />
          <img alt="DotaLogo" src={Dota} />
          <img alt="LOLLogo" src={Lol} />
          <img alt="OzLogo" src={Oz} />
        </div>
      </div>
    );
  }
}

export default DashBoard;

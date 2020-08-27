import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home-container">
          <img className="home-img" src="images/nerd.svg" alt="nerd" />
          <img className="home-img" src="images/plus.svg" alt="plus" />
          <img className="home-img" src="images/athlete.svg" alt="athlete" />
          <br />
          <h1>Nerd Athlete</h1>

          <br />
          <img
            className="home-img"
            src="images/nerd-athlete.svg"
            alt="nerd-athlete"
          />
          <img
            className="home-img"
            src="images/nerd-athlete.svg"
            alt="nerd-athlete"
          />

          <img
            className="home-img"
            src="images/nerd-athlete.svg"
            alt="nerd-athlete"
          />
        </div>
      </>
    );
  }
}

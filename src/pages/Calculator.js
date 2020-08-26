import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Calculator extends Component {
  state = {
    seconds: 1,
    minutes: 1,
    hours: 1,
    totalTime: 0,
    km: 0,
    mile: 1.609344,
    five: 0,
    ten: 0,
    halfMarathon: 0,
    marathon: 0,
  };
  handleChangeHours = (e) => {
    this.setState({
      hours: e.target.value * 3600,
    });
  };
  handleChangeMinutes = (e) => {
    this.setState({
      minutes: e.target.value * 60,
    });
  };
  handleChangeSeconds = (e) => {
    this.setState({
      seconds: e.target.value * 1,
    });
  };

  handleClick = () => {
    this.setState({
      totalTime: this.state.seconds + this.state.minutes + this.state.hours,
    });
  };
  render() {
    return (
      <>
        <div className="calculator_container">
          <div className="calculator_title">
            <h2>Kalkulator tempa biegu</h2>
          </div>

          <div className="calculator_body">
            <h3>Dystans</h3>
            <input type="text" placeholder="1km" />

            <h3>Czas</h3>
            <input
              type="text"
              placeholder="hh"
              onChange={this.handleChangeHours}
            />
            <p>{this.state.hours}</p>
            <input
              type="text"
              placeholder="mm"
              onChange={this.handleChangeMinutes}
            />
            <p>{this.state.minutes}</p>
            <input
              type="text"
              placeholder="ss"
              onChange={this.handleChangeSeconds}
            />
            <p>{this.state.seconds}</p>
            <br />
            <button onClick={this.handleClick}>Oblicz</button>
            <p>{this.state.totalTime}</p>
            <table style={{ width: "100%" }}>
              <tr>
                <th>Dystans</th>
                <th>Przewidywany czas na mecie</th>
              </tr>
              <tr>
                <td>1km</td>
                <td>00:02:19</td>
              </tr>
              <tr>
                <td>3km</td>
                <td>94</td>
              </tr>
              <tr>
                <td>5km</td>
                <td>94</td>
              </tr>
              <tr>
                <td>10km</td>
                <td>94</td>
              </tr>
              <tr>
                <td>21,097km</td>
                <td>94</td>
              </tr>
              <tr>
                <td>42,195km</td>
                <td>94</td>
              </tr>
            </table>

            <table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

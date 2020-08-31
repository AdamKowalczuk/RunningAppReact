import React, { Component } from "react";

export default class Calculator extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    totalTime: 0,
    km: 1,
    mile: 1.609344,
    five: 0,
    ten: 0,
    halfMarathon: 0,
    marathon: 0,
  };
  handleChangeKm = (e) => {
    this.setState({
      km: e.target.value,
    });
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

            <div className="input-container">
              <input
                type="text"
                placeholder="&nbsp;"
                onChange={this.handleChangeKm}
              />
              <label>km</label>
            </div>
            <h3>Czas</h3>

            <div className="input-container input-calculator">
              <input
                type="text"
                placeholder="&nbsp;"
                onChange={this.handleChangeHours}
              />
              <label>hh</label>
            </div>
            <div className="input-container input-calculator">
              <input
                type="text"
                placeholder="&nbsp;"
                onChange={this.handleChangeMinutes}
              />
              <label>mm</label>
            </div>
            <div className="input-container input-calculator">
              <input
                type="text"
                placeholder="&nbsp;"
                onChange={this.handleChangeSeconds}
              />
              <label>ss</label>
            </div>
            <button
              className="btn btn-green"
              onClick={this.handleClick}
              style={{ marginBottom: "15px" }}
            >
              Oblicz
            </button>
            <table style={{ width: "100%", marginBottom: "20px" }}>
              <tbody>
                <tr>
                  <th>Dystans</th>
                  <th>Przewidywany czas na mecie</th>
                </tr>
                <tr>
                  <td>1km</td>
                  <td>
                    {Math.floor(this.state.totalTime / this.state.km / 3600) <
                    10
                      ? "0" +
                        Math.floor(this.state.totalTime / this.state.km / 3600)
                      : Math.floor(this.state.totalTime / this.state.km / 3600)}
                    :
                    {(
                      ((this.state.totalTime / this.state.km) % 3600) /
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          ((this.state.totalTime / this.state.km) % 3600) /
                          60
                        ).toFixed(0)
                      : (
                          ((this.state.totalTime / this.state.km) % 3600) /
                          60
                        ).toFixed(0)}
                    :
                    {(
                      ((this.state.totalTime / this.state.km) % 3600) %
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          ((this.state.totalTime / this.state.km) % 3600) %
                          60
                        ).toFixed(0)
                      : (
                          ((this.state.totalTime / this.state.km) % 3600) %
                          60
                        ).toFixed(0)}
                  </td>
                </tr>
                <tr>
                  <td>3km</td>
                  <td>
                    {Math.floor(
                      (this.state.totalTime * 3) / this.state.km / 3600
                    ) < 10
                      ? "0" +
                        Math.floor(
                          (this.state.totalTime * 3) / this.state.km / 3600
                        )
                      : Math.floor(
                          (this.state.totalTime * 3) / this.state.km / 3600
                        )}
                    :
                    {(
                      (((this.state.totalTime * 3) / this.state.km) % 3600) /
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          (((this.state.totalTime * 3) / this.state.km) %
                            3600) /
                          60
                        ).toFixed(0)
                      : (
                          (((this.state.totalTime * 3) / this.state.km) %
                            3600) /
                          60
                        ).toFixed(0)}
                    :
                    {(
                      (((this.state.totalTime * 3) / this.state.km) % 3600) %
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          (((this.state.totalTime * 3) / this.state.km) %
                            3600) %
                          60
                        ).toFixed(0)
                      : (
                          (((this.state.totalTime * 3) / this.state.km) %
                            3600) %
                          60
                        ).toFixed(0)}
                  </td>
                </tr>
                <tr>
                  <td>5km</td>
                  <td>
                    {Math.floor(
                      (this.state.totalTime * 5) / this.state.km / 3600
                    ) < 10
                      ? "0" +
                        Math.floor(
                          (this.state.totalTime * 5) / this.state.km / 3600
                        )
                      : Math.floor(
                          (this.state.totalTime * 5) / this.state.km / 3600
                        )}
                    :
                    {(
                      (((this.state.totalTime * 5) / this.state.km) % 3600) /
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          (((this.state.totalTime * 5) / this.state.km) %
                            3600) /
                          60
                        ).toFixed(0)
                      : (
                          (((this.state.totalTime * 5) / this.state.km) %
                            3600) /
                          60
                        ).toFixed(0)}
                    :
                    {(
                      (((this.state.totalTime * 5) / this.state.km) % 3600) %
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          (((this.state.totalTime * 5) / this.state.km) %
                            3600) %
                          60
                        ).toFixed(0)
                      : (
                          (((this.state.totalTime * 5) / this.state.km) %
                            3600) %
                          60
                        ).toFixed(0)}
                  </td>
                </tr>
                <tr>
                  <td>10km</td>
                  <td>
                    {Math.floor(
                      (this.state.totalTime * 10) / this.state.km / 3600
                    ) < 10
                      ? "0" +
                        Math.floor(
                          (this.state.totalTime * 10) / this.state.km / 3600
                        )
                      : Math.floor(
                          (this.state.totalTime * 10) / this.state.km / 3600
                        )}
                    :
                    {(
                      (((this.state.totalTime * 10) / this.state.km) % 3600) /
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          (((this.state.totalTime * 10) / this.state.km) %
                            3600) /
                          60
                        ).toFixed(0)
                      : (
                          (((this.state.totalTime * 10) / this.state.km) %
                            3600) /
                          60
                        ).toFixed(0)}
                    :
                    {(
                      (((this.state.totalTime * 10) / this.state.km) % 3600) %
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          (((this.state.totalTime * 10) / this.state.km) %
                            3600) %
                          60
                        ).toFixed(0)
                      : (
                          (((this.state.totalTime * 10) / this.state.km) %
                            3600) %
                          60
                        ).toFixed(0)}
                  </td>
                </tr>
                <tr>
                  <td>21.097km</td>
                  <td>
                    {Math.floor(
                      (this.state.totalTime * 21.097) / this.state.km / 3600
                    ) < 10
                      ? "0" +
                        Math.floor(
                          (this.state.totalTime * 21.097) / this.state.km / 3600
                        )
                      : Math.floor(
                          (this.state.totalTime * 21.097) / this.state.km / 3600
                        )}
                    :
                    {(
                      (((this.state.totalTime * 21.097) / this.state.km) %
                        3600) /
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          (((this.state.totalTime * 21.097) / this.state.km) %
                            3600) /
                          60
                        ).toFixed(0)
                      : (
                          (((this.state.totalTime * 21.097) / this.state.km) %
                            3600) /
                          60
                        ).toFixed(0)}
                    :
                    {(
                      (((this.state.totalTime * 21.097) / this.state.km) %
                        3600) %
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          (((this.state.totalTime * 21.097) / this.state.km) %
                            3600) %
                          60
                        ).toFixed(0)
                      : (
                          (((this.state.totalTime * 21.097) / this.state.km) %
                            3600) %
                          60
                        ).toFixed(0)}
                  </td>
                </tr>
                <tr>
                  <td>42.195km</td>
                  <td>
                    {Math.floor(
                      (this.state.totalTime * 42.195) / this.state.km / 3600
                    ) < 10
                      ? "0" +
                        Math.floor(
                          (this.state.totalTime * 42.195) / this.state.km / 3600
                        )
                      : Math.floor(
                          (this.state.totalTime * 42.195) / this.state.km / 3600
                        )}
                    :
                    {(
                      (((this.state.totalTime * 42.195) / this.state.km) %
                        3600) /
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          (((this.state.totalTime * 42.195) / this.state.km) %
                            3600) /
                          60
                        ).toFixed(0)
                      : (
                          (((this.state.totalTime * 42.195) / this.state.km) %
                            3600) /
                          60
                        ).toFixed(0)}
                    :
                    {(
                      (((this.state.totalTime * 42.195) / this.state.km) %
                        3600) %
                      60
                    ).toFixed(0) < 10
                      ? "0" +
                        (
                          (((this.state.totalTime * 42.195) / this.state.km) %
                            3600) %
                          60
                        ).toFixed(0)
                      : (
                          (((this.state.totalTime * 42.195) / this.state.km) %
                            3600) %
                          60
                        ).toFixed(0)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

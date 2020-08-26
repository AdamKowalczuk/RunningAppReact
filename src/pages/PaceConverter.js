import React, { Component } from "react";

export default class PaceConverter extends Component {
  state = {
    km: "",
    mile: "",
  };
  handleChangeKm = (e) => {
    this.setState({
      km: e.target.value,
      mile: (e.target.value * 1.609344).toFixed(2),
    });
  };
  handleChangeMile = (e) => {
    this.setState({
      km: (e.target.value * 1.609344).toFixed(2),
      mile: e.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="calculator_container">
          <div className="calculator_title">
            <h2>Zamiana km na mile/mil na km</h2>
          </div>

          <div className="calculator_body" style={{ paddingTop: "20px" }}>
            <div className="input-container">
              <input
                type="text"
                placeholder="&nbsp;"
                onChange={this.handleChangeKm}
              />
              <label>Km</label>
            </div>

            <p>{this.state.km} km</p>

            <div className="input-container">
              <input
                type="text"
                placeholder="&nbsp;"
                onChange={this.handleChangeMile}
              />
              <label>Mile</label>
            </div>

            <p>{this.state.mile} mile</p>
            <hr />
            <p>1 km - 1.61 mil</p>
            <p>5 km - 8.05 mile</p>
            <p>10 km - 16.09 mile</p>
            <p>21.0975 km - 33.95 mile</p>
            <p>113.14 km - 70.3 mil</p>
          </div>
        </div>
      </>
    );
  }
}

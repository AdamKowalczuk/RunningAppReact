import React, { Component } from "react";

export default class BMI extends Component {
  state = {
    height: 0,
    weight: 0,
    result: 0,
  };

  handleClick = () => {
    this.setState({
      result: (
        (this.state.weight / (Math.pow(this.state.height, 2) / 100)) *
        100
      ).toFixed(2),
    });
  };

  heightHandleChange = (e) => {
    this.setState({
      height: e.target.value,
    });
  };
  weightHandleChange = (e) => {
    this.setState({
      weight: e.target.value,
    });
  };

  render() {
    const message = `Twoje BMI wynosi: ${this.state.result}`;

    return (
      <>
        <div className="calculator_container">
          <div className="calculator_title">
            <h2>Kalkulator BMI</h2>
          </div>

          <div className="calculator_body">
            <div className="box">
              <h3>Wzrost</h3>

              <div className="input-container">
                <input type="text" onChange={this.heightHandleChange} />
                <label>Cm</label>
              </div>

              <h3>Waga</h3>
              <div className="input-container">
                <input type="text" onChange={this.weightHandleChange} />
                <label>Kg</label>
              </div>
            </div>

            <br />
            <button className="btn btn-green" onClick={this.handleClick}>
              Sprawdź
            </button>
            <p>{message}</p>

            {((props) => {
              if (this.state.result < 18.5 && this.state.result > 0) {
                return (
                  <div className="bmi-result" style={{ color: "yellow" }}>
                    Masz niedowagę
                  </div>
                );
              } else if (this.state.result >= 18.5 && this.state.result < 25) {
                return (
                  <div className="bmi-result" style={{ color: "lime" }}>
                    Gratuluję !
                    <br />
                    Masz prawidłową wagę
                  </div>
                );
              } else if (this.state.result >= 25 && this.state.result < 30) {
                return (
                  <div className="bmi-result" style={{ color: "gold" }}>
                    Masz nadwagę
                  </div>
                );
              } else if (this.state.result >= 30 && this.state.result < 35) {
                return (
                  <div className="bmi-result" style={{ color: "orange" }}>
                    Masz otyłość I stopnia !
                  </div>
                );
              } else if (this.state.result >= 35 && this.state.result < 40) {
                return (
                  <div className="bmi-result" style={{ color: "darkorange" }}>
                    Masz otyłość II stopnia !
                  </div>
                );
              } else if (this.state.result >= 40) {
                return (
                  <div className="bmi-result" style={{ color: "red" }}>
                    Masz skrajną otyłość!
                    <br />
                    Musisz zacząć dbać o siebie
                  </div>
                );
              }
            })()}
          </div>
        </div>
      </>
    );
  }
}

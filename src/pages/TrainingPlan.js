import React, { Component } from "react";
import "../styles/TrainingPlan.css";
export default class TrainingPlan extends Component {
  state = {
    day: [
      { number: "1", text: "", done: false },
      { number: "2", text: "", done: false },
      { number: "3", text: "", done: false },
      { number: "4", text: "", done: false },
      { number: "5", text: "", done: false },
      { number: "6", text: "", done: false },
      { number: "7", text: "", done: false },
      { number: "8", text: "", done: false },
      { number: "9", text: "", done: false },
      { number: "10", text: "", done: false },
      { number: "11", text: "", done: false },
      { number: "12", text: "", done: false },
      { number: "13", text: "", done: false },
      { number: "14", text: "", done: false },
      { number: "15", text: "", done: false },
      { number: "16", text: "", done: false },
      { number: "17", text: "", done: false },
      { number: "18", text: "", done: false },
      { number: "19", text: "", done: false },
      { number: "20", text: "", done: false },
      { number: "21", text: "", done: false },
      { number: "22", text: "", done: false },
      { number: "23", text: "", done: false },
      { number: "24", text: "", done: false },
      { number: "25", text: "", done: false },
      { number: "26", text: "", done: false },
      { number: "27", text: "", done: false },
      { number: "28", text: "", done: false },
      { number: "29", text: "", done: false },
      { number: "30", text: "", done: false },
      { number: "31", text: "", done: false },
    ],
    newTraining: "",
    newDay: "",
  };

  handleChangeTraining = (e) => {
    this.setState({
      newTraining: e.target.value,
    });
  };
  handleChangeDay = (e) => {
    this.setState({
      newDay: e.target.value,
    });
  };
  handleSubmit = () => {
    const newValue = (this.state.day[this.state.newDay - 1] = {
      text: this.state.newTraining,
      number: this.state.newDay,
    });

    //const newItem=this.state.day[this.state.newDay - 1];
    // const newValue = {
    //   text: this.state.newTraining,
    //   number: this.state.newDay,
    // };
    this.setState({
      text: newValue.text,
    });
    //localStorage.setItem("color", "red");
  };
  handleClickDone = (e) => {
    if (e.currentTarget.className === "day") {
      e.currentTarget.className = "done";
    } else {
      e.currentTarget.className = "day";
    }
  };

  render() {
    const days = this.state.day.map((day) => (
      <div
        className="day"
        key={day.number}
        value={day.text}
        onClick={(e) => this.handleClickDone(e)}
      >
        <p>{day.number}</p>
        <p>{day.text}</p>
      </div>
    ));
    return (
      <>
        <div className="training-container" style={{ marginTop: "0px" }}>
          <h1>Miesięczny plan treningowy</h1>

          <div className="input-container">
            <input
              type="text"
              onChange={this.handleChangeTraining}
              placeholder="&nbsp;"
            />
            <label>Dodaj trening</label>
          </div>

          <div className="input-container">
            <input
              type="text"
              onChange={this.handleChangeDay}
              placeholder="&nbsp;"
            />
            <label>Dzień miesiąca</label>
          </div>

          <button className="btn btn-green" onClick={this.handleSubmit}>
            Dodaj
          </button>

          <div className="DayOfTheWeek-container">
            <div className="day day-height">Pn</div>
            <div className="day day-height">Wt</div>
            <div className="day day-height">Śr</div>
            <div className="day day-height">Cz</div>
            <div className="day day-height">Pt</div>
            <div className="day day-height">Sb</div>
            <div className="day day-height">N</div>
          </div>

          <div className="grid-container">{days}</div>
        </div>
      </>
    );
  }
}

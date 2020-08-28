import React, { Component } from "react";

export default class Quiz extends Component {
  state = {
    number: 1,
    score: 0,
    random: Math.floor(Math.random() * 2),
    result: "",
    questions: [
      "Co Adam uprawia?",
      "Jaki dystans ma maraton?",
      "Jaki Adam ma rozmiar buta?",
      "Ile Adam ma wzrostu?",
      "Drugie imię Adama?",
    ],
    answers: [
      {
        isTrue: true,
        text: "Lekkoatletykę",
      },
      {
        isTrue: false,
        text: "Kajakarstwo",
      },
      {
        isTrue: false,
        text: "Wspinaczkę",
      },
      {
        isTrue: false,
        text: "Narciarstwo",
      },
      {
        isTrue: false,
        text: "10000 m",
      },
      {
        isTrue: false,
        text: "5000 m",
      },
      {
        isTrue: true,
        text: "42195 m",
      },
      {
        isTrue: false,
        text: " 21097 m",
      },
      {
        isTrue: false,
        text: "41",
      },
      {
        isTrue: false,
        text: "42",
      },
      {
        isTrue: true,
        text: "43",
      },
      {
        isTrue: false,
        text: " 44",
      },
      {
        isTrue: true,
        text: "174",
      },
      {
        isTrue: false,
        text: "179",
      },
      {
        isTrue: false,
        text: "130",
      },
      {
        isTrue: false,
        text: " 220",
      },
      {
        isTrue: false,
        text: "Hieronim",
      },
      {
        isTrue: true,
        text: "Piotr",
      },
      {
        isTrue: false,
        text: "Adam",
      },
      {
        isTrue: false,
        text: "Hiacynta",
      },
    ],
  };

  handleClickButton1 = () => {
    console.log(this.state.random);
    console.log(this.state.answers[this.state.random * 4].isTrue);
    if (this.state.answers[this.state.random * 4].isTrue === true) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      random: Math.floor(Math.random() * this.state.questions.length),
      number: this.state.number + 1,
    });
  };
  handleClickButton2 = () => {
    console.log(this.state.random);
    console.log(this.state.answers[this.state.random * 4 + 1].isTrue);
    if (this.state.answers[this.state.random * 4 + 1].isTrue === true) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      random: Math.floor(Math.random() * this.state.questions.length),
      number: this.state.number + 1,
    });
  };
  handleClickButton3 = () => {
    console.log(this.state.random);
    console.log(this.state.answers[this.state.random * 4 + 2].isTrue);
    if (this.state.answers[this.state.random * 4 + 2].isTrue === true) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      random: Math.floor(Math.random() * this.state.questions.length),
      number: this.state.number + 1,
    });
  };
  handleClickButton4 = () => {
    console.log(this.state.random);
    console.log(this.state.answers[this.state.random * 4 + 3].isTrue);
    if (this.state.answers[this.state.random * 4 + 3].isTrue === true) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      random: Math.floor(Math.random() * this.state.questions.length),
      number: this.state.number + 1,
    });
  };

  render() {
    console.log(this.state.score);

    return (
      <>
        {this.state.number < 11 ? (
          <div className="calculator_container">
            <h1>Quiz o bieganiu</h1>

            <h3>Pytanie {this.state.number}/10</h3>
            <h2>{this.state.questions[this.state.random]}</h2>
            <button
              className="btn btn-green"
              value={this.state.answers[this.state.random * 4].isTrue}
              onClick={this.handleClickButton1}
            >
              {this.state.answers[this.state.random * 4].text}
            </button>
            <button
              className="btn btn-green"
              value={this.state.answers[this.state.random * 4 + 1].isTrue}
              onClick={this.handleClickButton2}
            >
              {this.state.answers[this.state.random * 4 + 1].text}
            </button>
            <button
              className="btn btn-green"
              value={this.state.answers[this.state.random * 4 + 2].isTrue}
              onClick={this.handleClickButton3}
            >
              {this.state.answers[this.state.random * 4 + 2].text}
            </button>
            <button
              className="btn btn-green"
              value={this.state.answers[this.state.random * 4 + 3].isTrue}
              onClick={this.handleClickButton4}
            >
              {this.state.answers[this.state.random * 4 + 3].text}
            </button>
          </div>
        ) : (
          <>
            <h1>
              Gratuluję!
              <br />
              Twój wynik to:
            </h1>
            <h3>{this.state.score}/10</h3>
          </>
        )}
      </>
    );
  }
}

import React, { Component } from "react";

export default class Quiz extends Component {
  state = {
    number: 1,
    score: 0,
    random: Math.floor(Math.random() * 15),
    result: "",
    questions: [
      "Ile kilometrów liczy najdłuższy bieg świata?",
      "Jaki dystans liczy maraton?",
      "Ile mięśni angażuje jeden krok?",
      "Jaki kraj reprezentuje Usain Bolt?",
      "Z jakich dyscyplin składa się Triathlon?",
      "Podczas jakiego maratonu doszło do zamachu?",
      "Ile kcal ma średniej wielkości banan?",
      "Ile litrów potu może stracić przeciętny biegacz w trakcie maratonu?",
      "Co to jest VO2max?",
      "Jak nazywa się test sprawności, w którym trzeba biegać przez 12 min?",
      "Kiedy narodził się maraton?",
      "Ile wynosi męski rekord w biegu na 100m?",
      "Kim jest „zając” na biegu ulicznym?",
      `Kogo dotyka tzw. "ściana"?`,
      "Jaka jest długość bieżni na stadionie lekkoatletycznym?",
      "Jak nazywa się bieg, w którym linią mety jest jadący samochód?",
    ],
    answers: [
      {
        isTrue: false,
        text: "42,195 km",
      },
      {
        isTrue: true,
        text: "246 km",
      },
      {
        isTrue: false,
        text: "90 km",
      },
      {
        isTrue: false,
        text: "512 km",
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
        text: "21097 m",
      },
      {
        isTrue: false,
        text: "100",
      },
      {
        isTrue: true,
        text: "200",
      },
      {
        isTrue: false,
        text: "50",
      },
      {
        isTrue: false,
        text: "10",
      },
      {
        isTrue: false,
        text: "Kenię",
      },
      {
        isTrue: false,
        text: "Stany Zjednoczone",
      },
      {
        isTrue: false,
        text: "Wielką Brytanię",
      },
      {
        isTrue: true,
        text: "Jamajkę",
      },
      {
        isTrue: true,
        text: "Pływanie, kolarstwo, bieganie",
      },
      {
        isTrue: false,
        text: "Pływanie, jeździectwo, bieganie",
      },
      {
        isTrue: false,
        text: "Kajakarstwo, kolarstwo, bieganie",
      },
      {
        isTrue: false,
        text: "Tylko z biegania",
      },
      {
        isTrue: false,
        text: "W Londynie",
      },
      {
        isTrue: true,
        text: "W Bostonie",
      },
      {
        isTrue: false,
        text: "W Warszawie",
      },
      {
        isTrue: false,
        text: "W Berlinie",
      },
      {
        isTrue: false,
        text: "200",
      },
      {
        isTrue: false,
        text: "50",
      },
      {
        isTrue: true,
        text: "100",
      },
      {
        isTrue: false,
        text: "150",
      },
      {
        isTrue: false,
        text: "2 l",
      },
      {
        isTrue: false,
        text: "5 l",
      },
      {
        isTrue: false,
        text: "6 l",
      },
      {
        isTrue: true,
        text: "4 l",
      },
      {
        isTrue: false,
        text: "Poziom kondycji",
      },
      {
        isTrue: true,
        text: "Pułap tlenowy",
      },
      {
        isTrue: false,
        text: "Tętno maksymalne",
      },
      {
        isTrue: false,
        text: "Maksymalna prędkość biegu",
      },
      {
        isTrue: true,
        text: "Test Coopera",
      },
      {
        isTrue: false,
        text: "Test sprawności biegowej",
      },
      {
        isTrue: false,
        text: "Test komandosa",
      },
      {
        isTrue: false,
        text: "Test wydolności organizmu",
      },
      {
        isTrue: false,
        text: "Około 415 r.p.n.e",
      },
      {
        isTrue: true,
        text: "Około 490 r.p.n.e",
      },
      {
        isTrue: false,
        text: "Około 450 r.p.n.e",
      },
      {
        isTrue: false,
        text: "Około 450 r.n.e",
      },
      {
        isTrue: false,
        text: "10,02",
      },
      {
        isTrue: false,
        text: "9,24",
      },
      {
        isTrue: false,
        text: "9,92",
      },
      {
        isTrue: true,
        text: "9,58",
      },
      {
        isTrue: false,
        text: "Sędzią",
      },
      {
        isTrue: true,
        text: "Pacemakerem",
      },
      {
        isTrue: false,
        text: "Widzem",
      },
      {
        isTrue: false,
        text: "Wolontariuszem",
      },
      {
        isTrue: true,
        text: "Maratończyków",
      },
      {
        isTrue: false,
        text: "Uczestników biegu na 10km",
      },
      {
        isTrue: false,
        text: "Uczestników biegu na 5km",
      },
      {
        isTrue: false,
        text: "Półmaratończyków",
      },
      {
        isTrue: false,
        text: "200 m",
      },
      {
        isTrue: false,
        text: "1000 m",
      },
      {
        isTrue: false,
        text: "600 m",
      },
      {
        isTrue: true,
        text: "400 m",
      },
      {
        isTrue: false,
        text: "Armageddon",
      },
      {
        isTrue: true,
        text: "Wings for Life World Run",
      },
      {
        isTrue: false,
        text: "Runmageddon",
      },
      {
        isTrue: false,
        text: "Bieg Rzeźnika",
      },
    ],
  };

  handleClickButton1 = () => {
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
    console.log(this.state.random);
    return (
      <>
        {this.state.number < 11 ? (
          <div className="calculator_container">
            <h1>Quiz o bieganiu</h1>

            <h3>Pytanie {this.state.number}/10</h3>
            <h2>{this.state.questions[this.state.random]}</h2>
            <button className="btn btn-green" onClick={this.handleClickButton1}>
              {this.state.answers[this.state.random * 4].text}
            </button>
            <button className="btn btn-green" onClick={this.handleClickButton2}>
              {this.state.answers[this.state.random * 4 + 1].text}
            </button>
            <button className="btn btn-green" onClick={this.handleClickButton3}>
              {this.state.answers[this.state.random * 4 + 2].text}
            </button>
            <button className="btn btn-green" onClick={this.handleClickButton4}>
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

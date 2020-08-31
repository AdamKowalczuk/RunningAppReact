import React from "react";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import Home from "./pages/Home.js";
import BMI from "./pages/BMI.js";
import Calculator from "./pages/Calculator.js";
import PaceConverter from "./pages/PaceConverter.js";
import Quotes from "./pages/Quotes.js";
import Quiz from "./pages/Quiz.js";
import TrainingPlan from "./pages/TrainingPlan.js";
import ResponsiveNavigation from "./components/ResponsiveNavigation";
import "./styles/App.css";
import "./styles/calculator.css";
import "./styles/button.css";
import "./styles/input.css";

function App() {
  const navLinks = [
    {
      text: "Strona główna",
      path: "/",
      icon: "ion-ios-home",
    },
    {
      text: "Kalkulator tempa biegu",
      path: "/kalkulator-tempa-biegu",
      icon: "fas fa-calculator",
    },
    {
      text: "Przelicznik",
      path: "/przelicznik",
      icon: "fas fa-exchange-alt",
    },
    {
      text: "BMI",
      path: "/bmi",
      icon: "fas fa-balance-scale-right",
    },
    {
      text: "Cytaty",
      path: "/cytaty",
      icon: "fas fa-quote-right",
    },
    {
      text: "Quiz",
      path: "/quiz",
      icon: "fas fa-atlas",
    },
    {
      text: "Plan treningowy",
      path: "/planTreningowy",
      icon: "fas fa-dumbbell",
    },
  ];

  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks={navLinks}
        logo={logo}
        background="#4905c7"
        hoverBackground="#fff"
        linkColor="#fff"
        colorText="#4905c7"
      />
      <Router>
        <Home exact path="/" />
        <Calculator path="/kalkulator-tempa-biegu" />
        <PaceConverter path="/przelicznik" />
        <BMI path="/bmi" />
        <Quotes path="/cytaty" />
        <Quiz path="/quiz" />
        <TrainingPlan path="/planTreningowy" />
      </Router>
    </div>
  );
}

export default App;

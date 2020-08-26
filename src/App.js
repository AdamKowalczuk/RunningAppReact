import React from "react";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import Home from "./pages/Home.js";
import BMI from "./pages/BMI.js";
import Calculator from "./pages/Calculator.js";
import PaceConverter from "./pages/PaceConverter.js";
import Cytaty from "./pages/Cytaty.js";
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
      icon: "ion-ios-calculator",
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
        <Cytaty path="/cytaty" />
      </Router>
    </div>
  );
}

export default App;

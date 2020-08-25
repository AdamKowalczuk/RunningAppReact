import React from "react";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import Home from "./pages/Home.js";
import BMI from "./pages/BMI.js";
import Calculator from "./pages/Calculator.js";
import PaceConverter from "./pages/PaceConverter.js";
import ResponsiveNavigation from "./components/ResponsiveNavigation";
import "./styles/App.css";

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
  ];

  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks={navLinks}
        logo={logo}
        background="#CF395F"
        hoverBackground="#342b57"
        linkColor="#fff"
      />
      <Router>
        <Home exact path="/" />
        <Calculator path="/kalkulator-tempa-biegu" />
        <PaceConverter path="/przelicznik" />
        <BMI path="/bmi" />
      </Router>
    </div>
  );
}

export default App;

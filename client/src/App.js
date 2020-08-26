import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";

import { GlobalProvider } from "./context/globalContext";
import Hero from "./components/hero";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <div className="flex">
            <Header />
            <Hero />
          </div>
          <Home />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;

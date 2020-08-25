import React from "react";
import logo from "./logo.svg";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";

import { GlobalProvider } from "./context/globalContext";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Header />
          <Home />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;

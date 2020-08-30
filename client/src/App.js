import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";

import { GlobalProvider } from "./context/globalContext";
import Hero from "./components/hero";
import Footer from "./components/footer";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <div className="flex header-top">
            <Header />
            <Hero />
          </div>
          <Home />
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;

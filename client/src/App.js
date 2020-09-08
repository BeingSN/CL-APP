import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";

import { GlobalProvider } from "./context/globalContext";
import Hero from "./components/hero";
import Footer from "./components/footer";
import TeamPage from "./components/teamPage";
import AboutPage from "./components/aboutPage";
import HistoryPage from "./components/historyPage";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Route path="/about" exact component={AboutPage} />
        <Route path="/history" exact component={HistoryPage} />
        <Route path="/teams/:id" exact component={TeamPage} />
        <Route path="/" exact>
          <div className="App">
            <div className="flex header-top">
              <Header />
              <Hero />
            </div>
            <Home />
            <Footer />
          </div>
        </Route>
      </Router>
    </GlobalProvider>
  );
}

export default App;

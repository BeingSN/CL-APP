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
import { gsap } from "gsap";
import { CSSTransition } from "react-transition-group";

function App() {
  const onEnter = (node) => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6,
        },
      }
    );
  };

  const onExit = (node) => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2,
        },
      }
    );
  };
  return (
    <GlobalProvider>
      <Router>
        <Route path="/about" exact>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={1200}
              classNames="page"
              onExit={onExit}
              onEntering={onEnter}
              unmountOnExit
            >
              <div className="page">
                <AboutPage />
              </div>
            </CSSTransition>
          )}
        </Route>
        <Route path="/history" exact component={HistoryPage} />
        <Route path="/teams/:id" exact component={TeamPage} />
        <Route path="/" exact>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={1200}
              classNames="page"
              onExit={onExit}
              onEntering={onEnter}
              unmountOnExit
            >
              <div className="page">
                <div className="flex header-top">
                  <Header />
                  <Hero />
                  <Home />
                  <Footer />
                </div>
              </div>
            </CSSTransition>
          )}
        </Route>
      </Router>
    </GlobalProvider>
  );
}

export default App;

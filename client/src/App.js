import React, { useEffect } from "react";
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

import { CSSTransition } from "react-transition-group";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  let t1 = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    t1.from(
      ".content h1",
      3,
      { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      "Start"
    );
    t1.staggerFrom(
      ".middle p",
      1,
      { y: 30, ease: Power3.easeOut, opacity: 0 },
      0.15,
      "Start"
    );

    gsap.from(".latest", {
      duration: 1.5,
      y: "300",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".section-heading h2",

        start: "top center+=100",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".featured", {
      duration: 1.5,
      y: "300",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".heading h2",

        start: "top center+=100",
        toggleActions: "play none none none",
      },
    });
  }, []);

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

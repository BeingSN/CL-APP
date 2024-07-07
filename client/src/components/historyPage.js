import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import history from "../assets/images/ball.jpg";

import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HistoryPage = () => {
  useEffect(() => {
    gsap.from(".footer", {
      duration: 3,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".footer .row",
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete reverse reset",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, []);
  return (
    <>
      <div className="flex header-top">
        <Header />
        <div className="history-page-wrapper">
          <div className="logo-container"></div>

          <div className="container mw content">
            <h1>History</h1>
            <div className="flex row">
              <div className="middle">
                <p>Introduced in 2015 </p>
              </div>
              <div className="sidebar">
                <table>
                  <caption>Pakistan Super League</caption>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryPage;

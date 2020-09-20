import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import history from "../assets/images/ball.jpg";

import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HistoryPage = () => {
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
    // .from(
    //   ".btn-primary",
    //   1,
    //   { y: 20, opacity: 0, ease: Power3.easeOut, delay: 0.4 },
    //   0.35
    // )
    // .from(
    //   ".paragraphAnimation",
    //   1,
    //   { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
    //   0.35
    // );
  }, []);
  return (
    <>
      <div className="flex header-top">
        <Header />
        <div className="history-page-wrapper">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>

          <div className="container mw content">
            <h1>History</h1>
            <div className="flex row">
              <div className="middle">
                <p>
                  Introduced in 1955 as the European Champion Clubs' Cup,
                  commonly known as European Cup, it was initially a straight
                  knockout tournament open only to the champions of Europe's
                  domestic leagues, with its winner reckoned as the European
                  club champion. The competition took on its current name in
                  1992, adding a round-robin group stage and allowing multiple
                  entrants from certain countries.[1] It has since been
                  expanded, and while most of Europe's national leagues can
                  still only enter their champion, the strongest leagues now
                  provide up to four teams. Clubs that finish next-in-line in
                  their national league, having not qualified for the Champions
                  League, are eligible for the second-tier UEFA Europa League
                  competition, and from 2021, teams not eligible for the UEFA
                  Europa League will qualify for a new third-tier competition
                  called the UEFA Europa Conference League.
                </p>
              </div>
              <div className="sidebar">
                <table>
                  <caption>UEFA Champions League</caption>
                  <tbody>
                    <tr>
                      <th>Founded</th>
                      <td>1955</td>
                    </tr>
                    <tr>
                      <th>Current champions</th>
                      <td>Germany Bayern Munich (6th title)</td>
                    </tr>
                    <tr>
                      <th>Most successful club(s)</th>
                      <td>Spain Real Madrid (13 titles)</td>
                    </tr>
                    <tr>
                      <th>Number of teams</th>
                      <td>32 (group stage) 79 (total)</td>
                    </tr>
                  </tbody>
                  <tr>
                    <th>Official website</th>
                    <td>
                      <a href="http://www.uefa.com/uefachampionsleague/">
                        website
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="row">
              <img className="ball" src={history} alt="" />
            </div>
            <div className="row">
              <div className="chart">
                <h4>UEFA Champions League wins by club</h4>
                <ul>
                  <li>Real Madrid 7 (7 finals)</li>
                  <li>Barcelona 4 (5)</li>
                  <li>AC Milan 3 (6)</li>
                  <li>Bayern München 3 (6)</li>
                  <li>Liverpool 2 (4)</li>
                  <li>Manchester United 2 (4)</li>
                  <li>Juventus 1 (6)</li>
                  <li>Ajax 1 (2)</li>
                  <li>Borussia Dortmund 1 (2)</li>
                  <li>Chelsea 1 (2)</li>
                  <li>Internazionale Milano 1 (1)</li>
                  <li>Marseille 1 (1)</li>
                  <li> Porto 1 (1)</li>
                </ul>
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

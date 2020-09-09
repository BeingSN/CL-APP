import React from "react";
import Header from "./header";
import Footer from "./footer";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/about.jpeg";

const AboutPage = () => {
  return (
    <>
      <div className="flex header-top">
        <Header />
        <div className="about-page-wrapper">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="container mw">
            <h1>About</h1>

            <div className="row">
              <div className="title">
                <h2>2020/21 Season</h2>
                <p>
                  Qualifying, which had been due to begin on 23 June, will now
                  kick off on 8 August, with the group stage draw in Athens on 1
                  October and the competition proper getting under way on 20
                  October. The knockout stages will be unchanged from the
                  original schedule.
                </p>
                <p>
                  All qualifying ties will be single-leg matches before
                  reverting to home and away fixtures for the play-offs. The
                  single-leg ties will take place behind closed doors.
                </p>
                The final will take place at Istanbul's Atatürk Olympic Stadium,
                which had been due to stage the 2020 decider. Saint Petersburg,
                the prospective 2021 host, will now stage the 2022 event.
              </div>
            </div>
            <div className="row banner-img">
              <img src={aboutImg} alt="" />
            </div>
            <div className="">
              <h2>Matches:</h2>
              <p>
                <strong>Qualifying</strong>
                <ul>
                  <li>08/08/2020–11/08/2020 Preliminary round</li>
                  <li>18/08/2020–19/08/2020 First qualifying round</li>{" "}
                  <li>25/08/2020–26/08/2020 Second qualifying round</li>{" "}
                  <li>15/09/2020–16/09/2020 Third qualifying round</li>
                  <li>22/09/2020–30/09/2020 Play-offs</li>
                </ul>
                <strong>Group stage</strong>
                <ul>
                  <li>20/10/2020–21/10/2020 Matchday 1</li>
                  <li>27/10/2020–28/10/2020 Matchday 2</li>{" "}
                  <li>03/11/2020–04/11/2020 Matchday 3</li>
                  <li>24/11/2020–25/11/2020 Matchday 4</li>{" "}
                  <li>01/12/2020–02/12/2020 Matchday 5</li>
                  <li>08/12/2020–09/12/2020 Matchday 6</li>
                </ul>
                <strong>Knockout stages</strong>
                <ul>
                  <li>16/02/2021–17/03/2021 Round of 16</li>
                  <li>06/04/2021–14/04/2021 Quarter-finals</li>{" "}
                  <li>27/04/2021–05/05/2021 Semi-finals</li>{" "}
                  <li>29/05/2021 Final</li>
                </ul>
              </p>

              <h2>Trophy</h2>
              <p>
                <li>
                  The current UEFA Champions League trophy stands 73.5cm tall
                  and weighs 7.5kg.
                </li>{" "}
                <li>
                  A rule introduced in 1968/69 stipulates that the cup becomes
                  the property of any club who win the competition five times or
                  three years in a row. The club then start a new cycle from
                  zero. Real Madrid, Ajax, Bayern München, Milan, Liverpool and
                  Barcelona all have a version in their trophy rooms. The rule
                  was changed ahead of 2008/09, with the original trophy
                  remaining with UEFA and the clubs awarded a replica.
                </li>{" "}
                <li>
                  The current trophy is the fifth version of the current design.
                  It was commissioned by UEFA General Secretary Hans Bangerter
                  after Real Madrid were allowed to keep the original in 1967.
                </li>
                <li>
                  It was designed and made in Berne (near UEFA's then
                  headquarters) by Jürg Stadelmann.
                </li>{" "}
                <li>
                  The trophy took 340 hours to make, with Stadelmann meeting a
                  strict deadline. "It had to be finished before 28 March,"
                  Stadelmann added, "because I was getting married and taking my
                  wife on a ten-day boat trip to Los Angeles. I did the finer
                  work, then it was finished off by the engraver, Fred
                  Bänninger. On time, I am glad to say."
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState("[]");

  useEffect(() => {
    // getfixtures();
    fetch("/api/v1/fixtures")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFixtures(res.data.matches);
        console.log(fixtures);
      })
      .catch((res) => {
        console.log("error", res);
      });
  }, []);

  return (
    <>
      <div className="flex header-top">
        <Header />
        <div className="fixtures-page-wrapper">
          <div className="logo-container"></div>
          <div className="container mw">
            <h2>Final</h2>
            <div className="match-row final">
              {fixtures.length > 2
                ? fixtures
                    .filter((fixture) => fixture.stage === "FINAL")
                    .map((filteredMatch) => (
                      <div className="match-box">
                        <div className="match-box-team1">
                          {filteredMatch.homeTeam.name}
                        </div>
                        <div className="score">
                          {filteredMatch.score.fullTime.homeTeam} {"-"}
                          {filteredMatch.score.fullTime.awayTeam}
                        </div>
                        <div className="match-box-team2">
                          {filteredMatch.awayTeam.name}
                        </div>
                      </div>
                    ))
                : "loading"}
            </div>
            <hr />
            <h2>Semi-finals</h2>
            <div className="match-row semi-finals">
              {fixtures.length > 2
                ? fixtures
                    .filter((fixture) => fixture.stage === "SEMI_FINALS")
                    .map((filteredMatch) => (
                      <div className="match-box">
                        <div className="match-box-team1">
                          {filteredMatch.homeTeam.name}
                        </div>
                        <div className="score">
                          {filteredMatch.score.fullTime.homeTeam} {" - "}
                          {filteredMatch.score.fullTime.awayTeam}
                        </div>
                        <div className="match-box-team2">
                          {filteredMatch.awayTeam.name}
                        </div>
                      </div>
                    ))
                : "load"}
            </div>
            <hr />
            <h2>Quarter-finals</h2>
            <div className="match-row quarter-finals">
              {fixtures.length > 2
                ? fixtures
                    .filter((fixture) => fixture.stage === "QUARTER_FINALS")
                    .map((filteredMatch) => (
                      <div className="match-box">
                        <div className="match-box-team1">
                          {filteredMatch.homeTeam.name}
                        </div>
                        <div className="score">
                          {filteredMatch.score.fullTime.homeTeam}
                          {" - "}
                          {filteredMatch.score.fullTime.awayTeam}
                        </div>
                        <div className="match-box-team2">
                          {filteredMatch.awayTeam.name}
                        </div>
                      </div>
                    ))
                : "load"}
            </div>
            <hr />
            <h2>Round of 16</h2>
            <div className="match-row round-16">
              {fixtures.length > 2
                ? fixtures
                    .filter((fixture) => fixture.stage === "ROUND_OF_16")
                    .map((filteredMatch) => (
                      <div className="match-box">
                        <div className="match-box-team1">
                          {filteredMatch.homeTeam.name}
                        </div>
                        <div className="score">
                          {filteredMatch.score.fullTime.homeTeam}
                          {" - "}
                          {filteredMatch.score.fullTime.awayTeam}
                        </div>
                        <div className="match-box-team2">
                          {filteredMatch.awayTeam.name}
                        </div>
                      </div>
                    ))
                : "load"}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fixtures;

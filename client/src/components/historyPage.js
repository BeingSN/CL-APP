import React from "react";
import Header from "./header";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const HistoryPage = () => {
  return (
    <div className="flex header-top">
      <Header />
      <div className="history-page-wrapper">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>

        <div className="container content">
          <div className="flex row">
            <div className="sidebar">
              <a href="http://www.uefa.com/uefachampionsleague/">
                official website
              </a>
              Current champions Germany Bayern Munich (6th title) Most
              successful club(s) Spain Real Madrid (13 titles) Founded 1955; 65
              years ago (rebranded in 1992) Region Europe (UEFA) Number of teams
              32 (group stage) 79 (total)
            </div>
            <div className="main">
              <p>
                Introduced in 1955 as the European Champion Clubs' Cup, commonly
                known as European Cup, it was initially a straight knockout
                tournament open only to the champions of Europe's domestic
                leagues, with its winner reckoned as the European club champion.
                The competition took on its current name in 1992, adding a
                round-robin group stage and allowing multiple entrants from
                certain countries.[1] It has since been expanded, and while most
                of Europe's national leagues can still only enter their
                champion, the strongest leagues now provide up to four teams.
                Clubs that finish next-in-line in their national league, having
                not qualified for the Champions League, are eligible for the
                second-tier UEFA Europa League competition, and from 2021, teams
                not eligible for the UEFA Europa League will qualify for a new
                third-tier competition called the UEFA Europa Conference League.
              </p>
            </div>
          </div>
          UEFA Champions League wins by club Barcelona's five European Cup wins
          Real Madrid 7 (7 finals) Barcelona 4 (5) AC Milan 3 (6) Bayern München
          3 (6) Liverpool 2 (4) Manchester United 2 (4) Juventus 1 (6) Ajax 1
          (2) Borussia Dortmund 1 (2) Chelsea 1 (2) Internazionale Milano 1 (1)
          Marseille 1 (1) Porto 1 (1)
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;

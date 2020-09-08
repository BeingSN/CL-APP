import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";

const TeamPage = ({ match, location }) => {
  const {
    params: { id },
  } = match;

  const [team, setTeam] = useState("");

  useEffect(() => {
    // getstandings();
    fetch(`/api/v1/teams/${match.params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTeam(res.data);
      })
      .catch((res) => {
        console.log("error", res);
      });
  }, []);

  if (team) {
    return (
      <>
        <div className="flex header-top">
          <Header />
          <div className="team-page-wrapper">
            <div className="logo-container">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            <div className="container mw">
              <div className="row banner">
                <div className="title">
                  <div className="labels">
                    <span>{team.shortName}</span>
                    <span>{team.tla}</span>
                    <span>
                      <a src={team.website}>{team.website}</a>
                    </span>
                    <span>{team.founded}</span>
                  </div>
                  <h1>{team.name}</h1>
                </div>
                <img className="emblem" src={team.crestUrl} alt="" />
              </div>

              <div className="row-competitions">
                <h4 className="label"> Active competitions: </h4>
                <hr />

                {team.activeCompetitions.map((competition) => (
                  <li>{competition.name}</li>
                ))}
              </div>
              <div className="row-venue">
                <h4 className="label">Venue: </h4>
                <hr />
                {team.venue}
              </div>
              <div className="row-squad">
                <h4 className="label">Squad:</h4>
                <hr />
              </div>
              <div>
                {team.squad.map((player) => (
                  <div>
                    {player.name} | {player.position}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return <div>"loading"</div>;
  }
};

export default TeamPage;

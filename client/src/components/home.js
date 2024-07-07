import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Standings from "./standings";
import Image from "../assets/images/winner.jpg";
import bgVid from "../assets/videos/bg1.mp4";
import Prediction from "./prediction";
import { AddPrediction } from "./addPrediction";
import Statistics from "./statistics";
import Featured from "./featured";
import Latest from "./latest";

const recentMatch = {
  team1: "Paris",
  team2: "Bayern",
  score1: 0,
  score2: 1,
  date: "23 Aug 2020 ",
};

const Home = () => {
  const [query, setQuery] = useState("");
  const [winnerInfo, setWinnerInfo] = useState(null);
  const [render, setRender] = useState(false);

  const url =
    query &&
    `http://api.football-data.org/v2/competitions/2001/standings?standingType=TOTAL`;

  const { status, data, error } = useFetch(url);

  const handleClick = () => {
    setQuery("2001");
    console.log(status, data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setWinnerInfo({
        lqScore: 161,
        kkScore: 140,
        message: "Lahore Qalandar Won the Match",
      });
    }, 11000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const articles = data?.standings;

  const todayDate = new Date().toLocaleString();
  console.log(todayDate);

  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  return (
    <div className="main">
      <div className="container">
        <div className="col-right">
          <section className="rel">
            <div className="bg-vid">
              <div className="sticky">
                <video
                  autoPlay
                  muted
                  loop
                  src={
                    "https://videos.pexels.com/video-files/11755921/11755921-uhd_2732_1440_60fps.mp4"
                  }
                ></video>
              </div>
            </div>
            <div className="match-info">
              <div className="sticky flex-col col-30">
                <div className="p-1">
                  <h3>Date: {todayDate}</h3>
                  <div className="prediction-container">
                    <Prediction />
                    <AddPrediction
                      score1={score1}
                      setScore1={setScore1}
                      score2={score2}
                      setScore2={setScore2}
                      render={render}
                      setRender={setRender}
                    />
                  </div>
                  <div className="winner">
                    {winnerInfo && score1 && score2 && render && (
                      <>
                        <h4>Lahore Qalandar Score: {winnerInfo.lqScore}</h4>
                        <h4>Karachi Kings Score: {winnerInfo.kkScore}</h4>
                        <h2>{winnerInfo.message}</h2>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="standings-wrapper col-70">
                <Standings />
              </div>
            </div>
          </section>
          <Latest />
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default Home;

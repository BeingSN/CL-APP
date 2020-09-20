import React, { useEffect } from "react";

const data = {
  playerName: "Neuer",
  position: "goalkeeper",
  team: "Bayern",
  saves: "3",
  passing: "85%",
};

const Featured = () => {
  return (
    <section className="featured">
      <div className="featured-container-player row">
        <div className="heading">
          <h2>Featured player</h2>
          <p className="name">{data.playerName}</p>
          <p>
            {data.position} | {data.team}
          </p>
        </div>

        <div className="img-bg img-bg-player">
          <div className="content-box">
            <div>
              <div className="label">Saves</div>
              <div className="value">{data.saves}</div>
            </div>
            <div>
              <div className="label">Passing Accuracy</div>
              <div className="value">{data.passing}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-container-goal row">
        <div className="heading">
          <h2>Featured goal</h2>
          <p className="name">Marcel Sabitzer</p>
          <p> Leipzig 2-1 Zenit</p>
        </div>

        <div className="img-bg img-bg-goal">
          <div className="content-box">
            <div>
              <div className="label">23/10/19:</div>
              <div className="value"> Matchday 3</div>
            </div>
            <div>
              <div className="label"></div>
              <div className="value"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-container-goal motm row">
        <div className="heading">
          <h2>Man of the Match</h2>
          <p className="name">Kingsley Coman</p>
          <p>final match against Paris</p>
        </div>

        <div className="img-bg img-bg-motm">
          <div className="content-box">
            <div>
              <div className="label">Goal that won the game</div>
              <div className="value"> Final match</div>
            </div>
            <div>
              <div className="label"></div>
              <div className="value"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;

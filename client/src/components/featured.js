import React, { useEffect } from "react";

const data = {
  playerName: "Shaheen Afridi",
  position: "All Rounder",
  team: "Lahore Qalandar",
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
        <div className="img-bg img-bg-goal"></div>
      </div>
      <div className="featured-container-goal motm row">
        <div className="img-bg img-bg-motm"></div>
      </div>
    </section>
  );
};

export default Featured;

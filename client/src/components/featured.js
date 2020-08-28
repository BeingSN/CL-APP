import React from "react";

const data = {
  playerName: "Neuer",
  position: "goalkeeper",
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
          <p>{data.position}</p>
        </div>

        <div className="img-bg">
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
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Featured;

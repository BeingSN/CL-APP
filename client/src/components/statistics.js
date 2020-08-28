import React from "react";

const Statistics = () => {
  return (
    <>
      <div className="stats-container">
        <div className="container columns-wrapper">
          <h2>Numbers</h2>
          <div className="col-25 stats-item">
            <div className="stats-item-wrap">
              <div className="stats-label">Top scorer</div>
              <div className="stats-value font-sm">Robert Lewandowski</div>

              <div>15 goals</div>
            </div>
          </div>
          <div className="col-25 stats-item">
            <div className="stats-item-wrap">
              <div className="stats-label">Goals per match</div>
              <div className="stats-value">3.24</div>
            </div>
          </div>
          <div className="col-25 stats-item">
            <div className="stats-item-wrap">
              <div className="stats-label">Total goals</div>
              <div className="stats-value">386</div>
            </div>
          </div>
          <div className="col-25 stats-item">
            <div className="stats-item-wrap">
              <div className="stats-label">Matches played</div>
              <div className="stats-value">119</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;

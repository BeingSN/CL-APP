import React from "react";

const Statistics = () => {
  return (
    <>
      <div className="stats-container">
        <div className="container columns-wrapper">
          <h2>Pakistan Super League</h2>
          <div className="col-25 stats-item">
            <div className="stats-item-wrap">
              <div className="stats-label">Top scorer</div>
              <div className="stats-value font-sm">Chris Gayle</div>

              <div>1090 Runs</div>
            </div>
          </div>
          <div className="col-25 stats-item">
            <div className="stats-item-wrap">
              <div className="stats-label">Strike Rate</div>
              <div className="stats-value">161.3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;

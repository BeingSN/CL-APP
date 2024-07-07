import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalContext";

export const AddPrediction = ({
  score1,
  setScore1,
  score2,
  setScore2,
  setRender,
}) => {
  const { addPrediction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newPrediction = {
      score1: +score1,
      score2: +score2,
    };

    addPrediction(newPrediction);
    setRender(true);
  };

  return (
    <>
      <span className="sidenote">*update: match is completed</span>
      <form className="prediction-form" onSubmit={onSubmit}>
        <div className="form-control score-form">
          <label htmlFor="amount">Lahore Qalandar</label>
          <input
            type="number"
            value={score1}
            onChange={(e) => setScore1(e.target.value)}
            placeholder="-"
          />
        </div>
        <span className="colon">:</span>
        <div className="form-control score-form">
          <label htmlFor="amount">Karachi Kings</label>
          <input
            type="number"
            value={score2}
            onChange={(e) => setScore2(e.target.value)}
            placeholder="-"
          />
        </div>
        <button className="btn">Add my score</button>
      </form>
    </>
  );
};

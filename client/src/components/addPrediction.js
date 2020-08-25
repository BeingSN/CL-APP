import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalContext";

export const AddPrediction = () => {
  const [text, setText] = useState("");
  const [score1, setScore1] = useState(0);

  const { addPrediction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newPrediction = {
      text,
      score1: +score1,
    };

    addPrediction(newPrediction);
  };

  return (
    <>
      <h3>Add new Prediction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={score1}
            onChange={(e) => setScore1(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Prediction</button>
      </form>
    </>
  );
};

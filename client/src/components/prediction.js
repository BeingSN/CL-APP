import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalContext";

const Prediction = () => {
  const { predictions, getPredictions } = useContext(GlobalContext);

  useEffect(() => {
    getPredictions();
  }, []);
  return (
    <div>
      <h4>Guess the score:</h4>
      {predictions.map((p) => (
        <div key={p.id}>{p.text}</div>
      ))}
    </div>
  );
};

export default Prediction;

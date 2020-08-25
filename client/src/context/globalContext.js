import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  predictions: [],

  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  async function getPredictions() {
    try {
      const res = await axios.get("/api/v1/predictions");
      //   res.data.data
      dispatch({
        type: "GET_PREDICTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "PREDICTION_ERROR",
        payload: err.response.data.error,
      });
      //   console.log(err);
    }
  }

  async function deletePrediction(id) {
    try {
      await axios.delete(`/api/v1/predictions/${id}`);

      dispatch({
        type: "DELETE_PREDICTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "PREDICTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addPrediction(prediction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/predictions", prediction, config);

      dispatch({
        type: "ADD_PREDICTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "PREDICTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        predictions: state.predictions,
        error: state.error,
        loading: state.loading,
        getPredictions,
        deletePrediction,
        addPrediction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

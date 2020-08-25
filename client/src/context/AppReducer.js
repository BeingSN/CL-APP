export default (state, action) => {
  switch (action.type) {
    case "GET_PREDICTIONS":
      return {
        ...state,
        loading: false,
        predictions: action.payload,
      };
    case "DELETE_PREDICTION":
      return {
        ...state,
        predictions: state.predictions.filter(
          (prediction) => prediction.id !== action.payload
        ),
      };
    case "ADD_PREDICTION":
      return {
        ...state,
        predictions: [...state.predictions, action.payload],
      };
    case "PREDICTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

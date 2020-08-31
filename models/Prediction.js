const mongoose = require("mongoose");

const PredictionSchema = new mongoose.Schema({
  score1: {
    type: Number,
    required: [true, "Please add a number"],
  },
  score2: {
    type: Number,
    required: [true, "Please add a number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Prediction", PredictionSchema);

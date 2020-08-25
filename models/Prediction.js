const mongoose = require("mongoose");

const PredictionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  score1: {
    type: Number,
    required: [true, "Please add a number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Prediction", PredictionSchema);

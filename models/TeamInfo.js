const mongoose = require("mongoose");

const TeamInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a name"],
  },
  shortName: {
    type: String,
    trim: true,
    required: [true, "Please add a short name"],
  },
  crestUrl: {
    type: String,
    trim: true,
    required: [true, "Please add a url"],
  },
  venue: {
    type: String,
    trim: true,
    required: [true, "Please add a venue"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  squad: [
    {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      position: {
        type: String,
      },
      dob: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("TeamInfo", TeamInfoSchema);

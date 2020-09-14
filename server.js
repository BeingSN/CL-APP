const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const fetch = require("node-fetch");

dotenv.config({ path: "./config/config.env" });
connectDB();
const predictions = require("./routes/predictions");
const teamInfo = require("./routes/teamInfo");
const fixtures = require("./routes/fixtures");

const app = express();

app.use(express.json());

const url =
  "http://api.football-data.org/v2/competitions/2001/standings?standingType=TOTAL&season=2019";
const headers = {
  "Content-Type": "application/json",
  "X-Auth-Token": process.env.API_TOKEN,
};
const fixturesUrl =
  "http://api.football-data.org/v2/competitions/2001/matches?season=2019&stage=ROUND_OF_16,QUARTER_FINALS,SEMI_FINALS,FINAL";

app.use("/api/v1/predictions", predictions);

app.get("/api/v1/teams/:id", (req, res) => {
  let id = req.params.id;
  console.log(req.params.id);
  fetch(`http://api.football-data.org/v2/teams/${id}`, {
    method: "GET",
    headers: headers,
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      res.send({ data });
    });

  // let team = data.filter((t) => t.id === id);
  // return res.json({ message: "team is", data: team });
});

app.get("/api/v1/standings", (req, res) => {
  fetch(url, { method: "GET", headers: headers })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      res.send({ data });
    });
});

app.get("/api/v1/fixtures", (req, res) => {
  fetch(fixturesUrl, { method: "GET", headers: headers })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      res.send({ data });
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

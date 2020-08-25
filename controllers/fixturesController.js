// const Fixture = require("../models/Fixture");
// const fetch = require("node-fetch");

// const url =
//   "http://api.football-data.org/v2/competitions/2001/standings?standingType=TOTAL";
// const headers = {
//   "Content-Type": "application/json",
//   "X-Auth-Token": "44caba9c4c56410185f1561dfed18948",
// };

// exports.getFixtures = async (req, res, next) => {
//   // const fixtures = await Standing.find();
//   try {
//     const resp = await fetch(url, { method: "GET", headers: headers });

//     (resp) => {
//       Fixture.insertMany(resp.data);
//       return res.send(resp.data);
//     };
//   } catch (err) {
//     return res.sendStatus(500).json({
//       success: false,
//       error: "there was an error",
//     });
//   }
// };

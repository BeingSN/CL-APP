import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";

// import { response } from "express";

const Standings = () => {
  const [standings, setStandings] = useState("[]");

  useEffect(() => {
    // getstandings();
    fetch("/api/v1/standings")
      .then((res) => {
        console.log("res1", res);
        return res.json();
      })
      .then((res) => {
        setStandings(res);
      })
      .catch((res) => {
        console.log("error", res);
      });
  }, []);

  return (
    <>
      <div className="s-container">
        <h4 className="title">
          Standings <span className="title-sub">2019 - 2020 season</span>
        </h4>
        <hr></hr>
        {standings.data
          ? standings.data.standings.map((s, index) => (
              <table key={index} className="table-standings">
                <thead>
                  <tr className="s-labels">
                    <th className="s-icon table-col-10"></th>
                    <th className="s-group">{s.group.replace(/_/g, " ")}</th>
                    <th className="s-played table-col-10">Played</th>
                    <th className="s-won table-col-10">Won</th>
                    <th className="s-lost table-col-10">Lost</th>
                    <th className="s-points table-col-10">Points</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="s-icon table-col-10">
                      <img src={s.table[0].team.crestUrl} />
                    </td>
                    <td className="s-teamname">
                      <Link to={`/teams/${s.table[0].team.id}`}>
                        {s.table[0].team.name}
                      </Link>
                    </td>
                    <td className="s-played table-col-10">
                      {s.table[0].playedGames}
                    </td>
                    <td className="s-won table-col-10">{s.table[0].won}</td>
                    <td className="s-lost table-col-10">{s.table[0].lost}</td>
                    <td className="s-points table-col-10">
                      {s.table[0].points}
                    </td>
                  </tr>
                  <tr>
                    <td className="s-icon table-col-10">
                      <img src={s.table[1].team.crestUrl} />
                    </td>
                    <td className="s-teamname">
                      <Link to={`/teams/${s.table[1].team.id}`}>
                        {s.table[1].team.name}
                      </Link>
                    </td>
                    <td className="s-played table-col-10">
                      {s.table[1].playedGames}
                    </td>
                    <td className="s-won table-col-10">{s.table[1].won}</td>
                    <td className="s-lost table-col-10">{s.table[1].lost}</td>
                    <td className="s-points table-col-10">
                      {s.table[1].points}
                    </td>
                  </tr>
                  <tr>
                    <td className="s-icon table-col-10">
                      <img src={s.table[2].team.crestUrl} />
                    </td>
                    <td className="s-teamname">
                      <Link to={`/teams/${s.table[2].team.id}`}>
                        {s.table[2].team.name}
                      </Link>
                    </td>
                    <td className="s-played table-col-10">
                      {s.table[2].playedGames}
                    </td>
                    <td className="s-won table-col-10">{s.table[2].won}</td>
                    <td className="s-lost table-col-10">{s.table[2].lost}</td>
                    <td className="s-points table-col-10">
                      {s.table[2].points}
                    </td>
                  </tr>
                  <tr>
                    <td className="s-icon table-col-10">
                      <img src={s.table[3].team.crestUrl} />
                    </td>
                    <td className="s-teamname">
                      <Link to={`/teams/${s.table[3].team.id}`}>
                        {s.table[3].team.name}
                      </Link>
                    </td>
                    <td className="s-played table-column-10">
                      {s.table[3].playedGames}
                    </td>
                    <td className="s-won table-col-10">{s.table[3].won}</td>
                    <td className="s-lost table-col-10">{s.table[3].lost}</td>
                    <td className="s-points table-column-10">
                      {s.table[3].points}
                    </td>
                  </tr>
                </tbody>
              </table>
            ))
          : "loading..."}
      </div>
    </>
  );
};

export default Standings;

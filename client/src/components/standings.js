import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Standings = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const staticData = {
      data: {
        standings: [
          {
            group: "GROUP_A",
            table: [
              {
                team: {
                  id: 1,
                  name: "Karachi Kings",
                  crestUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKNsHV_JAyHX_yNcLgc8lgxUM7rdmtRaU5Q&s",
                },
                playedGames: 10,
                won: 7,
                lost: 3,
                points: 21,
              },
              {
                team: {
                  id: 2,
                  name: "Lahore Qalandar",
                  crestUrl:
                    "https://grassrootscricket.pk/wp-content/uploads/2024/02/grassrootscricket-lahore-qalandars-what-went-wrong.png",
                },
                playedGames: 10,
                won: 6,
                lost: 4,
                points: 18,
              },
              {
                team: {
                  id: 3,
                  name: "Islamabad United",
                  crestUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMW9op-RciWExIJtexn7y_Xwg0QEJHwQmuQ&s",
                },
                playedGames: 10,
                won: 5,
                lost: 5,
                points: 15,
              },
              {
                team: {
                  id: 4,
                  name: "Peshawar Zalmi",
                  crestUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXrxN8PJn-DGP_8K0HPQRoPcRL0F9iuJzkQ&s",
                },
                playedGames: 10,
                won: 4,
                lost: 6,
                points: 12,
              },
            ],
          },
          // Add more groups as needed
        ],
      },
    };
    setStandings(staticData);
  }, []);

  return (
    <div className="s-container">
      <h4 className="title">
        Standings <span className="title-sub">2019 - 2020 season</span>
      </h4>
      <hr />
      {standings?.data
        ? standings?.data?.standings?.map((s, index) => (
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
                {s.table.map((team, teamIndex) => (
                  <tr key={teamIndex}>
                    <td className="s-icon table-col-10">
                      <img
                        style={{ height: "180px", width: "300px" }}
                        src={team.team.crestUrl}
                        alt={`${team.team.name} crest`}
                      />
                    </td>
                    <td className="s-teamname">
                      <Link to={`/teams/${team.team.id}`}>
                        {team.team.name}
                      </Link>
                    </td>
                    <td className="s-played table-col-10">
                      {team.playedGames}
                    </td>
                    <td className="s-won table-col-10">{team.won}</td>
                    <td className="s-lost table-col-10">{team.lost}</td>
                    <td className="s-points table-col-10">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))
        : "loading..."}
    </div>
  );
};

export default Standings;

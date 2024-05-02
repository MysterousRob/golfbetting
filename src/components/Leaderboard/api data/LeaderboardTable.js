import React from "react";
import '../../../assets/css/GBS.css'

function LeaderboardOutline(){
    return(
        <div className="leaderboard">
      <h2>Leaderboard:</h2>
      <table className="container2">
        <thead className="container3">
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Score</th>
            <th>Odds</th>
          </tr>
        </thead>
        <tbody className="container4">
        <tr>
              <td>index</td>
              <td>player name</td>
              <td>player score</td>
              <td>Odds</td>
            </tr>
          {/* {players.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
              <td>{player.odds}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
    )
}

export default LeaderboardOutline;
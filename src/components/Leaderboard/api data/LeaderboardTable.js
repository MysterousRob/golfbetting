import React from "react";
import '../../../assets/css/GBS.css';
//image icon imports
import { MdLeaderboard } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { MdDriveFileRenameOutline } from "react-icons/md";



function LeaderboardOutline(){
    return(
        <div className="NEO">
            <h2>Leaderboard:</h2>
            <div className="leaderboard">
                  
                <table className="container2">
            <thead className="container3">
              <tr className="container-box">
              <th className="text-th">
                Rank <MdLeaderboard className="icon" />
              </th>
              <th className="text-th">
                Player Name <MdDriveFileRenameOutline className="icon" />
              </th>
              <th className="text-th">
                Score <GrScorecard className="icon" />
              </th>
              <th className="text-th">
                Odds <TbSquareRoundedPercentage className="icon" />
              </th>
              </tr>
            </thead>
            <tbody className="container4">
            <tr className="container-box">
                <td className="text-tb">
                    index
                </td>
                <td className="text-tb">
                    player name
                </td>
                <td className="text-tb">
                    player score
                </td>
                <td className="text-tb">
                    Odds
                </td>
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
        </div>
    )
}

export default LeaderboardOutline;
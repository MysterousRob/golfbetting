import React, { useState } from 'react';

const PlayerManager = () => {
  // State to store the list of players
  const [players, setPlayers] = useState([]);

  // Function to add a new player
  const addPlayer = (name) => {
    setPlayers([...players, name]);
  };

  // Function to delete a player
  const deletePlayer = (index) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    setPlayers(updatedPlayers);
  };

  return (
    <div>
      <h2>Player Manager</h2>
      {/* Input field to add new player */}
      <input
        type="text"
        placeholder="Enter player name"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addPlayer(e.target.value);
            e.target.value = ''; // Clear input field after adding
          }
        }}
      />
      {/* List of players */}
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player}
            <button onClick={() => deletePlayer(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerManager;


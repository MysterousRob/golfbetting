import React from 'react';
import ReactDOM  from 'react';
import './App.css';
import './index.css';
import Competiton from './tournaments/tournaments';

//function NewPage


function App() {
  return (
    <div className='in-body'>
      <header className='App-header'>
        <h1>Golf Betting</h1>
      </header>
        <button>Betting Tips</button> 
        <button>Live Odds</button>
        <button>Bets of the Week</button>
    </div> 
  );
}

export default App;

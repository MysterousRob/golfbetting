import React from 'react';
import './App.css';
import './index.css';
import Competiton from './tournaments/tournaments';
//function NewPage

function App() {
  return (
    <div className='in-body'>
      <header className='App-header'>
        <h1 className='h1'>Golf Betting</h1>
      <div className='nav'>
        <button onClick= {() => {window.location.href = './App-home.js-home'}}>
          <span>
            Home
          </span>
        </button>
        <button onClick= {() =>  {window.location.href = './golfbettingtips.js'}}>
          <span>
            Betting Tips
          </span>
        </button> 
        <button onClick= {() =>  {window.location.href = './golfbettingtips.js'}}>
          <span>
            Live Odds
          </span>
        </button>
        <button onClick= {() =>   {window.location.href = './golfbettingtips.js'}}>
          <span>
            Bets of the Week
          </span>
        </button>
        <button href="#" onClick= {() => console.log('Betting Sites button clicked')}>
          <span>
            Betting Sites
          </span>
        </button>
      </div>  
      </header>
      <div className='tips'>
        <h1>Home</h1>
      </div>
    </div> 
  );
}


export default App;


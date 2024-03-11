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
        {/*need to figgure out why my nav buttons arent working as i want them to nav to individual files */}
        <button onClick= {() => {window.location.href = './App-home.js-home'}}>
          <span>
            Home
          </span>
        </button>
        <button onClick= {() =>  {window.location.href = './golfbettingtips.js-home'}}>
          <span>
            Betting Tips
          </span>
        </button> 
        <button onClick= {() =>  {window.location.href = './livegolfodds.js'}}>
          <span>
            Live Odds
          </span>
        </button>
        <button onClick= {() =>   {window.location.href = './Betsoftheweek.js'}}>
          <span>
            Bets of the Week
          </span>
        </button>
        <button href="#" onClick= {() =>   {window.location.href = './golfbettingsites.js'}}>
          <span>
            Betting Sites
          </span>
        </button>
      </div>  
      </header>
      <div className='tips'>
        <h1>Live Golf Odds</h1>
      </div>
    </div> 
  );
}


export default App;


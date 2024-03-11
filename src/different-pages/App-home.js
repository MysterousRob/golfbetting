import React from 'react';
import './App.css';
import './index.css';
import Competiton from './tournaments/tournaments';
//function NewPage



function Home() {
  
  return (
    <div className='in-body'>
      <header className='App-header'>
        <h1 className='h1'>
          Golf Betting
        </h1>
      <div className='nav'>
        {/*need to figgure out why my nav buttons arent working as i want them to nav to individual files */}
        <button onClick= {}>
          <span>
            Home
          </span>
        </button>
        <button onClick= {() => {window.location.href = './golfbettingtips.js-betingtips'}}>
          <span>
            Betting Tips
          </span>
        </button>
        <button onClick= {() => {window.location.href = './livegolfodds.js-LiveOdds'}}>
          <span>
            Live Odds
          </span>
        </button>
        <button onClick= {() => {window.location.href = './Betsoftheweek.jsBetsoftheweek'}}>
          <span>
            Bets of the Week
          </span>
        </button>
        <button onClick= {() => {window.location.href = './golfbettingsites.js-bettingsites'}}>
          <span>
            Betting Sites
          </span>
        </button>
      </div>  
      </header>
      <div className='tips'>
        <h1>
          Home
        </h1>
      </div>
    </div> 
  );

}


export default Home;


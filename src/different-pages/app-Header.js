import React from 'react';

import './css/App-header.css';
import Competiton from './tournaments/tournaments';
import { navOptions } from '../nav/nav';
import '../nav/nav';
//function NewPage

function Header() {
  
  return (
    <div className='in-body'>
      <header className='App-header'>
        <h1 className='h1'>
          Golf Betting
        </h1>
      <div className='nav'>
        {/*need to figgure out why my nav buttons arent working as i want them to nav to individual files */}
        <button>
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
    </div> 
  );

}


export default Header;


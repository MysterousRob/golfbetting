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
        <button href="./C:\Users\rober\OneDrive\Desktop\Golf-betting\golfbetting\src\App-home.js-home" onClick= {() => console.log('Home button clicked')}><span>Home</span></button>
        <button href="C:\Users\rober\OneDrive\Desktop\Golf-betting\golfbetting\src\golfbettingtips.js" onClick= {() => console.log('Betting Tips button clicked')}><span>Betting Tips</span></button> 
        <button href="C:\Users\rober\OneDrive\Desktop\Golf-betting\golfbetting\src\livegolfodds.js" onClick= {() => console.log('Live Odds button clicked')}><span>Live Odds</span></button>
        <button href="C:\Users\rober\OneDrive\Desktop\Golf-betting\golfbetting\src\Betsoftheweek.js" onClick= {() => console.log('Bets of the Week button clicked')}><span>Bets of the Week</span></button>
        <button href="#" onClick= {() => console.log('Betting Sites button clicked')}><span>Betting Sites</span></button>
      </div>  
      </header>
      <div className='tips'>
        <h1>Different Golf Betting Websites</h1>
      </div>
    </div> 
  );
}


export default App;


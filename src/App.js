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
        <button href="#" onClick= {() => console.log('Home button clicked')}><span>Home</span></button>
        <button href="#" onClick= {() => console.log('Betting Tips button clicked')}><span>Betting Tips</span></button> 
        <button href="#" onClick= {() => console.log('Live Odds button clicked')}><span>Live Odds</span></button>
        <button href="#" onClick= {() => console.log('Bets of the Week button clicked')}><span>Bets of the Week</span></button>
      </div>  
      </header>
      <div>
        <Competiton />
      </div>
    </div> 
  );
}

export default App;

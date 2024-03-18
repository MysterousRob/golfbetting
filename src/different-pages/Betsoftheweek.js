import React from 'react';
import './css/app.css';
import './css/index.css';
import Competiton from './tournaments/tournaments';
import Header from './app-Header';
//function NewPage

function Week() {
  return (
    <div>
      <Header />
      <div className='tips'>
        <h1>Golf Bets of the week</h1>
      </div>
    </div> 
  );
}


export default Week;


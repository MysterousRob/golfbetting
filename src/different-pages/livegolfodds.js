import React from 'react';
import './App.css';
import './index.css';
import Header from './app-Header';
import PlayerManager from './Liveoods/playermanager';
import MultiVariableSlider from './Liveoods/sliders';
//function NewPage

function LiveOdds() {
  return (
    <div>
      <div>
        <Header />
      </div>
        <div className='slider'>
          <MultiVariableSlider />
        </div>
    </div>
  );
}


export default LiveOdds;


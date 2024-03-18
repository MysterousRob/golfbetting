import React from 'react';
import './css/app.css';
import './css/index.css';
import Header from './app-Header';
import MultiVariableSlider from './Liveoods/sliders';
//function NewPage

function LiveOdds() {
  return (
    <div>
      <div>
        <Header />
      </div>
        <div className='slider'>
          {/* <MultiVariableSlider stats={[]}/> */}
        </div>
    </div>
  );
}


export default LiveOdds;


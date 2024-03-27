import React from 'react';
import './css/app.css';
import './css/index.css';
import Header from './app-Header';
import MultiVariableSlider from './Liveoods/sliders';
import Footer from './forhomepg/footer';

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
      <Footer />
    </div>
  );
}


export default LiveOdds;


import React from 'react';
import './../assets/css/app.css';
import './../assets/css/index.css';
import Header from './../components/Header';
import MultiVariableSlider from './../components/sliders';
import Footer from '../components/footer';

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
      <Footer />
    </div>
  );
}


export default LiveOdds;


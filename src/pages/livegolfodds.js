import React from 'react';
import './../assets/css/app.css';
import './../assets/css/index.css';
import Header from './../components/Header';
import MultiVariableSlider from './../components/sliders';
import Footer from '../components/footer';
import fetchLeaderboard from '../components/api data/Leaderboard';

//function NewPage

function LiveOdds() {

  console.log('fetchLeaderboard in livegolfodds.js:', JSON.stringify(fetchLeaderboard()))

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


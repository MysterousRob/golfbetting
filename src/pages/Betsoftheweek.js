import React from 'react';
import './../assets/css/app.css';
import './../assets/css/index.css';
import Competiton from './tournaments/tournaments';
import Header from './../components/Header';
import Footer from '../components/footer';
//function NewPage

function Week() {
  return (
    <div>
      <Header />
      <div className='tips'>
        <h1>Golf Bets of the week</h1>
      </div>
      <Footer />
    </div> 
  );
}


export default Week;


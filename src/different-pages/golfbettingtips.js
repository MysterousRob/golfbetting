import React from 'react';
import './css/app.css';
import Header from './app-Header.js';
import List1 from './golf-betting-tips/List1.js';
import Footer from './forhomepg/footer.js';
//function NewPage

function Tips() {
  return (
    <div>
      <Header />
      <div className='tips'>
        <h1 className='golf-tips'>Some things to consider when betting.</h1>
        <p className='p1'>
        Betting on golf involves understanding various bet types such 
        as outright winners, each-way bets, and head-to-head matchups, 
        all requiring research on player form, course conditions, and 
        odds analysis. After setting a budget, wagers can be placed with 
        reputable sportsbooks, with options to follow the tournament's 
        progress and potentially cash out bets before its conclusion. 
        Enjoyment of golf betting is enhanced by responsible gambling 
        practices, emphasizing the importance of only wagering what one 
        can afford to lose.
        </p>
      <List1 />
      </div>
      <Footer />
    </div> 
  );
}


export default Tips;


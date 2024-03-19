import React from 'react';
import './css/app.css';
import Header from './app-Header.js';
import List1 from './golf-betting-tips/List1.js';
//function NewPage

function Tips() {
  return (
    <div>
      <Header />
      <div className='tips'>
        <h1 className='golf-tips'>Some things to consider when betting.</h1>
        <p className='p1'>There are a few things to consider when betting in golf. You need to understand the different types </p>
      <List1 />
      </div>
    </div> 
  );
}


export default Tips;


import React from 'react';
import './../assets/css/App-header.css';
import Nav from './../state/nav'
//function NewPage


function Header() {
  return (
    <div className='in-body'>
      <header className='App-header'>
        <h1>
          Golf Betting
        </h1>
        <Nav />
      </header>
    </div> 
  );

}


export default Header;


import React from 'react';
import './../assets/css/App-header.css';
import Nav from './../state/nav'
//function NewPage


function Header() {
  return (
    <div className='in-body'>
      <header className='App-header'>
        <h1 className='h1'>
          Golf Betting
        </h1>
      <div>
        <Nav />
      </div>  
      </header>
    </div> 
  );

}


export default Header;


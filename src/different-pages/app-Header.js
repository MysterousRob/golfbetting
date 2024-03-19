import React from 'react';
import './css/App-header.css';
import Nav from '../nav/nav.js';
//function NewPage


function Header() {
  return (
    <div className='in-body'>
      <header className='App-header'>
        <h1 className='h1'>
          Golf Betting
        </h1>
      <div>
        {/*need to figgure out why my nav buttons arent working as i want them to nav to individual files */}
        <Nav />
      </div>  
      </header>
    </div> 
  );

}


export default Header;


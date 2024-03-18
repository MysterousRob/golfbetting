import React from 'react';
import './css/App-header.css';
import Nav from '../nav/nav';
//function NewPage


function Header() {
  return (
    <div className='in-body'>
      <header className='App-header'>
        <h1 className='h1'>
          Golf Betting
        </h1>
      <div className='nav'>
        {/*need to figgure out why my nav buttons arent working as i want them to nav to individual files */}
        {/* <Link to={navOptions[0].href}>
           <span>
            Home
           </span>
        </Link>

        <Link to={navOptions[1].href}>
          <span>
            Betting Tips
          </span>
        </Link>

        <Link to={navOptions[2].href}>
          <span>
            Live Odds
          </span>
        </Link>

        <Link to={navOptions[3].href}>
          <span>
            Bets of the Week
          </span>
        </Link>

        <Link to={navOptions[4].href}>
          <span>
            Betting Sites
          </span>
        </Link> */}
        <Nav />
      </div>  
      </header>
    </div> 
  );

}


export default Header;


import React from 'react';
import './../assets/css/app.css';
import Nav from './../state/nav';
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


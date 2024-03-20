import React from 'react';
import './css/app.css';
import './css/index.css';

import Header from './app-Header';
//function NewPage
// follow same styling as cricket betting with the coloring being the same as the main sites
function Sites() {
  return (
    <div>
      <Header />
      <div className='sites'>
        <h1>Different Golf Betting Websites</h1>
        <div className='box'> 
        <div>
         <h1 className=''>
          % bonusses to your $
          </h1>
         </div>
          <img className='img'/>
            
        </div>
      </div>
    </div> 
  );
}


export default Sites;


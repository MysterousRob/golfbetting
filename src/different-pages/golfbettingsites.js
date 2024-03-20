import React from 'react';
import './css/app.css';
import './css/index.css';
import Competiton from './tournaments/tournaments';
import Header from './app-Header';
//function NewPage
// follow same styling as cricket betting with the coloring being the same as the main sites
function Sites() {
  return (
    <div>
      <Header />
      <div className='tips'>
        <h1>Different Golf Betting Websites</h1>
      </div>
    </div> 
  );
}


export default Sites;


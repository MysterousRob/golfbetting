import React from 'react';
import './css/app.css';
import './css/index.css';
import Footer from './forhomepg/footer';

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
         <h1 className='box-h1'>
          % bonusses to your $
          </h1>
         </div>
          <img className='img'/>
            
        </div>
      </div>
      <Footer />
    </div> 
  );
}


export default Sites;


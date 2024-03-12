import React from 'react';
import './css/app.css';
import './css/index.css';
import Header from './app-Header';
import UsPga from './tournaments/uspga';
import OpenChamp from './tournaments/openchamp';
import TheMasters from './tournaments/themaster';
import TheOpen from './tournaments/theopen';
import Competiton from './tournaments/tournaments';
//function NewPage



function Home() {
  return (
    <div>
      <Header />
     <Competiton />
    </div>
  );

}


export default Home;


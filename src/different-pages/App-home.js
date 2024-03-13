import React from 'react';
import './css/app.css';
import './css/index.css';
import Header from './app-Header';
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


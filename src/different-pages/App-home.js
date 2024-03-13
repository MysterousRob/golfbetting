import React from 'react';
import './css/app.css';
import './css/index.css';
import Header from './app-Header';
import Competiton from './tournaments/tournaments';
import Section from './forhomepg/footer';
//function NewPage



function Home() {
  return (
    <div>
     <Header />
     <Competiton />
     <Section />
    </div> 
  );

}


export default Home;


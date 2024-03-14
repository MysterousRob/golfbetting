import React from 'react';
import './css/app.css';
import './css/index.css';
import Header from './app-Header';
import Competiton from './tournaments/tournaments';
import Footer from './forhomepg/footer'

//function NewPage

//need to fix background and impliment my form to home page 

function Home() {
  return (
    <div className='body'>
     <Header />
     <Competiton />
     <Footer/>
    </div> 
  );

}


export default Home;


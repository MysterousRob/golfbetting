import React from 'react';
import './../assets/css/app.css';
import './../assets/css/index.css';
import Header from './../components/Header';
import Competiton from './tournaments/tournaments';
import Footer from '../components/footer'
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


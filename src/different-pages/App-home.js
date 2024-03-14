import React from 'react';
import './css/app.css';
import './css/index.css';
import Header from './app-Header';
import Competiton from './tournaments/tournaments';
import Section from './forhomepg/footer';
import MyForm from './forhomepg/form';
//function NewPage

//need to fix background and impliment my form to home page 

function Home() {
  return (
    <div>
     <Header />
     <Competiton />
     <MyForm />
     <Section />
    </div> 
  );

}


export default Home;


import React from 'react';
import './Home.scss';
import Banner from '../Layout/Banner.jsx'
import AppartementsListe from '../components/AppartementsListe.jsx'



function Home() {
  return (
      
      <>
      <Banner />
      <AppartementsListe/>
      </>
     
  );
}

export default Home;

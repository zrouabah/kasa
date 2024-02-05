// AppartementsListe.jsx
import React, { useState, useEffect } from 'react';
import '../Sass/AppartementsListe.scss';
import Appartement from './Appartement';

function AppartementsListe() {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    fetchAppartements();
  }, []);

  function fetchAppartements() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((data) => setAppartements(data))
      .catch(console.error);
  }

  return (
    <div className='grid'>
      {appartements.map((appartement) => (
        <Appartement key={appartement.id} title={appartement.title} imageUrl={appartement.cover} id={appartement.id} />
      ))}
    </div>
  );
}

export default AppartementsListe;

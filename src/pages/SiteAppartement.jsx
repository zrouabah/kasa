import React, { useEffect, useState,  } from 'react';
import "./SiteAppartement.scss";
import DescriptionSection from '../components/DescriptionSection.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import AppartementHeader from '../components/AppartementHeader.jsx';
import { useLocation } from 'react-router-dom';

function SiteAppartement() {
  const location = useLocation();
  const [flat, setflat] = useState({});

  useEffect(() => {
    fetchAppartementData();
  },);

  function fetchAppartementData() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((flats) => {
        // Utilisez find avec une fonction de filtrage
        const flat = flats.find(flat => flat.id === location.state.appartementId);
        setflat(flat);
      })
      .catch(console.error);
  }

  return (
    <div className="site-appartement">
      {flat.pictures && <ImageBanner pictures={flat.pictures} />}
      <AppartementHeader flat={flat}/>
      <div className="appartement_description_flex">
        <DescriptionSection title= "Description" content ={flat.description}/>
        <DescriptionSection title="Equipements" 
          content={flat.equipments && flat.equipments.map((eq, index) => (
            <li key={index}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default SiteAppartement;

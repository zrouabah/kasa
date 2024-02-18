import React, { useEffect, useState,  } from 'react';
import "./SiteAppartement.scss";
import DescriptionSection from '../components/DescriptionSection.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import AppartementHeader from '../components/AppartementHeader.jsx';
import {useParams} from 'react-router-dom';
import logements from "../logements.json"

function SiteAppartement() {
  const [flat, setflat] = useState({});
  const {id}= useParams();
 console.log(logements)
  useEffect(() => {
    fetchAppartementData();
  },);

  function fetchAppartementData() {
  
        // Utilisez find avec une fonction de filtrage
    
        const flat = logements.find(flat => id === flat.id);
        setflat(flat);
     
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

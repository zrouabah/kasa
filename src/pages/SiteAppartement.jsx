import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./SiteAppartement.scss";
import DescriptionSection from '../components/DescriptionSection.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import AppartementHeader from '../components/AppartementHeader.jsx';
import logements from "../logements.json";

function SiteAppartement() {
  const [flat, setFlat] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppartementData();
  },);

  function fetchAppartementData() {
    const flat = logements.find((flat) => id === flat.id);

    if (!flat) {
      navigate('/error');
    }

    setFlat(flat);
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

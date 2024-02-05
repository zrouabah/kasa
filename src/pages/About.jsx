import React from 'react'
import './About.scss';
import DescriptionSection from '../components/DescriptionSection';
import ImageBanner from '../components/ImageBanner'
import myImage from '../assets/my-image.png';

function About (){
     return (
        <>
      <ImageBanner imageUrl={myImage} />
        <div className ="about_container"> 
            <DescriptionSection title ="Fiabilité" content="Les annonces postées sur Kasa garantisent une fiabilité totale.
            Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes"/>
            <DescriptionSection title ="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclution de notre plateforme. "/>
            <DescriptionSection title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclution de notre plateforme. "/>
            <DescriptionSection title ="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis pas nos service. 
            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes 
            de vérifier que les standarts sont bien respectés. 
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.  "/>
        </div>
        </>

     );
}

export default About;
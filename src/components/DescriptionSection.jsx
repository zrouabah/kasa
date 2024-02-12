import React, { useState } from 'react';
import './DescriptionSection.scss';

export function DescriptionSection(props) {
  // Cacher le texte
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    // Met à jour l'état en inversant sa valeur actuelle
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="description_section">
      <p className="description_header">
        <span>{props.title}</span>
        {/* Utilisation d'une classe conditionnelle en fonction de l'état */}
        <i className={`fa-solid ${isContentVisible ? 'fa-chevron-down' : 'fa-chevron-up'}`} 
        onClick={showContent}></i>
      </p>

      {isContentVisible && <p className="description_content">{props.content}</p>}
    </div>
  );
}

export default DescriptionSection;

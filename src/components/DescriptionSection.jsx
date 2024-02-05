import React, { useState } from 'react';
import './DescriptionSection.scss';

export function DescriptionSection(props) {
  // cacher le texte
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    //Met à jour l'état en inversant sa valeur actuelle
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="description_section">
      <p className="description_header">
        <span>{props.title}</span>
        <i className="fa-solid fa-chevron-down" onClick={showContent}></i>
      </p>

      {isContentVisible && <p className="description_content">{props.content}</p>}
    </div>
  );
}

export default DescriptionSection;

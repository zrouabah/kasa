import React, { useState } from 'react';
import './ImageBanner.scss';
import myImage from '../assets/my-image.png';

function AppartementBanner(props) {
  const { pictures } = props;
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    return i === currentPicture ? "show" : "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture - 1 + pictures.length) % pictures.length);
  };

  const moveToPrevious = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  if (!pictures || pictures.length === 0) {
    // Si pictures est absent ou vide, affiche myImage sans boutons
    return (
      <div className="image_banner">
        <div className="image_container">
          <img src={myImage} alt="Default" className="show" />
        </div>
      </div>
    );
  }

  // Si pictures est présent et contient plus d'une image, affiche le carrousel avec les boutons
  return (
    <div className="image_banner">
      <div className="image_container">
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt="" className={getClassName(i)} />
        ))}
      </div>
      {pictures.length > 1 && ( // Affiche les boutons seulement s'il y a plus d'une image
        <div>
          <button className="btn btn_next" onClick={moveToNext}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <span className="current_slide">
            {currentPicture + 1}/{pictures.length}
          </span>
          <button className="btn btn_previous" onClick={moveToPrevious}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default AppartementBanner;

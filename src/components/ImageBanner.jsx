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
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    setCurrentPicture((currentPicture - 1 + pictures.length) % pictures.length);
  };

  if (!pictures) {
    // Si pictures est absent, affiche myImage et cache les boutons
    return (
      <div className="image_banner">
        <div className="image_container">
          <img src={myImage} alt="Default" className="show" />
        </div>
      </div>
    );
  }

  // Si pictures est présent, affiche le carrousel avec les boutons
  return (
    <div className="image_banner">
      <div className="image_container">
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt="" className={getClassName(i)} />
        ))}
      </div>
      <div>
        <button className="btn btn_next" onClick={moveToNext}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="btn btn_previous" onClick={moveToPrevious}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default AppartementBanner;

import React from 'react';

import '../Sass/Appartement.scss';
import { Link } from 'react-router-dom';

;

function Appartement(props) {

    return ( 
    <Link to={`/flat/${props.id}`}
    state={{
      appartementId:props.id
      }}
      >
        <div className='Appart'>
          <img src={props.imageUrl} alt=""/>
            <div className='appartement_title'>{props.title}</div>
        
        </div>
      </Link>
    );
  }
  
  export default Appartement;
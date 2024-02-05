import React from 'react';
import './AppartementHeader.scss';

function AppartementHeader(props) {
  console.log("props in appartement header:", props);

  const flat = props.flat || {};
  const host = flat.host || {};
  const name = host.name || "";
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="appartement_header">
      <div className="appartement_title">
        <h1 className="appartement_title_text">{flat.title}</h1>
        <h2 className="appartement_location_text">{flat.location}</h2>
        <div className="appartement_elements">
          {flat.tags && flat.tags.map((tag, index) => (
            <span className="appartement_element" key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="owner_appartement">
        <div className="appartement_owner_flex">
          <h3>
            <span>{firstName}</span> 
            <span>{lastName}</span>
          </h3>
          <div className="appartement_owner_badge">
            {flat.host && flat.host.picture && (
              <img src={flat.host.picture} alt="" />
            )}
          </div>
        </div>
        <div className="appartement_owner_starts">
          {[1, 2, 3, 4, 5].map(num => (
            <span key={num} className={flat.rating >= num ? "selected" : ""}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppartementHeader;

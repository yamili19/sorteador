import React from 'react';
import './PremioComponent.css';

const PremioComponent = ({ premio }) => {
  return (
    <div className="premio-component">
      <h3>Premio: {premio.nombrePremio}</h3>
      <p>Patrocinador: {premio.nombreSponsor}</p>
      {premio.imagenSponsor && (
        <img
          src={`${premio.imagenSponsor}`}
          alt={premio.nombreSponsor}
        />
      )}
    </div>
  );
};

export default PremioComponent;


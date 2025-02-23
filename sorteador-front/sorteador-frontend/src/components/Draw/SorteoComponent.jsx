import React from 'react';
import './SorteoComponent.css';

const SorteoComponent = ({ historial, onSortear, isSortearEnabled }) => {
  return (
    <div className="sorteo-component">
      <h3>Ganador</h3>
      {historial.length > 0 && (
        <div className="resultado">
          <h3>{historial[historial.length - 1].nombreCompleto}</h3>
          <h1>{historial[historial.length - 1].dni}</h1>
          <p>Premio: {historial[historial.length - 1].nombrePremio}</p>
        </div>
      )}
      <button
        className="sortear-button"
        onClick={onSortear}
        disabled={!isSortearEnabled}
      >
        Sortear
      </button>
    </div>
  );
};

export default SorteoComponent;
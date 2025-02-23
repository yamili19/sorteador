import React from 'react';
import './HistorialComponent.css';

const HistorialComponent = ({ historial }) => {
  return (
    <div className="historial-component">
      <h3>Listado de Ganadores</h3>
      <ul>
        {historial.map((sorteo, index) => (
          <li key={index}>
            Premio: {sorteo.nombrePremio} - Ganador: {sorteo.nombreCompleto} - DNI: {sorteo.dni}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorialComponent;

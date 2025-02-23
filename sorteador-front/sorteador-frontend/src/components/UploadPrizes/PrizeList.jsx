import "./PrizeList.css";

const PrizeList = ({ premios }) => {
    return (
      <div className="prize-list">
        <h3>Premios Agregados:</h3>
        {premios.length === 0 ? (
          <p>No hay premios agregados.</p>
        ) : (
          <ul>
            {premios.map((prize) => (
              <li key={prize.idPremio}>
                <strong>{prize.nombrePremio}</strong> - {prize.nombreSponsor}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default PrizeList;
  
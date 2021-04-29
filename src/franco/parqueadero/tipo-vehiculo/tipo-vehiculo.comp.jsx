import React from 'react';

import './tipo-vehiculo.style.css';

const TipoVehiculo = (props) => {
    return (
      <div className="tipo-vehiculo-container">
         {props.TipoVehiculoName}
         
      </div>
   );
}

export default TipoVehiculo;
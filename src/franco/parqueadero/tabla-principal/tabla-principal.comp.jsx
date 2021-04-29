import React from 'react';
import Vehiculo from '../vehiculos/vehiculo.comp';
import Cliente from '../cliente/cliente.comp';

import './tabla-principal.style.css';

const TablaPrincipal = (prosp) => {
    
    return (
      <div className= "tabla-principal-container">
          <Cliente/>
          <Vehiculo registro={prosp.registro}/>
          
      </div>   
   );
}

export default TablaPrincipal;
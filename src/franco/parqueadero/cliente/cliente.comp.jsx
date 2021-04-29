import React from 'react';

import './cliente.style.css';

const Cliente = () => {
    return (
      <div className= "cliente-container">
          <input type="text" placeholder="Ingreso"/>
          <br/>
          <input type="checkbox"/> Consultar cliente
      </div>   
   );
}

export default Cliente;
import React from 'react';

import './ingreso.style.css';

const Ingreso = (props) => {
    return (
      <div className="ingreso-container">
         {props.ingreso.vehiculo} 
         {
            props.ingreso.valor <3
            ?
               <span className="ingreso valor-hora">{props.ingreso.valor}</span>

            :
               <span className="valor-hora">{props.ingreso.valor}</span>
         }
      </div> 
   );
}

export default Ingreso;
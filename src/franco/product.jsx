import React from 'react';
import TablaPrincipal from './parqueadero/tabla-principal/tabla-principal.comp';


const Product = () => {

   let registro=[
         {
            name:'Entrada',
            product:[
               {
                  name:'Carro',
                  precio: 2000,
               },
               {
                  name:'Moto',
                  precio: 1000, 
               },
            ]
         },
         {
            name:'Salida',
            product:[
               {
                  name:'Carro',
                  precio: 2000,
               },
               {
                  name:'Moto',
                  precio: 1000, 
               },

            ]
         },
      ];

    return (
      <TablaPrincipal registro={resgistro} />   
   );
}

export default Product;
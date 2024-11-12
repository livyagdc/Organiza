import React from 'react';

import { Itens } from './styles';

function ResumoItens({valor, titulo, color, borderColor, shadow}) {
  return (
   
   <Itens color={color} borderColor={borderColor} shadow={shadow}>
    <h2>{titulo}</h2>
    <span>R$ {valor}</span>
   </Itens>
   
   
  
  );
}

export default ResumoItens;
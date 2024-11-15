import React from 'react';
import ResumoItens from '../ResumoItens';
import { ResumoFinanceiro } from './styles';

function Resumo({saldo,entrada, saida}) {
  return (

    <ResumoFinanceiro>
       <ResumoItens valor={saldo} titulo="Saldo" color="53369E" borderColor="6c63ff" shadow= "fff"/>
       <ResumoItens valor={entrada} titulo="Entrada" color="059705" borderColor="0efb0e" shadow= "fff"/>
       <ResumoItens valor={saida} titulo="Saída" color="e74545" borderColor="e99d9d" shadow= "fff"/>
    </ResumoFinanceiro>
  );
}

export default Resumo;
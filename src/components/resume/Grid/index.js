import React from 'react';
import { MdArrowCircleUp, MdArrowCircleDown } from "react-icons/md";
import { format, parse, isValid } from 'date-fns';
import DeleteButton from '@/components/DeleteButton/DeleteButton';
import styles from '@/components/resume/Grid/index.module.css'

function Grid({ dadosFin, onDelete }) {
  const formatarData = (data) => {
    const dataParseada = new Date(data); // Converte diretamente para Date, já que o valor da data é ISO
    if (isValid(dataParseada)) {
      return format(dataParseada, 'dd/MM/yyyy'); // Exibe no formato desejado
    }
    return "Data inválida"; // Se a data for inválida
  };
  

  return (
    <div>
      <table className={styles.resumeTable}>
        <thead>
          <tr>
            <th width={20}>Data</th>
            <th width={30}>Categoria</th>
            <th width={30}>Descrição</th>
            <th width={40}>Valor</th>
            <th width={40} alignCenter>Tipo</th>
            
          </tr>
        </thead>

        <tbody>
          {dadosFin?.map((dadosFin, index) => {
            return (
              <tr key={index}>
                <td>{formatarData(dadosFin.data)}</td> {/* Usando a função de formatação */}
                <td>{dadosFin.categoriaSelecionada}</td>
                <td>{dadosFin.descricao}</td>
                <td>R${Math.abs(dadosFin.valor).toFixed(2)}</td>
                <td alignCenter>
                  
                  <div className={styles.categoryCell}>
                  {dadosFin.tipo === 1 ? (
                    <MdArrowCircleDown color="red" />
                  ) : (
                    <MdArrowCircleUp color="green" />
                  )}
                <DeleteButton onClick={() => onDelete(index)} />
                </div>
                </td>
                
                
                
              </tr>
              
            );
            
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;

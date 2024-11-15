import React from 'react';
import { MdArrowCircleUp, MdArrowCircleDown } from "react-icons/md";
import { format, parse, isValid } from 'date-fns';
import { Table, Th, Td } from './styles';
import DeleteButton from '@/components/DeleteButton/DeleteButton';

function Grid({ dadosFin, onDelete }) {
  const formatarData = (data) => {
    const dataParseada = new Date(data); // Converte diretamente para Date, já que o valor da data é ISO
    if (isValid(dataParseada)) {
      return format(dataParseada, 'dd/MM/yyyy'); // Exibe no formato desejado
    }
    return "Data inválida"; // Se a data for inválida
  };
  

  return (
    <Table>
      <thead>
        <tr>
          <Th width={20}>Data</Th>
          <Th width={30}>Categoria</Th>
          <Th width={30}>Descrição</Th>
          <Th width={40}>Valor</Th>
          <Th width={40} alignCenter>Tipo</Th>
          
        </tr>
      </thead>

      <tbody>
        {dadosFin?.map((dadosFin, index) => {
          return (
            <tr key={index}>
              <Td>{formatarData(dadosFin.data)}</Td> {/* Usando a função de formatação */}
              <Td>{dadosFin.categoriaSelecionada}</Td>
              <Td>{dadosFin.descricao}</Td>
              <Td>R${Math.abs(dadosFin.valor).toFixed(2)}</Td>
              <Td alignCenter>
                {dadosFin.tipo === 1 ? (
                  <MdArrowCircleDown color="red" />
                ) : (
                  <MdArrowCircleUp color="green" />
                )}
              </Td>
              <Td alignCenter>
                <DeleteButton onClick={() => onDelete(index)} />
              </Td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Grid;

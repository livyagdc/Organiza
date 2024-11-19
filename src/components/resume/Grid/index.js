import React from 'react';
import { MdArrowCircleUp, MdArrowCircleDown } from "react-icons/md";
import { format, isValid } from 'date-fns';
import DeleteButton from '@/components/DeleteButton/DeleteButton';
import styles from '@/components/resume/Grid/index.module.css';

function Grid({ dadosFin, onDelete }) {
    const formatarData = (data) => {
        const dataParseada = new Date(data);
        if (isValid(dataParseada)) {
            return format(dataParseada, 'dd/MM/yyyy');
        }
        return "Data inválida";
    };

    return (
        <div className={styles.gridDiv}>
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
                    {dadosFin?.map((dados, index) => {
                        // Verifica se é receita ou despesa e ajusta os campos conforme o tipo
                        const categoria = dados.tipo === 0 ? dados.categoriaSelecionadaIncome : dados.categoriaSelecionadaSpent;
                        const descricao = dados.tipo === 0 ? dados.descricaoIncome : dados.descricaoSpent;
                        const data = formatarData (dados.tipo === 0 ? dados.dataIncome : dados.dataSpent);
                        const valor = Number(dados.tipo === 0 ? dados.income : dados.spent);
                        // Garante que valor seja um número válido, caso contrário, atribui 0
                        const valorExibido = (typeof valor === 'number' && !isNaN(valor)) ? valor : 0;
                        

                        return (
                            <tr key={index}>
                                <td>{data}</td>
                                <td>{categoria}</td>
                                <td>{descricao}</td>
                                <td>R${Math.abs(valorExibido).toFixed(2)}</td> {/* Exibe o valor com sinal correto */}
                                <td alignCenter>
                                    <div className={styles.categoryCell}>
                                        {dados.tipo === 1 ? (
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

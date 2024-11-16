import { useState, useEffect } from "react";

export default function useIncomeHome() {
    const [dadosFin, setDadosFin] = useState([]);
    const [saldo, setSaldo] = useState(0);
    const [entrada, setEntrada] = useState(0);
    const [saida, setSaida] = useState(0);
    const [atualizaGrid, setAtualizaGrid] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const dadosSalvos = JSON.parse(localStorage.getItem('Financeiro')) ?? [];
            setDadosFin(dadosSalvos);
        }
    }, []);

    useEffect(() => {
        const totalSaida = dadosFin.filter((item) => item.tipo === 1).map((transaction) => Number(transaction.valor));
        const totalEntrada = dadosFin.filter((item) => item.tipo === 0).map((transaction) => Number(transaction.valor));

        const Entradas = totalEntrada.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const Saidas = totalSaida.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const saldoTotal = Entradas - Saidas;

        setSaldo(saldoTotal);
        setEntrada(Entradas);
        setSaida(Saidas);
    }, [dadosFin, atualizaGrid]);

    function handleSave(dados) {
        const data = [...dadosFin, dados];
        setDadosFin(data);
        setAtualizaGrid(!atualizaGrid);
        if (typeof window !== "undefined") {
            localStorage.setItem('Financeiro', JSON.stringify(data));
        }
    }

    function onDelete(index) {
        const data = [...dadosFin];
        data.splice(index, 1);
        setDadosFin(data);
        setAtualizaGrid(!atualizaGrid);
        if (typeof window !== "undefined") {
            localStorage.setItem('Financeiro', JSON.stringify(data));
        }
    }

    return {
        dadosFin,
        saldo,
        entrada,
        saida,
        handleSave,
        onDelete
    };
}

import { useState, useEffect } from "react";

export default function useIncomeHome() {
    const [dadosFin, setDadosFin] = useState([]);
    const [saldo, setSaldo] = useState(0);
    const [entrada, setEntrada] = useState(0);
    const [saida, setSaida] = useState(0);
    const [atualizaGrid, setAtualizaGrid] = useState(false);

    useEffect(() => {
        const email = localStorage.getItem("userEmail");
        if (email) {
            const dadosSalvos = JSON.parse(localStorage.getItem(`Financeiro_${email}`)) ?? [];
            setDadosFin(dadosSalvos);
        }
    }, []);

    useEffect(() => {
        const totalSaida = dadosFin.filter((item) => item.tipo === 1).map((transaction) => Number(transaction.spent));
        const totalEntrada = dadosFin.filter((item) => item.tipo === 0).map((transaction) => Number(transaction.income));

        const Entradas = totalEntrada.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const Saidas = totalSaida.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const saldoTotal = Entradas - Saidas;

        setSaldo(saldoTotal);
        setEntrada(Entradas);
        setSaida(Saidas);
    }, [dadosFin, atualizaGrid]);

    const dadosCombinados = [
        ...dadosFin.filter(item => item.tipo === 1), // Despesas
        ...dadosFin.filter(item => item.tipo === 0), // Receitas
    ];

    function handleSaveIncome(dados) {
        const data = [...dadosFin, dados];
        setDadosFin(data);
        setAtualizaGrid(!atualizaGrid);
        const email = localStorage.getItem("userEmail");
        if (email) {
            localStorage.setItem(`Financeiro_${email}`, JSON.stringify(data));
        }
    }

    function handleSaveSpent(dados) {
        const data = [...dadosFin, dados];
        setDadosFin(data);
        setAtualizaGrid(!atualizaGrid);
        const email = localStorage.getItem("userEmail");
        if (email) {
            localStorage.setItem(`Financeiro_${email}`, JSON.stringify(data));
        }
    }

    function onDelete(index) {
        const data = [...dadosFin];
        data.splice(index, 1);
        setDadosFin(data);
        setAtualizaGrid(!atualizaGrid);
        const email = localStorage.getItem("userEmail");
        if (email) {
            localStorage.setItem(`Financeiro_${email}`, JSON.stringify(data));
        }
    }

    return {
        dadosFin,
        saldo,
        entrada,
        saida,
        handleSaveIncome,
        handleSaveSpent,
        onDelete,
        dadosCombinados
    };
}

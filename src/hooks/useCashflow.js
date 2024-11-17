'use client';
import { useEffect, useState } from "react";

export default function useCashflow() {
    const [cashflow, setCashflow] = useState({ Incomes: [], Expenses: [] });
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [investments, setInvestments] = useState(0);

    useEffect(() => {
        // Essa parte aqui pega o fluxo de caixa que tá no localStorage do usuário logado
        const email = localStorage.getItem("userEmail");
        if (email) {
            const savedCashflow = JSON.parse(localStorage.getItem(`Cashflow_${email}`)) || { Incomes: [], Expenses: [] };
            setCashflow(savedCashflow);
        }
    }, []);

    useEffect(() => {
        if (cashflow) {
            const totalIncomes = cashflow.Incomes.reduce((acc, cur) => acc + cur.value, 0);
            const totalExpenses = cashflow.Expenses.reduce((acc, cur) => acc + cur.value, 0);
            const totalBalance = totalIncomes - totalExpenses;

            const totalInvestments = cashflow.Expenses
                .filter(expense => expense.category === "Investimento")
                .reduce((acc, cur) => acc + cur.value, 0);

            setIncome(totalIncomes);
            setExpense(totalExpenses);
            setBalance(totalBalance);
            setInvestments(totalInvestments);
        }
    }, [cashflow]);

    function handleSaveIncome(income) {
        const email = localStorage.getItem("userEmail");
        if (email) {
            const savedCashflow = JSON.parse(localStorage.getItem(`Cashflow_${email}`)) || { Incomes: [], Expenses: [] };
            savedCashflow.Incomes.push(income);
            
            localStorage.setItem(`Cashflow_${email}`, JSON.stringify(savedCashflow));
            setCashflow(savedCashflow);
        }
    };

    function handleSaveExpense(expense) {
        const email = localStorage.getItem("userEmail");
        if (email) {
            const savedCashflow = JSON.parse(localStorage.getItem(`Cashflow_${email}`)) || { Incomes: [], Expenses: [] };
            savedCashflow.Expenses.push(expense);

            localStorage.setItem(`Cashflow_${email}`, JSON.stringify(savedCashflow));
            setCashflow(savedCashflow);
        }
    };

    function handleDelete(id, type) {
        const email = localStorage.getItem("userEmail");
        if (email) {
            const savedCashflow = JSON.parse(localStorage.getItem(`Cashflow_${email}`)) || { Incomes: [], Expenses: [] };
            if (type === "income") {
                savedCashflow.Incomes = savedCashflow.Incomes.filter(item => item.id !== id);
            } else if (type === "expense") {
                savedCashflow.Expenses = savedCashflow.Expenses.filter(item => item.id !== id);
            }

            localStorage.setItem(`Cashflow_${email}`, JSON.stringify(savedCashflow));
            setCashflow(savedCashflow);
        }
    }

    return {
        balance,
        income,
        expense,
        investments,
        handleSaveIncome,
        handleSaveExpense,
        handleDelete,
    };

}
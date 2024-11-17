import { useState, useEffect } from 'react';

export default function useBudgets() {
    const [budgets, setBudgets] = useState([]);
    const [category, setCategory] = useState('');
    const [plannedAmount, setPlannedAmount] = useState('');

    useEffect(() => {
        const email = localStorage.getItem("userEmail");
        if (email) {
            const savedBudgets = JSON.parse(localStorage.getItem(`budgets_${email}`)) || [];
            setBudgets(savedBudgets);
        }
    }, []);

    const handleSaveBudget = () => {
        if (!category || !plannedAmount) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const email = localStorage.getItem("userEmail");

        const newBudget = {
            budgetId: Date.now(),
            category,
            plannedAmount: parseFloat(plannedAmount),
            spentAmount: 0,
        };

        // Evitar duplicação de categorias
        const existingBudget = budgets.find(budget => budget.category === category);
        if (existingBudget) {
            alert("Categoria já possui um orçamento definido.");
            return;
        }

        const updatedBudgets = [...budgets, newBudget];
        setBudgets(updatedBudgets);
        localStorage.setItem(`budgets_${email}`, JSON.stringify(updatedBudgets));


        setCategory('');
        setPlannedAmount('');
    };

    const handleDeleteBudget = (budgetId) => {
        const email = localStorage.getItem("userEmail");
        if (email) {
            const savedBudgets = JSON.parse(localStorage.getItem(`budgets_${email}`)) || [];
            const updatedBudgets = savedBudgets.filter(budget => budget.budgetId !== budgetId);
            setBudgets(updatedBudgets);
            localStorage.setItem(`budgets_${email}`, JSON.stringify(updatedBudgets));
        }

    };

    return {
        budgets,
        category,
        plannedAmount,
        setCategory,
        setPlannedAmount,
        handleSaveBudget,
        handleDeleteBudget,
    };
}

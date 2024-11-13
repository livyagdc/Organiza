import { useEffect, useState } from 'react';

export default function BudgetAlert() {
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        const savedBudgets = JSON.parse(localStorage.getItem('budgets')) || [];
        setBudgets(savedBudgets);
    }, []);

    useEffect(() => {
        budgets.forEach((budget) => {
            const percentageSpent = (budget.spentAmount / budget.plannedAmount) * 100;
            if (percentageSpent >= 80 && percentageSpent < 100) {
                alert(`Atenção: Você gastou ${percentageSpent.toFixed(2)}% do orçamento de ${budget.category}`);
            } else if (percentageSpent >= 100) {
                alert(`Orçamento Excedido: Você ultrapassou o orçamento de  ${budget.category}`);
            }
        });
    }, [budgets]);

    return null;
};
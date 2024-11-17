import useIncomeHome from '@/hooks/useIncomeHome';
import { useEffect, useState, useRef } from 'react';

export default function BudgetAlert() {
    const [budgets, setBudgets] = useState([]);
    const { dadosFin } = useIncomeHome();

    // Usando useRef para manter o controle dos orçamentos alertados
    const alertedBudgetsRef = useRef([]);

    useEffect(() => {
        const email = localStorage.getItem('userEmail');
        if (email) {
            const savedBudgets = JSON.parse(localStorage.getItem(`budgets_${email}`)) || [];
            setBudgets(savedBudgets);
        }
    }, []);

    useEffect(() => {
        // Verificar orçamentos e alertar
        budgets.forEach((budget) => {
            // Verifica se o orçamento já foi alertado, usando o useRef
            if (alertedBudgetsRef.current.includes(budget.budgetId)) {
                return; // Se já foi alertado, pula para o próximo
            }

            const spentList = dadosFin.filter(item => item.tipo === 1); // Filtrando os gastos
            const matchingItems = spentList.filter(item => item.categoriaSelecionadaSpent === budget.category);

            const totalSpentAmount = matchingItems.reduce((acc, item) => acc + Number(item.spent), 0);
            const percentageSpent = (totalSpentAmount / budget.plannedAmount) * 100;

            // Verifica as condições de alerta
            if (percentageSpent >= 80 && percentageSpent < 100) {
                alert(`Atenção: Você gastou ${percentageSpent.toFixed(2)}% do orçamento de ${budget.category}`);
                alertedBudgetsRef.current.push(budget.budgetId); // Marca como alertado
            } else if (percentageSpent >= 100) {
                alert(`Orçamento Excedido: Você ultrapassou o orçamento de ${budget.category}`);
                alertedBudgetsRef.current.push(budget.budgetId); // Marca como alertado
            }
        });
    }, [budgets, dadosFin]); // Monitorando alterações em budgets e dadosFin

    return null;
}

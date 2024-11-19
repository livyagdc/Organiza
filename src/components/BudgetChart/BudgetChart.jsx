import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import style from "./BudgetChart.module.css";
import useIncomeHome from '@/hooks/useIncomeHome';

export default function BudgetChart() {
    const [budgets, setBudgets] = useState([]);
    const [widthWindow, setWidthWindow] = useState(0);

    const {
        dadosFin
    }= useIncomeHome()

    useEffect(() => {
        setWidthWindow(window.innerWidth);

        const email = localStorage.getItem("userEmail");
        if (email) {
            const savedBudgets = JSON.parse(localStorage.getItem(`budgets_${email}`)) || [];
            if (Array.isArray(savedBudgets)) {
                setBudgets(savedBudgets);
            }
        }
    }, []);

    const mergedData = budgets.map(budget => {
        // Filtrar os itens de anotherData com a mesma category
        const spentList = dadosFin.filter((item) => item.tipo === 1);
        const matchingItems = spentList.filter(item => item.categoriaSelecionadaSpent === budget.category);
    
        // Somar os valores de spentAmount
        const totalSpentAmount = matchingItems.reduce((acc, item) => acc + Number(item.spent), 0);
    
        // Retornar o objeto budget com spentAmount incluído
        return {
            ...budget,
            spentAmount: totalSpentAmount,
        };
    });
    
    const widthGraph = (widthWindow) => {
        if (widthWindow <= 600) {
            return Number(250)
        } else {
            return Number(500)
        }
    }

    return (
        <div>
            <BarChart width={widthGraph(widthWindow)} height={300} data={mergedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="plannedAmount" fill="#2196F3" name="Planejado" />
                <Bar dataKey="spentAmount" fill="#ef4444" name="Gastos" />
            </BarChart>
        </div>
    );
};

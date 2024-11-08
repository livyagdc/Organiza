import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import style from "@/components/componentsStyles/BudgetChart.module.css";

export default function BudgetChart() {
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        // Verificar se estamos no lado do cliente
        if (typeof window !== "undefined") {
            const savedBudgets = JSON.parse(localStorage.getItem('budgets')) || [];
            if (Array.isArray(savedBudgets)) {
                setBudgets(savedBudgets);
            }
        }
    }, []);

    return (
        <div className={style.chartContainer}>
            <BarChart width={600} height={300} data={budgets}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="plannedAmount" fill="#8884d8" name="Planejado" />
                <Bar dataKey="spentAmount" fill="#82ca9d" name="Gastos" />
            </BarChart>
        </div>
    );
};

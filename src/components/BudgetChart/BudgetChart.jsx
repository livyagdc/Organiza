import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import style from "./BudgetChart.module.css";

export default function BudgetChart() {
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        const email = localStorage.getItem("userEmail");
        if (email) {
            const savedBudgets = JSON.parse(localStorage.getItem(`budgets_${email}`)) || [];
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
                <Bar dataKey="plannedAmount" fill="#2196F3" name="Planejado" />
                <Bar dataKey="spentAmount" fill="#ef4444" name="Gastos" />
            </BarChart>
        </div>
    );
};

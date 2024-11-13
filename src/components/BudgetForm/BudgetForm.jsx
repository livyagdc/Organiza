import { useState, useEffect } from 'react';
import style from "./BudgetForm.module.css";

// Lista de categorias predefinidas
const categories = [
    "Alimentação", "Animais de estimação", "Compras", "Construção", "Contas",
    "Doações e caridade", "Educação", "Fatura Cartão", "Gift card",
    "Imposto, juros e multa", "Investimento", "Lazer", "Mercado",
    "Moradia", "Recarga", "Saúde", "Seguros", "Serviços",
    "Transporte", "Vestuário", "Viagem", "Outras saídas"
];

export default function BudgetForm() {
    const [budgets, setBudgets] = useState([]);
    const [category, setCategory] = useState('');
    const [plannedAmount, setPlannedAmount] = useState('');

    //Carrega os dados do Local Storage
    useEffect(() => {
        const savedBudgets = JSON.parse(localStorage.getItem('budgets')) || [];
        setBudgets(savedBudgets);
    }, []);

    //Função para salvar orçamento
    const handleSaveBudget = () => {
        if (!category || !plannedAmount) {
            alert("Por favor, preencha todos os campos.")
            return;
        }

        const newBudget = {
            budgetId: Date.now(),
            category,
            plannedAmount: parseFloat(plannedAmount),
            spentAmount: 0,
        };

        //Evitar duplicação de categorias
        const existingBudget = budgets.find(budget => budget.category === category);
        if (existingBudget) {
            alert("Categoria já possui um orçamento definido. Por favor, edite o existente.");
            return;
        }


        const updatedBudgets = [...budgets, newBudget];
        setBudgets(updatedBudgets);
        localStorage.setItem('budgets', JSON.stringify(updatedBudgets));
        setCategory('');
        setPlannedAmount('');
    };

    return (
        <div className={style.budgetFormDiv}>
            <section className={style.budgetFormSection}>
                <h2 className={style.budgetFormTitle}>Definir Orçamento</h2>

                <select className={style.budgetFormSelect}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="" disabled>Selecione uma categoria</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>

                <input className={style.budgetFormInput}
                    type="number"
                    min="0"
                    placeholder="Valor planejado"
                    value={plannedAmount}
                    onChange={(e) => setPlannedAmount(e.target.value)}
                />

                <button className={style.budgetFormButton} onClick={handleSaveBudget}>Salvar Orçamento</button>

                <h3 className={style.budgetListTitle}>Orçamento Definidos</h3>
                <table className={style.budgetTable}>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Planejado (R$)</th>
                            <th>Gastos (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {budgets.map((budget) => (
                            <tr key={budget.budgetId}>
                                <td>{budget.category}</td>
                                <td>{budget.plannedAmount}</td>
                                <td>{budget.spentAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};
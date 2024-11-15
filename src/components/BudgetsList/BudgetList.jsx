import useBudgets from "@/hooks/useBudgets";
import styles from "./BudgetList.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";

export default function BudgetList() {

    const {
        budgets,
        handleDeleteBudget,
    } = useBudgets();

    return (
        <div className={styles.budgetsListDiv}>
            <section className={styles.budgetsListSection}>
                <h3 className={styles.budgetListTitle}>Orçamento Definidos</h3>
                <table className={styles.budgetTable}>
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

                                <td>
                                    <div className={styles.categoryCell}>
                                        {budget.category}
                                        <DeleteButton onClick={() => handleDeleteBudget(budget.budgetId)} />
                                    </div>
                                </td>
                                <td>{budget.plannedAmount}</td>
                                <td>{budget.spentAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div >
    );
};
